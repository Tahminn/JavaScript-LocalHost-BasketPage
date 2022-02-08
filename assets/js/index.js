import { getProductCount } from "./common.js";

let addBtns = document.querySelectorAll(".btn-primary");
let countElem = document.querySelector("sup");


if (JSON.parse(localStorage.getItem("products")) == null) {
    localStorage.setItem("products", JSON.stringify([]));
}
let products = JSON.parse(localStorage.getItem("products"));

addBtns.forEach(btn => {
    btn.onclick = function (e) {
        e.preventDefault();
        let productId = this.parentNode.parentNode.getAttribute("data-id");
        let productImg = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let existProduct = products.find(m => m.id == productId);

        if (existProduct == undefined) {
            products.push({
                id: productId,
                img: productImg,
                name: productName,
                count: 1
            })
        } else {
            existProduct.count += 1;
        }
        localStorage.setItem("products", JSON.stringify(products));
        countElem.innerText = getProductCount(products);
    }
})

countElem.innerText = getProductCount(products);

let button = document.getElementById("button");


