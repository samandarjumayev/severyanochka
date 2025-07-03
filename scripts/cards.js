'use strict';

const productsURL = 'https://dummyjson.com/products';
const aksiyaCards = document.querySelector('.aksiya');
let cardAksi = aksiyaCards.querySelectorAll('.card');

const novinkiCards = document.querySelector('.novinki');
let cardNovinki = novinkiCards.querySelectorAll('.card')

const pokupaliCards = document.querySelector('.pokupali');
let cardPokupali = pokupaliCards.querySelectorAll('.card')

let aksiya = [];
let novinki = [];
let pokupali = [];

async function getFetchData(){
    let pos = await fetch(productsURL);
    let resp = await pos.json();

    aksiya = resp["products"].slice(26, 30);
    novinki = resp['products'].slice(22, 26);
    pokupali = resp['products'].slice(10, 14);
    aksiyaDOM(aksiya);
    novinkiDOM(novinki);
    pokupaliDOM(pokupali);
}

function aksiyaDOM(massiv){
    for(let i = 0; i < cardAksi.length; i++){
        cardAksi[i].innerHTML = '';
        cardAksi[i].setAttribute('id', massiv[i]['id']);
        cardAksi[i].innerHTML = `
                    <div class="card-top">
                        <img src="${massiv[i]['images'][0]}" width="190" alt="">
                        <i class="fa-regular fa-heart"></i>
                        <span>
                            <p>${(i + 1) * 13}%</p>
                        </span>
                    </div>
                    <div class="card-bottom">
                        <div class="narx">
                            <div class="narx-chap">
                                <b>$${(massiv[i]['price'] / 100 * (100 - (i + 1) * 13)).toFixed(2)}</b>
                                <p>С картой</p>
                            </div>
                            <div class="narx-ung">
                                <b><del>$${massiv[i]['price']}</del></b>
                                <p>Обычная</p>
                            </div>
                        </div>

                        <div class="product-info">
                            <p>${massiv[i]['title']}</p>
                        </div>

                        <div class="product-rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <button class="cart">В корзину</button>
                    </div>`;
    }
}

function novinkiDOM(array){
    for(let i = 0; i < cardNovinki.length; i++){
        cardNovinki[i].innerHTML = '';
        cardNovinki[i].setAttribute('id', array[i]['id']);
        cardNovinki[i].innerHTML = `
                    <div class="card-top">
                        <img src="${array[i]['images'][0]}" width="190" alt="">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="card-bottom">
                        <div class="narx">
                            <div class="narx-chap">
                                <b>$${array[i]['price']}</b>
                            </div>
                        </div>

                        <div class="product-info">
                            <p>${array[i]['title']}</p>
                        </div>

                        <div class="product-rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <button class="cart">В корзину</button>
                    </div>`;
    }
}

function pokupaliDOM(array){
    for(let i = 0; i < cardPokupali.length; i++){
        cardPokupali[i].innerHTML = '';
        cardPokupali[i].setAttribute('id', array[i]['id']);
        cardPokupali[i].innerHTML = `
                    <div class="card-top">
                        <img src="${array[i]['images'][0]}" width="190" alt="">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="card-bottom">
                        <div class="narx">
                            <div class="narx-chap">
                                <b>$${array[i]['price']}</b>
                            </div>
                        </div>

                        <div class="product-info">
                            <p>${array[i]['title']}</p>
                        </div>

                        <div class="product-rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <button class="cart">В корзину</button>
                    </div>`;
    }
}

getFetchData()