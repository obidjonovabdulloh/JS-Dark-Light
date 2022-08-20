const buttonElement = document.querySelectorAll("button")
const formElement = document.querySelector(".form")

buttonElement.forEach(e =>{
    e.addEventListener("click" , event => {
        console.log(e.dataset.toggle);
        if(e.dataset.toggle == "dark") {
            document.body.classList.remove("bg-light" , "text-dark")
            document.body.classList.add("bg-dark" , "text-light")
        }else{
            document.body.classList.add("bg-light" , "text-dark")
            document.body.classList.remove("bg-dark" , "text-light")
        }
    })
})