const products = [
    {
        id: "cc-1888",
        name: "Chocolate Cake",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Vanilla Birthday Cake",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Red Velvet Cake",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Cupcakes",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Meat Pie",
        averagerating: 5.0
    },
    {
        id: "mp-1309",
        name: "Pizza",
        averagerating: 3.0
    },
    {
        id: "cc-1009",
        name: "Chin-Chin",
        averagerating: 4.3
    },
    {
        id: "er-1229",
        name: "Egg Roll",
        averagerating: 4.2
    },
    {
        id: "wc-2209",
        name: "Wedding Cake",
        averagerating: 3.2
    },
    {
        id: "cc-2899",
        name: "Custom Cake",
        averagerating: 4.9
    },
    {
        id: "bb-1199",
        name: "Banana Bread",
        averagerating: 3.8
    },
    {
        id: "sc-0278",
        name: "Small Chops",
        averagerating: 5.0
    }
];


const select = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});