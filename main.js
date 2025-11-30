
            $(document).ready(function() {
            
            // 1. CHUYỂN TRANG (NAVIGATION)
    
            // Toggle Menu Mobile
            $('.menu-toggle').click(function() {
                $('.nav-links').toggleClass('active');
            });

            // 2. SLIDER JS (Custom Slider cho Trang Chủ)
            var currentSlide = 0;
            var slides = $('.slide');
            var totalSlides = slides.length;

            function showSlide(index) {
                slides.removeClass('active-slide');
                slides.eq(index).addClass('active-slide');
            }

            // Nút Next
            $('.next-btn').click(function() {
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
            });

            // Nút Prev
            $('.prev-btn').click(function() {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                showSlide(currentSlide);
            });

            // Tự động chạy slide sau mỗi 5 giây
            setInterval(function() {
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
            }, 5000);

            // 3. ACCORDION (Trang Công Thức)
            $('.recipe-header').click(function() {
                // Đóng tất cả content khác
                $('.recipe-content').not($(this).next()).slideUp();
                // Toggle content hiện tại
                $(this).next('.recipe-content').slideToggle();
                // Toggle icon
                $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
            });

            // 4. FORM VALIDATION (Trang Liên Hệ)
            $('#orderForm').submit(function(e) {
                e.preventDefault(); // Ngăn form reload trang
                var isValid = true;

                // Validate Tên
                var name = $('#name').val().trim();
                if(name === "") {
                    $('#error-name').show();
                    isValid = false;
                } else {
                    $('#error-name').hide();
                }

                // Validate SĐT (Kiểm tra 10 chữ số)
                var phone = $('#phone').val().trim();
                var phoneRegex = /^[0-9]{10}$/;
                if(!phoneRegex.test(phone)) {
                    $('#error-phone').show();
                    isValid = false;
                } else {
                    $('#error-phone').hide();
                }

                // Validate Địa chỉ
                var address = $('#address').val().trim();
                if(address === "") {
                    $('#error-address').show();
                    isValid = false;
                } else {
                    $('#error-address').hide();
                }

                // Nếu tất cả hợp lệ
                if(isValid) {
                    alert("Cảm ơn bạn! Đơn hàng của bạn đã được gửi thành công.");
                    // Reset form
                    $('#orderForm')[0].reset();
                }
            });

           // ======================================================
// 1. BIẾN TOÀN CỤC
// ======================================================
let allProducts = $('.product-card');  
let currentFilter = "all";
let itemsPerPage = 9;
let currentPage = 1;


// ======================================================
// 2. HÀM HIỂN THỊ SẢN PHẨM SAU KHI LỌC + PHÂN TRANG
// ======================================================
function renderProducts() {

    // ---- Lọc theo loại ----
    let filtered = allProducts;

    if (currentFilter !== "all") {
        filtered = allProducts.filter(function () {
            return $(this).data('type') === currentFilter;
        });
    }

    // ---- Ẩn toàn bộ trước ----
    allProducts.hide().removeClass('show');

    // ---- Pagination ----
    let totalItems = filtered.length;
    let totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages === 0) totalPages = 1;
    if (currentPage > totalPages) currentPage = 1;

    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let pageItems = filtered.slice(start, end);

    // ---- Hiển thị + animation ----
    pageItems.each(function (i) {
        $(this).show();
        setTimeout(() => $(this).addClass('show'), 80 * i);
    });

    renderPagination(totalPages);
}


// ======================================================
// 3. TẠO NÚT PHÂN TRANG
// ======================================================
function renderPagination(totalPages) {
    let pagination = $('.pagination');
    pagination.empty();

    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
        let btn = $(`<button>${i}</button>`);

        if (i === currentPage) btn.addClass('active-page');

        btn.click(() => {
            currentPage = i;
            renderProducts();
        });

        pagination.append(btn);
    }
}


// ======================================================
// 4. CLICK SIDEBAR → LỌC CATEGORY
// ======================================================
$('.sidebar li').off().on('click', function () {
    currentFilter = $(this).data('filter');
    currentPage = 1;

    $('.sidebar li').removeClass('active-filter');
    $(this).addClass('active-filter');

    renderProducts();
});


// ======================================================
// 5. SORTING SẢN PHẨM
// ======================================================
$('#sortOption').on('change', function () {
    let option = $(this).val();

    allProducts = $('.product-card').toArray();

    if (option === "price-asc") {
        allProducts.sort((a, b) => $(a).data("price") - $(b).data("price"));
    }
    if (option === "price-desc") {
        allProducts.sort((a, b) => $(b).data("price") - $(a).data("price"));
    }
    if (option === "newest") {
        allProducts.sort((a, b) => $(b).data("id") - $(a).data("id"));
    }
    if (option === "bestseller") {
        allProducts.sort((a, b) => $(b).data("sold") - $(a).data("sold"));
    }

    allProducts = $(allProducts);

    // Gắn lại vào DOM theo thứ tự mới
    $('.products-grid').html(allProducts);

    currentPage = 1;
    renderProducts();
});


// ======================================================
// 6. KHỞI TẠO LẦN ĐẦU
// ======================================================
renderProducts();

});