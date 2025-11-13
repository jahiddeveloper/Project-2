

// Load Category

let loadCategory = () => {

    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(json => {
            // console.log(json.categories);
            displayCategory(json.categories)
        })
}

let displayCategory = (categories) => {

    let categoryContainer = document.getElementById("categorie-container");

    categories.forEach((category) => {

        let categoryBtn = document.createElement("button");

        categoryBtn.innerHTML = `
        <button class="text-lg hover:text-white hover:bg-[#15803d] rounded-md cursor-pointer py-3 pl-3 w-69 text-left hover:transition duration-300">${category.category_name}</button>
        `

        categoryContainer.append(categoryBtn);
    })
}

loadCategory();

// Load Cart

let loadCart = () => {

    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(json => {
            // console.log(json.plants)
            displayCart(json.plants);
        })
}

let displayCart = (plants) => {

    let cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";

    plants.forEach((plant) => {

        let cart = document.createElement("div");

        cart.innerHTML = `
        <div class="bg-white p-4 shadow-sm rounded-xl">

                            <img class="w-full h-50 mx-auto object-cover rounded-xl" src="${plant.image}"
                                alt="">

                        <h1 class="mt-3 text-xl font-bold">${plant.name}</h1>
                        <p class="text-lg text-[#1f2937] mt-2">${plant.description}</p>

                        <div class="flex justify-between items-center mt-2">
                            <div class="bg-[#dcfce7] px-5 py-2 rounded-3xl text-[#15803d]">
                                <p>${plant.category}</p>
                            </div>

                            <div>
                                <p class="font-bold">৳<span>${plant.price}</span></p>
                            </div>
                        </div>
                        <button class="w-full bg-[#15803d] text-white py-4 rounded-4xl mt-3 cursor-pointer text-lg hover:bg-[#105a2b] hover:transition duration-300">Add to Cart</button>
                    </div>
        `

        cartContainer.append(cart)
    })
}

loadCart();