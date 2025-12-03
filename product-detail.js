// Lấy data từ sessionStorage
const data = sessionStorage.getItem("selectedProduct");
if (!data) {
  alert("Không tìm thấy thông tin sản phẩm!");
  window.location.href = "product.html";
} else {
  const prod = JSON.parse(data);

  document.getElementById("detail-image").src = prod.img;
  document.getElementById("detail-name").innerText = prod.name;
  document.getElementById("detail-price").innerText = prod.price;
  document.getElementById("detail-desc").innerText = prod.desc;
}

// Có thể thêm phần “similar products” — ở đây tạm lấy các 4 sản phẩm đầu trong product.html để gợi ý
// Nếu muốn: bạn có thể xuất toàn bộ danh sách ra JSON rồi lọc theo category, v.v.
