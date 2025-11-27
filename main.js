
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

        });