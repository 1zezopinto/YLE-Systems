const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))

// contato

document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.input');
    const textBox = document.getElementById('text-box');

    const texts = {
        option1: '<a href="https://wa.me/93992029378">(93) 99202-9378</a>',
        option2: '<a href="https://www.instagram.com/yle.systems" target="_blank">@yle.systems</a>',
        option3: '<a href="mailto:g4123ms@gmail.com">g4123ms@gmail.com</a>'
    };

    function updateText() {
        const selectedOption = document.querySelector('.input:checked').value;
        textBox.innerHTML = texts[selectedOption]; // Use innerHTML para incluir HTML
        textBox.style.display = 'block';
    }

    options.forEach(option => {
        option.addEventListener('change', updateText);
    });

    // Inicializa o texto exibido
    updateText();
});
