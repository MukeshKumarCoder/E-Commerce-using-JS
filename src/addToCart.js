import { getCartProductFromLocalStorage } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLocalStorage();

export const addToCart = (id) => {
  let localStorageProduct = getCartProductFromLocalStorage();

  const currentProdElem = document.querySelector(`#card${id}`);
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;

  price = price.replace("₹", "");

  let existingProd = localStorageProduct.find((currProd) => currProd.id === id);

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };

    updatedCart = localStorageProduct.map((currProd) => {
      return currProd.id === id ? updatedCart : currProd;
    });

    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    showToast("add");
  }

  if (existingProd) {
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);

  localStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProducts", JSON.stringify(localStorageProduct));

  updateCartValue(localStorageProduct);

  showToast("add")
};
