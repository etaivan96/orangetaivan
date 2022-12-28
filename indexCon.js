




// Calling main tags





let body = document.getElementsByTagName(`body`)[0];
let main = document.getElementsByTagName(`main`)[0];
let mainSection = document.getElementsByTagName(`section`)[0];
let header = document.getElementsByTagName (`header`)[0];
let asideHTML = document.getElementsByTagName(`aside`)[0]


function headerRow (){
let headerHTML = ``;
dataList.map((product)=> {
    headerHTML += `
    <div class="top justify-content-between d-flex">
        <div class="left">
            <div class="logo d-flex">
                <span class="d-flex"><img src="./images/Logo.svg" alt="Logo"><h4>S</h4></span>
                <h4>E-Commerce</h4>
            </div>
        </div>
        <div class="center">
            <form class="form-inline">
                <input id="searchBar" type="search" placeholder="Search" aria-label="Search">
            </form>
        </div>
        <div class="right">
            <button type="button" class="btn btn-outline-primary">Sign in</button>
            <button type="button" class="btn btn-outline-0">My cart</button>

        </div>
    </div>
    <div class="mw bottom">
        <ul class="d-flex gap-5 mw-75">
            <li><a href="#">Smartphones</a></li>
        </ul>
    </div>`;
    headerHTML = header.innerHTML;
})
}



// JS Functions
 let dataList = [];
function getData() {
     fetch (`https://dummyjson.com/products`)
    .then(response => response.json())
    .then(data => {
        dataList = [...data.products]
        drawHTML();
        aside();
    })
    .catch(err => console.log(err()))
}


getData();


function rating(){
    let stars = ``;
    for (i=0; i = product.rating; i++){
        stars = ``
    }
}

function drawHTML() {
    let row = ``;
    dataList.map((product)=>{
        row += `

        <div class="card border-0 rounded-0" style="width: 18rem;">
<img src="${product.thumbnail}" class="card-img-top rounded-0" alt="...">
<div class="card-body rounded-0">
  <h5 class="card-title text-center fw-normal">${product.title}</h5>
    <span class="sale">
        <p>${product.discountPercentage + `% OFF`}</p>
    </span>
  <h6 class="price fw-bold">${`$` + product.price}</h6>
  <p class="card-text">${product.description}</p>
  <div class="customerSection d-flex justify-content-between">
    <div class="rating d-flex align-items-center">
        <span class="stars d-flex align-items-center">
            <img src="./images/icons/rating/Full.svg" alt="full-star">
            <img src="./images/icons/rating/Full.svg" alt="full-star">
            <img src="./images/icons/rating/Full.svg" alt="full-star">
            <img src="./images/icons/rating/Full.svg" alt="full-star">
            <img src="./images/icons/rating/Half.svg" alt="full-star">
        </span>
        <span id="ratingNnumber">${product.rating}</span>
    </div>
    <a href="#" id="addToCartBtn" class="btn btn-outline-primary h-25"><img src="./images/icons/Vector.svg" alt="liked-icon"> Add to Cart </a>
  </div>

</div>
</div>`

mainSection.innerHTML = row;
    })
}


function aside () {
    let asideRow = ``;
    dataList.map((product)=> {
        asideRow += `
   <div class="categories">
    <ul>
        <li><a href="#">${product.category}</a></li>
    </ul>
   </div>`;
    asideRow = asideHTML.innerHTML;
    })
}

// Adding class in here



// Adding IDs in here



// Printing the result