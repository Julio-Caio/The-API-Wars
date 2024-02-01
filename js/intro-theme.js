const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    //aguarde 2.5 segundos para carregar a animação e som
    iniciar()

    setTimeout(() => {
        intro.classList.add('hidden')
    }, 2000) })

const loadingCircle = document.querySelector(".loading")
let width = window.innerWidth;
let height = window.innerHeight;
const intro = document.querySelector('.intro-text');
const historia = document.querySelector('.history-text');
const paragrafos = document.querySelector('.paragraphs');

const som = document.querySelector('.theme-song');
const canvas = document.querySelector('.snow');
const ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

intro.style.fontSize = width / 50 + 'px';
historia.style.fontSize = width / 20 + 'px';
paragrafos.style.height = height + 'px';

// ajustar as letras de acordo com o tamanho da tela
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  intro.style.fontSize = width / 30 + 'px';
  historia.style.fontSize = width / 20 + 'px';
  paragrafos.style.height = height + 'px';
});

function iniciar() {
  intro.className = 'intro-text intro-anim';
  historia.className = 'history-text history-anim';
  som.play();
}

function showLoading()
{
   loadingCircle.classList.remove("hidden")
}

function hideLoadingCircle()
{
    loadingCircle.classList.add("hidden")
}

/* Fundo de estrelas */
const num = 100;
const size = 2;
const elements = [];

function inicio() {
  for (let i = 0; i < num; i++) {
    elements[i] = {
      x: Math.ceil(Math.random() * width),
      y: Math.ceil(Math.random() * height ),
      size: Math.random() * size,
    };
  }
}

function nevar() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < num; i++) {
    const e = elements[i];
    ctx.beginPath();
    ctx.fillStyle = '#FFFFFF';
    ctx.arc(e.x, e.y, e.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

inicio();
nevar();