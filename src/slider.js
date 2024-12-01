const imgs = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".botao i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
let time = 5000; // Tempo padrão para apresentação de slides automática
let autoSlideTimer; // Variável para armazenar o timer

const defClass = (startPos, index) => {
  // Atualiza as imagens
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.remove("fa-circle"); // Remove o preenchimento vazio
  dots[index].classList.add("fa-dot-circle"); // Adiciona preenchimento ao dot atual
};

const resetAutoSlide = () => {
  clearInterval(autoSlideTimer); // Limpa o timer atual
  startAutoSlide(); // Reinicia o timer
};

const handleManualSlide = (direction) => {
  if (direction === "left") {
    currentIndex <= 0 ? currentIndex = imgs.length - 1 : currentIndex--;
  } else if (direction === "right") {
    currentIndex >= imgs.length - 1 ? currentIndex = 0 : currentIndex++;
  }
  defClass(0, currentIndex);
  resetAutoSlide(); // Reinicia o timer após interação manual
};

leftArrow.addEventListener("click", function() {
  handleManualSlide("left");
});

rightArrow.addEventListener("click", function() {
  handleManualSlide("right");
});

// Adiciona funcionalidade aos "dots"
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    defClass(0, currentIndex);
    resetAutoSlide(); // Reinicia o timer após clique no "dot"
  });
});

const startAutoSlide = () => {
  autoSlideTimer = setInterval(() => {
    currentIndex >= imgs.length - 1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};

// Inicializa o slideshow
defClass(1, 0);
startAutoSlide();
