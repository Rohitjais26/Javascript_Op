

// function msg(){
//     alert("Don't Click")
// }
// console.log(msg())

// Function for Event

// let delbtn = document.getElementById('btn')

// // document.getElementById('btn').addEventListener('click', ()=>{})
// delbtn.addEventListener('click', ()=>{
//     confirm("Are you sure you want to delete this file")
//     delbtn.style.backgroundColor = "red"
    
// })


// To Add Event Listener to Multiple Elements
// document.getElementById('show').addEventListener('click',()=>{
//     document.getElementById('demo').style.color = "red"
// })

// document.getElementById('update').addEventListener('click',()=>{
//     document.getElementById('info').style.color = "green"

// })


let course = document.getElementById('course')
let result = document.getElementById('selectedCourse')

course.addEventListener('change', ()=>{
    let data = course.value
    result.textContent = `Selected Course: ${data}`
})

let circle = document.getElementById('light')

document.getElementById('red').addEventListener('click', ()=>{
    circle.style.backgroundColor = "red"
})

document.getElementById('green').addEventListener('click',()=>{
    circle.style.backgroundColor = "green"

})

document.getElementById('blue').addEventListener('click',()=>{
    circle.style.backgroundColor = "blue"
})