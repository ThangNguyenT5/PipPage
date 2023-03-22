const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let openMenu = function () {
    var menuBox = $('.menu');
    menuBox.style.visibility= 'visible';
    menuBox.style.left = '0';
    window.onclick = function(event) {
        var btn = $('.menuIcon')
        var menuBox = $('.menu');
        console.log(event.target)
        if (event.target != menuBox && event.target != btn) {
            menuBox.style.visibility= 'hidden';
            menuBox.style.left = '-100%';
        }
    }
}

let openSearch = function () {
    var searchBox = $('.searchBox');
    searchBox.style.visibility= 'visible';
    searchBox.style.left = '-200px';
    window.onclick = function(event) {
        var btnSearch = $('.searchIcon');
        var searchBox = $('.searchBox');
        console.log(event.target)
        if (event.target != btnSearch) {
            searchBox.style.visibility= 'hidden';
            searchBox.style.left = '-100px';
        }
    }
}


let openShare = function () {
    var shareBox = $('.shareSocial');
    shareBox.style.visibility= 'visible';
    shareBox.style.top = '60px';
    window.onclick = function(event) {
        var btnShare = $('.shareIcon');
        var shareBox = $('.shareSocial');
        console.log(event.target)
        if (event.target != btnShare) {
            shareBox.style.visibility= 'hidden';
            shareBox.style.top = '0';
        }
    }
}