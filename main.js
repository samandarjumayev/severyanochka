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

// <i class="fa-solid fa-heart"></i>