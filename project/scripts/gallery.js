const products = [
    {
        name: "Chocolate Cake",
        category: "Cake",
        description: "Rich and moist chocolate cake for all occasions",
        price: 8000,
        imageUrl: "images/chocolate-cake.jpg"
    },
    {
        name: "Vanilla Birthday Cake",
        category: "Cake",
        description: "Classic vanilla cake perfect for all your birthdays",
        price: 7500,
        imageUrl: "images/vanilla-cake.jpg"
    },
    {
        name: "Red Velvet Cake",
        category: "Cake",
        description: "Soft and creamy red velvet cake with frosting",
        price: 9000,
        imageUrl: "images/red-velvet.jpg"
    },
    {
        name: "Cupcakes",
        category: "Cupcake",
        description: "Delicious mini cupcakes in assorted flavors",
        price: 3000,
        imageUrl: "images/cupcakes.jpg"
    },
    {
        name: "Meat Pie",
        category: "Snack",
        description: "Hot and tasty meat pies with rich filling",
        price: 500,
        imageUrl: "images/meatpie.jpg"
    },
    {
        name: "Pizza",
        category: "Snack",
        description: "Freshly baked pizza with cheesy toppings",
        price: 4500,
        imageUrl: "images/pizza.jpg"
    },
    {
        name: "Chin-Chin",
        category: "Snack",
        description: "Crunchy and sweet chin-chin snacks",
        price: 2000,
        imageUrl: "images/chin-chin.jpg"
    },
    {
        name: "Egg Roll",
        category: "Snack",
        description: "Soft dough with egg filling inside",
        price: 700,
        imageUrl: "images/eggroll.jpg"
    },
    {
        name: "Wedding Cake",
        category: "Special",
        description: "Elegant multi-layer cake for weddings",
        price: 50000,
        imageUrl: "images/wedding-cake.jpg"
    },
    {
        name: "Custom Cake",
        category: "Special",
        description: "Personalized cakes based on any kind of event",
        price: 15000,
        imageUrl: "images/custom-cake.jpg"
    },
    {
        name: "Banana Bread",
        category: "Snack",
        description: "Freshly baked banana bread, soft and naturally sweet",
        price: 3000,
        imageUrl: "images/banana-bread.jpg"
    },
    {
        name: "Small Chops",
        category: "Snack",
        description: "A tasty mix of puff-puff, samosa, spring rolls, and more for any occasion",
        price: 5000,
        imageUrl: "images/small-chops.jpg"
    }
];

//element selector
const gallery = document.getElementById("gallery");


//Function declaration
function getProducts(productList) {
    gallery.innerHTML = "";

    productList.forEach(product => {
        const card = document.createElement("section");

        const name = document.createElement("h3");
        const category = document.createElement("p");
        const description = document.createElement("p");
        const price = document.createElement("p");
        const img = document.createElement("img");

        name.textContent = product.productName;
        name.innerHTML = `<strong>Name:</strong> ${product.name}`;
        category.innerHTML = `<strong>Category:</strong> ${product.category}`;
        description.innerHTML = `<strong>Description:</strong> ${product.description}`;
        price.innerHTML = `<strong>Price:</strong> $ ${product.price}`;

        img.src = product.imageUrl;
        img.alt = product.productName;
        img.loading = "lazy";

        card.append(name, category, description, price, img);
        gallery.appendChild(card);
    });
}

//call function
getProducts(products);
