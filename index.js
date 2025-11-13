
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