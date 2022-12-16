const nameInput = document.querySelector("#name")
const buttonSubmit = document.querySelector("#botao")
const text = document.querySelector("#text")
const spanName = document.querySelector("#nameTxt")


buttonSubmit.addEventListener("click", function(e){
     
    e.preventDefault();
    const nameValue = nameInput.value;

    if(nameValue === ""){
        return alert("Por favor, complete as caixas")
    }

    if(text.style.display === 'none'){
        text.style.display = 'block'
    }
    else{
        text.style.display = 'none'
    }

   spanName.innerHTML = `${nameValue}` 

})

