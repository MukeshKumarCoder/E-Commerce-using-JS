export function showToast(operation) {
  const toast = document.querySelector("div");
  toast.classList.add("toast");

  if (operation === "add") {
    toast.textContent = `product has been added`;
  } else {
    toast.textContent = `product has been deleted`;
  }

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}
