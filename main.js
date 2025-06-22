'use strict';

let heart = document.querySelectorAll('.fa-heart');
heart.forEach(value => {
    value.addEventListener('click', () => {
        if(value.classList.contains('fa-regular')){
            value.classList.replace('fa-regular', 'fa-solid');
            value.setAttribute('style', 'color: #FF6633');
        }else {
            value.classList.replace('fa-solid', 'fa-regular');
            value.removeAttribute('style', 'color: #FF6633')
        }

        console.log(value.parentElement.parentElement);
        
    })
});

// Karzinka
const cartBtn = document.querySelectorAll('.cart');


let allDiv = JSON.parse(sessionStorage.getItem('allDiv')) || [];
cartBtn.forEach(value => {
    value.addEventListener('click', () => {
        // let div = value.parentElement.parentElement;
        // if(!allDiv.includes(div)){
        //     allDiv.push(div)
        //     sessionStorage.setItem('allDiv', JSON.stringify(allDiv));
        // }
    });
});


