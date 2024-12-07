const button = document.getElementById('generate-color-btn')
const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange', 'black']

button.addEventListener('click', () => {
    const randomNumber = Math.floor(
        Math.random() * 256
    )
    const randomNumber2 = Math.floor(
        Math.random() * 256
    )
    const randomNumber3 = Math.floor(
        Math.random() * 256
    )
    document.body.style.backgroundColor = `rgb(${randomNumber}, ${randomNumber2}, ${randomNumber3
    })`
})