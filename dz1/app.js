const form = document.querySelector('#myForm')

form.addEventListener('submit',  (e) => {
    e.preventDefault()

    const mail = document.querySelector('#email')
    const passwordInput = document.querySelector('#password')
    const repeatPasswordInput = document.querySelector('#repeatPassword')

    const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    const passwordPattern = /^[A-Za-z]\w{3,15}$/

    const email = mail.value.trim()
    const password = passwordInput.value.trim()
    const repeatPassword = repeatPasswordInput.value.trim()

    if (!emailPattern.test(email)) {
        console.log('Invalid email')
        return
    }
    if (!passwordPattern.test(password)) {
        console.log('Invalid password')
        return;
    }
    if (password !== repeatPassword) {
        console.log('Password do not match')
        return;
    }

    console.log('Form submitted successfully')
})

