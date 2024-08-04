const formEl = document.querySelector('form')

const alertEl = document.querySelector('.alert')
const createEl = document.querySelector('.create-link')

const passEls = document.querySelectorAll('.passEl')


let form = new FormData(formEl, createEl)

createEl.addEventListener('click', (event) => {
    event.preventDefault()

    passOne = form.get('password-one')
    passTwo = form.get('password-two')

    if (passOne !== passTwo) {
        alertEl.textContent = '* Passwords do not match'
        alertEl.style.color = 'red'

        passEls.forEach(passEl => {
            passEl.style.border = '1px solid red'
            passEl.style.borderRadius = '3px'
        });
    }
})


