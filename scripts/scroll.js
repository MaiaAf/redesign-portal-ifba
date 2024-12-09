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
