'use strict';

// Karzinka
let karzinaCount = localStorage.getItem('karzinaCount') || 0;
let heartCount = localStorage.getItem('heartCount') || 0;

let karzinaIcon = document.getElementById('karzina-count');
let heartIcon = document.getElementById('heart-count');

karzinaIcon.textContent = karzinaCount;
heartIcon.textContent = heartCount;

document.addEventListener('click', (e) => {

    if(e.target.classList.contains('cart')){
        console.log(e.target.parentElement.parentElement);
        karzinaIcon.textContent = karzinaCount;
        localStorage.setItem('karzinaCount', karzinaCount++);
    }


    // Heart || Like
    if(e.target.classList.contains('fa-heart')){

        if(e.target.classList.contains('fa-regular')){
            e.target.classList.remove('fa-regular');
            e.target.classList.add('fa-solid');
            e.target.style.color = '#FF6633';

            localStorage.setItem('heartCount', heartCount++);
            heartIcon.textContent = heartCount;
        }else {
            e.target.classList.remove('fa-solid');
            e.target.classList.add('fa-regular');
            e.target.style.color = '#AFAFB2';

            localStorage.setItem('heartCount', heartCount--);
            heartIcon.textContent = heartCount;
        }

    }
    

    e.stopPropagation();
}, true)


// localStorage.clear();
// sessionStorage.clear();