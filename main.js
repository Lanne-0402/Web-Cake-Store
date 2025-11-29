
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

            // 5. LỌC SẢN PHẨM (Sidebar Filter)
$('.sidebar li').click(function() {
    let filter = $(this).data('filter'); // lấy loại bánh

    // Xóa highlight ở tất cả
    $('.sidebar li').removeClass('active-filter');

    // Thêm highlight chỗ được chọn
    $(this).addClass('active-filter');

    // Nếu chọn "Tất cả"
    if (filter === 'all') {
        $('.product-card').show();
        return;
    }

    // Ẩn tất cả
    $('.product-card').hide();

    // Hiện đúng loại được chọn
    $('.product-card[data-type="' + filter + '"]').show();
});

// ===============================
// 6. FILTER + PAGINATION + ANIMATION
// ===============================

let allProducts = $('.product-card');      // tất cả sản phẩm
let currentFilter = "all";                // loại đang chọn
let itemsPerPage = 9;                     // 9 sản phẩm mỗi trang
let currentPage = 1;                      // trang hiện tại

// Hàm render lại sản phẩm theo filter + pagination
function renderProducts() {
    // 1. Lọc theo loại
    let filtered = allProducts;

    if (currentFilter !== "all") {
        filtered = allProducts.filter(function () {
            return $(this).data('type') === currentFilter;
        });
    }

    // 2. Ẩn toàn bộ trước
    allProducts.hide().removeClass('show');

    // 3. Pagination
    let totalItems = filtered.length;
    let totalPages = Math.ceil(totalItems / itemsPerPage);

    // Giới hạn trang không vượt ngoài
    if (currentPage > totalPages) currentPage = 1;

    // Tính vị trí
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    let pageItems = filtered.slice(start, end);

    // 4. Hiển thị sản phẩm + animation
    pageItems.each(function (i) {
        $(this).show();

        setTimeout(() => {
            $(this).addClass('show');
        }, 100 * i);
    });

    renderPagination(totalPages);
}

// ===============================
// Tạo nút phân trang
// ===============================
function renderPagination(totalPages) {
    let pagination = $('.pagination');
    pagination.empty();

    for (let i = 1; i <= totalPages; i++) {
        let btn = $(`<button>${i}</button>`);

        if (i === currentPage) {
            btn.addClass('active-page');
        }

        btn.click(function () {
            currentPage = i;
            renderProducts();
        });

        pagination.append(btn);
    }
}

// ===============================
// LỌC CATEGORY KHI NHẤN SIDEBAR
// ===============================
$('.sidebar li').click(function () {
    currentFilter = $(this).data('filter');
    currentPage = 1; // reset về trang đầu

    $('.sidebar li').removeClass('active-filter');
    $(this).addClass('active-filter');

    renderProducts();
});

// ===============================
// KHỞI TẠO LẦN ĐẦU
// ===============================
renderProducts();


});