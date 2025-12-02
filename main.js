
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

            // 3. TRANG SẢN PHẨM
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
// KHỞI TẠO LẦN ĐẦU
// ======================================================
renderProducts();

});

            // 4. TRANG CÔNG THỨC
            // ==================
            $(document).ready(function () {
    $(".recipe-menu-item").click(function () {
        // Bỏ active ở tất cả
        $(".recipe-menu-item").removeClass("active");
        $(this).addClass("active");

        // Ẩn mọi content
        $(".recipe-box").addClass("hidden");

        // Hiện box tương ứng
        let target = $(this).data("target");
        $("#" + target).removeClass("hidden");
    });
});

// DATA MÓN LIÊN QUAN — có thể thêm bao nhiêu món tùy thích
const relatedData = {
    macaron: [
        {
            name: "Madeleine Bơ Pháp",
            img: "https://tahu.edu.vn/wp-content/uploads/2024/08/banh-Madeleines-la-gi.jpg",
            link: "https://sallysbakingaddiction.com/madeleines//"
        },
        {
            name: "Pavlova Trái Cây",
            img: "https://img.taste.com.au/u9pHZRmr/taste/2020/12/web_lamington-pavlova-cake-167775-1.jpg",
            link: "https://sallysbakingaddiction.com/pavlova/"
        },
        {
            name: "Choux Cream (Bánh Su Kem)",
            img: "https://www.fackelmann.fr/cdn/shop/articles/choux-a-la-creme-77_1600x1600.jpg?v=1726668995",
            link: "https://sallysbakingaddiction.com/choux-pastry//"
        }
    ],

    donut: [
        {
            name: "Bomboloni - Donut Ý",
            img: "https://cravinghomecooked.com/wp-content/uploads/2024/12/italian-bomboloni-1-500x500.jpg",
            link: "https://preppykitchen.com/bomboloni/"
        },
        {
            name: "Cronut - Bánh Donut Pháp-Mỹ",
            img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/April_2016_Cronut%C2%AE_2_Burnt_Vanilla_Caramel_-_photo_by_Dominique_Ansel_Bakery.jpg",
            link: "https://serenalissy.com/the-cronut/"
        },
        {
            name: "Beignet rán đường",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKDxequXozWNbxnCFzn29BoPn-_A5te18zg&s",
            link: "https://preppykitchen.com/beignets/"
        },
        {
            name: "Doughnut Holes - Bánh Donut Nhân Kem",
            img: "https://www.crunchtimekitchen.com/wp-content/uploads/2015/12/donutholes_feature-review.jpg",
            link: "https://sallysbakingaddiction.com/glazed-chocolate-donut-holes/"
        },
        {
            name: "Bánh rán đường Hàn Quốc - Kkwabaegi",
            img: "https://www.beyondkimchee.com/wp-content/uploads/2023/11/twisted-donuts-kkwabaegi-thumbnail.jpg",
            link: "https://cinnamonsnail.com/korean-twisted-doughnut-recipe/"
        }
    ],

    cookies: [
        {
            name: "Oatmeal Raisin Cookies",
            img: "https://lovingitvegan.com/wp-content/uploads/2021/10/Vegan-Oatmeal-Raisin-Cookies-Square-2.jpg",
            link: "https://sallysbakingaddiction.com/soft-chewy-oatmeal-raisin-cookies/"
        },
        {
            name: "Bánh quy bơ đậu phộng",
            img: "https://crayonsandcravings.com/wp-content/uploads/2022/04/Old-fashioned-peanut-butter-cookies.jpg",
            link: "https://sallysbakingaddiction.com/soft-peanut-butter-cookie-recipe/"
        },
        {
            name: "Brown butter cookies",
            img: "https://pinchofyum.com/wp-content/uploads/Favorite-Browned-Butter-Chocolate-Chip-Cookies-Square.jpg",
            link: "https://sallysbakingaddiction.com/brown-butter-sugar-cookies/"
        },
        {
            name: "Bánh quy gừng",
            img: "https://phunuvietnam.mediacdn.vn/media/news/8d725eb1826fee2e7d5f852a1d63d14f/b15.jpg",
            link: "https://sallysbakingaddiction.com/best-gingerbread-cookies/"
        }
    ],

    tiramisu: [
        {
            name: "Bánh Charlotte",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZQdhq2f0oyvzWmzE7D3qxqJhKxiN4RQlyQ&s",
            link: "https://natashaskitchen.com/charlotte-cake-recipe/"
        },
        {
            name: "Bánh Mousse Socola",
            img: "https://sugarandsparrow.s3.us-west-2.amazonaws.com/flour/wp-content/uploads/2025/01/14203529/Easy-Chocolate-Mousse-Cake-Recipe-header.jpeg",
            link: "https://sallysbakingaddiction.com/dark-chocolate-mousse-cake/"
        },
        {
            name: "Bánh Opera Pháp",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFY0zsY5VmNdYnqvVx2l7iPpSXEXC1HHYkA&s",
            link: "https://preppykitchen.com/opera-cake//"
        },
        {
            name: "Bánh Panna Cotta Ý",
            img: "https://cakesbymk.com/wp-content/uploads/2025/02/Template-Size-for-Blog-22.jpg",
            link: "https://preppykitchen.com/panna-cotta/"
        }
    ],

    redvelvet: [
        {
            name: "Cheesecake brownies",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2nd4XSxYLxeBeQ_y-n5AYo82AwiNU_3X5w&s",
            link: "https://preppykitchen.com/chocolate-cheesecake-brownies/"
        },
        {
            name: "Bánh nướng nhỏ Red Velvet",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-cngWbeTwTdx5jCNAbDfk53X3dmke_YWrw&s",
            link: "https://sallysbakingaddiction.com/red-velvet-cupcakes/"
        },
        {
            name: "Bánh Carrot (với Cream Cheese Frosting)",
            img: "https://scientificallysweet.com/wp-content/uploads/2024/02/IMG_7697-feature2.jpg",
            link: "https://scientificallysweet.com/ultimate-moist-carrot-cake-with-cream-cheese-frosting/"
        }
    ]
};


// HÀM RENDER MÓN LIÊN QUAN
function renderRelated(target) {
    let list = relatedData[target];
    let container = $(".related-list");

    container.html(""); // Xóa cũ

    list.forEach(item => {
        container.append(`
            <div class="related-item">
                <img src="${item.img}">
                <div class="related-info">
                    <a href="${item.link}" target="_blank">${item.name}</a>
                </div>
            </div>
        `);
    });
}

// Khi click menu món → đổi phần liên quan
$(".recipe-menu-item").click(function () {
    $(".recipe-menu-item").removeClass("active");
    $(this).addClass("active");

    $(".recipe-box").addClass("hidden");

    let target = $(this).data("target");
    $("#" + target).removeClass("hidden");

    renderRelated(target); // 🔥 auto đổi liên quan
});


// Khi load trang → render mặc định cho món đầu tiên
$(document).ready(function () {
    renderRelated("macaron");
});

// 5. CHAT POPUP
// MỞ POPUP
$("#chat-bubble").click(function () {
    $("#chat-popup").removeClass("hidden");
});

// ĐÓNG POPUP
$(".close-chat").click(function () {
    $("#chat-popup").addClass("hidden");
});
// ====== CHAT AUTO REPLY ======
function botReply(message) {
    let msg = message.toLowerCase();
    let reply = "";

    if (msg.includes("hello") || msg.includes("hi") || msg.includes("xin chào")) {
        reply = "Halo nè 👋 Bạn muốn hỏi công thức bánh nào không?";
    }
    else if (msg.includes("macaron")) {
        reply = "Để làm macaron chuẩn Pháp, bạn cần: bột hạnh nhân, đường bột, lòng trắng trứng... Nếu bạn muốn mình gửi full công thức thì nói mình biết nha 💗";
    }
    else if (msg.includes("cookies")) {
        reply = "Cookies chocolate chip thì chỉ cần: bơ, đường nâu, bột mì, chocolate chips. Bạn muốn xem từng bước không nè? 🍪";
    }
    else if (msg.includes("red velvet")) {
        reply = "Red Velvet thì cần bột mì, bơ, đường, bột cacao và đặc biệt là màu đỏ nha! Bạn muốn mình gửi công thức chi tiết không? ❤️";
    }
    else if (msg.includes("tiramisu")) {
        reply = "Tiramisu cần có: phô mai mascarpone, cà phê espresso, bánh ladyfinger và bột cacao. Bạn muốn xem công thức không nè? ☕";
    }
    else if (msg.includes("donut")) {
        reply = "Donut thì cần bột mì, men nở, đường và dầu để chiên. Bạn muốn mình gửi công thức chi tiết không? 🍩";
    }
    else if (msg.includes("help") || msg.includes("giúp")) {
        reply = "Mình có thể giúp bạn với các công thức bánh ngọt như macaron, cookies, red velvet, tiramisu, donut. Bạn muốn hỏi về loại bánh nào?";
    }
    else if (msg.includes("thank you") || msg.includes("cảm ơn")) {
        reply = "Không có gì đâu! Mình luôn sẵn sàng giúp bạn với các công thức bánh ngọt 🍰";
    }
    else {
        reply = "Tui hong hiểu câu này lắm 😭 bạn hỏi tên loại bánh thử xem nha!";
    }

    $(".chat-body").append(`<div class="chat-msg bot">${reply}</div>`);
    $(".chat-body").scrollTop($(".chat-body")[0].scrollHeight);
}

// ====== SEND MESSAGE ======
$(".chat-input button").click(function () {
    let text = $(".chat-input input").val().trim();
    if (text === "") return;

    // User message
    $(".chat-body").append(`<div class="chat-msg">${text}</div>`);
    $(".chat-input input").val("");

    // Scroll
    $(".chat-body").scrollTop($(".chat-body")[0].scrollHeight);

    // Bot reply (delay cho cute)
    setTimeout(() => botReply(text), 500);
});

// Enter key
$(".chat-input input").keypress(function (e) {
    if (e.which === 13) {
        $(".chat-input button").click();
    }
});

// ===== NÚT LÊN ĐẦU TRANG =====

// Hiện nút khi cuộn xuống 300px
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $("#back-to-top").addClass("show");
    } else {
        $("#back-to-top").removeClass("show");
    }
});

// Khi click → cuộn lên đầu mượt
$("#back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
});




