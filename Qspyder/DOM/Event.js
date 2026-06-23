

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

document.getElementById('show').addEventListener('click',()=>{
    document.getElementById('demo').style.color = "red"
})

document.getElementById('update').addEventListener('click',()=>{
    document.getElementById('info').style.accentColor = "green"

})