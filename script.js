function login(element){
    if(element.innerText == "Login"){
        element.innerText = "Logout";
    }
    else{
        element.innerText = "Login";
    }
}

function likes(element){
    alert("Ninja was liked");
}

function remove(element){
    element.remove();
}