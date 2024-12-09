// Agradecimentos à Fireship: https://www.youtube.com/watch?v=T33NN_pPeNI
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // if (entry.isIntersecting) entry.target.classList.add("aparecer"); // Aparecer apenas uma vez
    entry.target.classList.toggle("aparecer", entry.isIntersecting); // Aparecer toda vez
  });
});

const hiddenElements = document.querySelectorAll(".escondido");

hiddenElements.forEach((el) => observer.observe(el));
