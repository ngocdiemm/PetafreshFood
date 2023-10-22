document.addEventListener("DOMContentLoaded", function () {
    // Lấy tham chiếu tới nút "Xem sản phẩm" bằng id
    const viewProductsButton = document.getElementById("viewProductsButton");

    // Xử lý sự kiện khi nút được nhấn
    viewProductsButton.addEventListener("click", function () {
        // Chuyển hướng đến trang "products.html"
        window.location.href = "aboutus.html";
    });
});