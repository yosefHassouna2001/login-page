<<<<<<< HEAD

let addProdect = document.querySelector(".addProdect");
let navbarBrandImgAll = document.querySelector(".contat img")
let numProduct = document.querySelector(".numProduct ");
let addCart = document.querySelector(".addCart ");
let addCartBag = document.querySelector(".addCartBag ");


addProdect.onclick = _=>{
        let ProductName = document.querySelector(".namepro").innerText;
        let ProductPrice = document.querySelector(".price").innerText;
        let ProductImgSrc = navbarBrandImgAll.src;

        if (isNaN( numProduct.innerHTML)) {
            numProduct.innerHTML= 1;
        }
        else {
            numProduct.innerHTML++;
        }

        addCartBag.innerHTML  += 
        `

        <div class="row align-items-center border-bottom p-3 g-1">
            <div class="col-3">
                <img src="${ProductImgSrc}" alt="" class="img-fluid w-75">
            </div>
            <div class="col-6">
                <h5 class="card-title fs-6 ">${ProductName} </h5>
            </div>
            <div class="col-2">
                <h5 class="card-subtitle text-dark text-opacity-75">
                    $<span class="price">${ProductPrice}</span>
                </h5>
            </div>
            
        </div>

        `
  
      
=======

let addProdect = document.querySelector(".addProdect");
let navbarBrandImgAll = document.querySelector(".contat img")
let numProduct = document.querySelector(".numProduct ");
let addCart = document.querySelector(".addCart ");
let addCartBag = document.querySelector(".addCartBag ");


addProdect.onclick = _=>{
        let ProductName = document.querySelector(".namepro").innerText;
        let ProductPrice = document.querySelector(".price").innerText;
        let ProductImgSrc = navbarBrandImgAll.src;

        if (isNaN( numProduct.innerHTML)) {
            numProduct.innerHTML= 1;
        }
        else {
            numProduct.innerHTML++;
        }

        addCartBag.innerHTML  += 
        `

        <div class="row align-items-center border-bottom p-3 g-1">
            <div class="col-3">
                <img src="${ProductImgSrc}" alt="" class="img-fluid w-75">
            </div>
            <div class="col-6">
                <h5 class="card-title fs-6 ">${ProductName} </h5>
            </div>
            <div class="col-2">
                <h5 class="card-subtitle text-dark text-opacity-75">
                    $<span class="price">${ProductPrice}</span>
                </h5>
            </div>
            
        </div>

        `
  
      
>>>>>>> 2afe69788dea6e0ffd874ebf3cdf10463db4d8fd
    }