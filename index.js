const heartBtns = document.getElementsByClassName("fa-heart");

const toggleHeart = (e) => {
    if(e.target.classList.value === "card--footer-btn far fa-heart"){
        e.target.classList.value = "card--footer-btn fas fa-heart"
    }
    else if(e.target.classList.value === "card--footer-btn fas fa-heart"){
        e.target.classList.value = "card--footer-btn far fa-heart"
    }
    else if(e.target.classList.value === "card--footer-btn card-tom--footer-btn far fa-heart"){
        e.target.classList.value = "card--footer-btn card-tom--footer-btn fas fa-heart"
    }
    else if(e.target.classList.value === "card--footer-btn card-tom--footer-btn fas fa-heart"){
        e.target.classList.value = "card--footer-btn card-tom--footer-btn far fa-heart"
    }
}

for(heartBtn of heartBtns){
    heartBtn.addEventListener("click",toggleHeart)
}
//     