
let hamza = document.querySelector("h5")

let btn= document.querySelector("#add")
let num = 0;

btn.addEventListener("click" ,function(){
    if(num == 0){
    hamza.innerHTML = "friends"
    hamza.style.color = "green"
    btn.innerHTML = "remove"

    num = 1
    }else{
        hamza.innerHTML = "Stranger"
    hamza.style.color = "red"
    btn.innerHTML = "Add friend"


    }
})

 


// let Hamza = document.querySelector("#remove")

// Hamza.addEventListener("click", function(){
//     hamza.innerHTML = "stranger"
//     hamza.style.color = "red"
// })
