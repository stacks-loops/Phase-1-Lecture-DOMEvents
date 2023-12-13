const h1 = document.querySelector('h1')

console.log(h1)
// this function changes the color of h1
function changeColor() {
    h1.style.color = "#6f3"
}
//this adds an eventlistener so when the mouse goes over h1 the function is called
h1.addEventListener('mouseover', changeColor)

function changeColorBack() {
    h1.style.color = "black"
}
h1.addEventListener('mouseout', changeColorBack)

//h1.addEventListener('mouseout', () => h1.style.color = "black")

// function changeColor(isMouseOver)
//     if(isMouseOver) {
//         h1.style.color = 'green'

//     }
//     else {
//         h1.style.color = 'black'
//     }

const button = document.querySelector('#button1')


console.log(button)

function changeButtonText() {
    button.textContent = "Clicked!"

}

button.addEventListener('click', changeButtonText)

const button2 = document.querySelector('#button2')

console.log(button2)

const bg = document.querySelector('body')

console.log(bg)

function changeBGColor() {
    bg.style['background-color'] = 'goldenrod'
}

//button2.addEventListener('click', changeBGColor)
button2.addEventListener('click', () => bg.style.backgroundColor = 'goldenrod')

const form = document.querySelector('form')

console.log(form)

// handleSubmit is a function

form.addEventListener('submit', (e) => handleSubmit(e))

function handleSubmit(e) {
    e.preventDefault()

   const name = e.target.name.value

   const p = document.querySelector('p')

   p.textContent = `Welcome, ${name}!`

   const submitBtn = e.target.btn

   submitBtn.style.backgroundColor = 'pink'
}



