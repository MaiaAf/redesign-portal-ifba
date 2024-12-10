// Redirecionar suave dos links
const $root = $("html, body");

$('a[name="suave"], #subir').click(function () {
  $root.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500,
  );

  return false;
});

// Desaparecer botão de subir para o topo

$(document).ready(function () {
  const btnsubir = $("#subir");
  btnsubir.fadeOut(0);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      btnsubir.fadeIn(500);
    } else {
      btnsubir.fadeOut(500);
    }
  });
});

// Adicionar classe à elementos baseado na posição da rolagem da tela

// Fonte: Fireship - https://www.youtube.com/watch?v=T33NN_pPeNI

// Há duas instâncias da classe IntersectionObserver, uma lida com elementos
// que vem de fora da tela e outros que estão perto da tela.
// O objeto "observer" tem o atributo "rootMargin" que serve para
// retardar o aparecimento do elemento, se fosse usado em elementos
// que vem de fora da tela, o elemento não apareceria nunca.

const observeNoMargin = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aparecer");
      observeNoMargin.unobserve(entry.target);
    }
  });
});

const nomargin = $(".nomargin");
Array.from(nomargin).forEach((el) => observeNoMargin.observe(el));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aparecer");
        observer.unobserve(entry.target);
      } // Aparecer apenas uma vez
      // entry.target.classList.toggle("aparecer", entry.isIntersecting); // Aparecer toda vez
    });
  },
  {
    rootMargin: "-20px",
  },
);

const hiddenElements = document.querySelectorAll(".escondido");

hiddenElements.forEach((el) => observer.observe(el));
