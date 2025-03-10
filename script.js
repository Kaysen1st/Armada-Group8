document.getElementById("quantity").addEventListener("input", updateTotal);

function updateTotal() {
    let quantity = parseInt(document.getElementById("quantity").value);
    let pricePerItem = 10;
    document.getElementById("total-price").innerText = quantity * pricePerItem;
}

function addToCart() {
    let cartCount = document.getElementById("cart-count");
    let currentCount = parseInt(cartCount.innerText);
    let quantity = parseInt(document.getElementById("quantity").value);

    cartCount.innerText = currentCount + quantity;
    
    let successMessage = document.getElementById("success-message");
    successMessage.classList.remove("d-none");

    setTimeout(() => {
        successMessage.classList.add("d-none");
    }, 3000);
}
