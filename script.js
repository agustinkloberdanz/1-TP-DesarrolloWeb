const errorMessage = document.getElementById('error')
const input = document.getElementById('email')

const handleClick = (email) => {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]/
    if (email == '' || !regex.test(email)) {
        errorMessage.style.display = 'block'
        input.setAttribute('class', 'error')
    } else {
        alert(`Success, thanks "${email}" for your subscription!`)
    }
}