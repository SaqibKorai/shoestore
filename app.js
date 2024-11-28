document.addEventListener('DOMContentLoaded', function() {
    var productCards = document.getElementById('productCards');
    var productFilter = document.getElementById('productFilter');

    var products = [
        { image: 'images/AIR+JORDAN+1+LOW.jfif', name: 'Air Jordan 1 Low', category: 'air jordan', price: '$135' },
        { image: 'images/AIR+JORDAN+1+MID.jfif', name: 'Air Jordan 1 Mid SE', category: 'air jordan', price: '$135' },
        { image: 'images/NIKE+DUNK+LOW+RETRO.jfif', name: 'Nike Dunk Low Retro', category: 'dunk', price: '$52.97' },
        { image: 'images/NIKE+DUNK+LOW+RETRO (1).jfif', name: 'Nike Dunk Low ', category: 'dunk', price: '$79.97' },
        { image: 'images/AIR+VAPORMAX+PLUS.jfif', name: 'Nike Air VaporMax Plus', category: 'Air Max', price: '$180.97' },
        { image: 'images/AIR+VAPORMAX+2023+FK.jfif', name: 'Nike Air VaporMax 2023', category: 'Air Max', price: '$180.97' },
        { image: 'images/LEBRON+XXII+QS.jfif', name: 'LeBron XXII "Currency"', category: 'LeBron James', price: '$180' },
        { image: 'images/ZM+LEBRON+NXXT+GEN+AMPD+DT.jfif', name: 'LeBron NXXT Gen', category: 'LeBron James', price: '$120' },
    ];

    function displayProducts(productsToDisplay) {
        productCards.innerHTML = '';
        for (var i = 0; i < productsToDisplay.length; i++) {
            var product = productsToDisplay[i];
            var card = document.createElement('div');
            card.className = 'col';
            card.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                    </div>
                </div>
            `;
            productCards.appendChild(card);
        }
    }

    function filterProducts() {
        var filterValue = productFilter.value;
        var filteredProducts = [];
        for (var i = 0; i < products.length; i++) {
            if (filterValue === 'all' || products[i].category.toLowerCase() === filterValue.toLowerCase()) {
                filteredProducts.push(products[i]);
            }
        }
        displayProducts(filteredProducts);
    }

    productFilter.addEventListener('change', filterProducts);

    displayProducts(products);
});
