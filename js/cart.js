window.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const container = document.getElementById("cart-items");
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p class='text-center'>Your cart is empty.</p>";
  } else {
    container.innerHTML = cart.map(item => {
      const product = products.find(p => p.id === item.id);
      const subtotal = product.price * item.qty;
      total += subtotal;
      return `
        <div class="flex justify-between items-center border-b py-4">
          <div>
            <h3 class="font-semibold">${product.name}</h3>
            <p>Qty: ${item.qty}</p>
          </div>
          <div>Rs ${subtotal}</div>
        </div>
      `;
    }).join('') + `
      <div class="mt-4 text-right font-bold">Total: Rs ${total}</div>
      <div style="text-align:center;">
  <a href="checkout.html" style="display:inline-block; background-color:#a08f76; color:#231709; text-align:center; padding:0.75rem 1.5rem; border-radius:0.5rem; font-weight:600; box-shadow:0 2px 6px rgba(0,0,0,0.15); text-decoration:none;">
    Proceed to Checkout
  </a>
</div>
    `;
  }
});
