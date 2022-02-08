import { getProductCount } from "./common.js";

let table = document.getElementById("table");
let countElem = document.querySelector("sup");

let products = [];
if (JSON.parse(localStorage.getItem("products")) != null) {
  products = JSON.parse(localStorage.getItem("products"));
}

getProductList(products);
function getProductList(list) {
  for (const product of list) {
    table.lastElementChild.innerHTML += `<tr>
        <th>
            <img src="${product.img}" style="height:80px" alt="">
        </th>
        <td>${product.name}</td>
        <td>${product.count}</td>
        <td style="display:none">${product.id}</td>
        <td><i class="fa-solid fa-ban fa-3x" style="cursor: pointer; width: 40px; height: 40px;"></i></td>
        </tr>`;
  }
}
countElem.innerText = getProductCount(products);
let deleteIcons = document.querySelectorAll(".fa-ban");

deleteIcons.forEach (deleteIcon => {
    deleteIcon.addEventListener("click", function () {
        for (const product of products) {
            if( this.parentNode.previousElementSibling.innerText == product.id){
                const index = products.indexOf(product);
                if (index > -1){
                    products.splice(index, 1);
                    localStorage.setItem("products", JSON.stringify(products));
                }
                document.location.reload(true);
            }
        }      
    });    
});

let deleteAll = document.querySelector(".delete-all");
deleteAll.addEventListener("click", function () {
  localStorage.removeItem("products");
  document.location.reload(true);
});
