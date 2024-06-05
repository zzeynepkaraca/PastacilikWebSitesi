
  // Arama simgesine tıklandığında arama kutusunu açma işlevi
document.querySelector('.search-btn').addEventListener('click', function() {
    var searchBox = document.getElementById('search-box');
    // Arama kutusu gösteriliyorsa gizle, gösterilmiyorsa göster
    if (searchBox.style.display === 'block') {
        searchBox.style.display = 'none';
    } else {
        searchBox.style.display = 'block';
    }
});

var menuBtn = document.getElementById('menu-btn');
var navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

document.getElementById('shopping-cart-btn').addEventListener('click', function() {
  var cartContainer = document.getElementById('cart-items-container');
  cartContainer.classList.toggle('active');
});


