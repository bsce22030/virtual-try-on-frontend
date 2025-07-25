document.getElementById("checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  localStorage.removeItem("cart");
  location.href = "confirmation.html";
});