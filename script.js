const inputMensagem = document.querySelector('#msg')
const buttonForm = document.querySelector('.btn-contact')
const inputNome = document.querySelector('#name')
const alert = document.querySelector('.alert')

const prev = document.querySelector('.arrow-left-button')
const next = document.querySelector('.arrow-right-button')
const teams = document.querySelectorAll('.team');
const team = document.querySelector('.team')
const dots = document.querySelectorAll('.dot')

let carrossel = 0;

function mandarMsg() {
    const text = encodeURIComponent(inputMensagem.value)
    const link = `https://wa.me/5582996177211?text=${text}`
    window.open(link, '_blank');
}

buttonForm.addEventListener('click', (e) => {
    e.preventDefault()

    if (inputMensagem.value === '' || inputNome.value === '') {
        alert.style.opacity = 1
        alert.innerHTML = 'Preencha todos os campos!'

        setTimeout(() => {
            alert.style.opacity = 0
        }, 3000);
    } else {
        mandarMsg()
        inputMensagem.value = ''
        inputNome.value = ''
    }
})

function update(direcao) {
    carrossel += direcao

    if (carrossel <= -1) {
        carrossel = 1
    }

    if (carrossel >= 2) {
        carrossel = 0
    }

    dots.forEach(dots => dots.classList.remove('active'))
    dots[carrossel].classList.add('active')
    teams.forEach(t => t.classList.remove('current'));
    teams[carrossel].classList.add('current');
    console.log(carrossel)
}

next.addEventListener('click', () => {
    update(1);
});

prev.addEventListener('click', () => {
    update(-1);
});