const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'));

if (window.location.pathname.includes('index.html')) {
  const container = document.getElementById("product-list");
  products.forEach(product => {
    container.innerHTML += `
      <div class="bg-white rounded shadow p-4">
        <img src="${product.image}" class="w-full h-48 object-cover rounded" />
        <h2 class="mt-2 font-semibold">${product.name}</h2>
        <p class="text-[#a08f76]">Rs ${product.price}</p>
        <div class="mt-2 flex justify-between">
          <a href="product.html?id=${product.id}" class="text-sm text-[#a08f76] hover:underline">View</a>
          <button onclick="addToCart(${product.id})" class="text-sm bg-[#a08f76] text-white px-3 py-1 rounded">Add</button>
        </div>
      </div>`;
  });
}

if (window.location.pathname.includes('product.html') && productId) {
  const product = products.find(p => p.id === productId);
  const container = document.getElementById("product-detail");
  container.innerHTML = `
    <img src="${product.image}" class="w-full h-96 object-cover rounded mb-4" />
    <h2 class="text-2xl font-bold">${product.name}</h2>
    <p class="text-[#a08f76] text-xl">Rs ${product.price}</p>
    <p class="my-4">${product.description}</p>
    <div class="flex gap-4">
      <button onclick="addToCart(${product.id})" class="text-sm text-white px-3 py-1 rounded" style="background-color: #a08f76;">Add to cart</button>
      <button class="border px-4 py-2 rounded text-[#a08f76] border-[#a08f76]">Try On</button>
    </div>
  `;
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const item = cart.find(i => i.id === id);
  if (item) item.qty += 1;
  else cart.push({ id, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}