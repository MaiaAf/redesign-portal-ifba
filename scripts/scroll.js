// Redirecionar suave dos links
const $root = $("html, body");

$('a[href^="#"]').click(function () {
  $root.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500,
  );

  return false;
});

// Desaparecer botão de subir para o topo

$(document).ready(function() {
  const btnsubir = $('#subir')
  btnsubir.fadeOut(0)

  var offset = 200;
  $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
          btnsubir.fadeIn(500);
      } else {
          btnsubir.fadeOut(500);
      }
  });

  btnsubir.click(function(event) {
      event.preventDefault();
      $root.animate({scrollTop: 0}, 500);
      return false;
  })
});



// Adicionar classe à elementos baseado na posição da rolagem da tela

// Fonte: Fireship - https://www.youtube.com/watch?v=T33NN_pPeNI
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("aparecer"); // Aparecer apenas uma vez
    // entry.target.classList.toggle("aparecer", entry.isIntersecting); // Aparecer toda vez
  });
});

const hiddenElements = document.querySelectorAll(".escondido");

hiddenElements.forEach((el) => observer.observe(el));
