const productsDatabase = {
    '01': {
        name: 'Bánh sinh nhật theo yêu cầu',
        price: 299000,
        originalPrice: 350000,
        discount: 15,
        img: 'cake-pic/banhsinhnhat299.jpg',
        images: [
            'cake-pic/banhsinhnhat299.jpg',
            'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800',
            'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800',
            'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800'
        ],
        type: 'cake',
        rating: 4.8,
        reviews: 221,
        sold: 221,
        description: 'Bánh sinh nhật được tùy chỉnh hoàn toàn theo sở thích của bạn. Từ hương vị, màu sắc đến thiết kế, chúng tôi cam kết mang đến một chiếc bánh độc đáo và ý nghĩa cho ngày đặc biệt của bạn.',
        features: [
            'Tùy chỉnh 100% theo yêu cầu',
            'Sử dụng nguyên liệu cao cấp nhập khẩu',
            'Thiết kế độc đáo, sáng tạo',
            'Giao hàng tận nơi trong 2 giờ',
            'Bảo quản 3 ngày trong tủ lạnh'
        ],
        ingredients: [
            'Bột mì cao cấp',
            'Bơ Pháp',
            'Trứng gà tươi',
            'Kem tươi Anchor',
            'Đường và các phụ gia tự nhiên'
        ],
        stock: 'Còn hàng'
    },
    '02': {
        name: 'Bánh theo yêu cầu',
        price: 249000,
        originalPrice: 299000,
        discount: 17,
        img: 'cake-pic/banhtheoyeucau249.jpg',
        images: [
            'cake-pic/banhtheoyeucau249.jpg',
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800',
            'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800'
        ],
        type: 'cake',
        rating: 4.9,
        reviews: 530,
        sold: 530,
        description: 'Vị ngọt theo cách của bạn. Hãy để chúng tôi biết sở thích và chúng tôi sẽ tạo ra một chiếc bánh hoàn hảo dành riêng cho bạn.',
        features: [
            'Linh hoạt về hương vị',
            'Thiết kế theo yêu cầu',
            'Nguyên liệu tươi mỗi ngày',
            'Phù hợp mọi dịp đặc biệt'
        ],
        ingredients: [
            'Bột mì',
            'Bơ',
            'Trứng',
            'Kem tươi',
            'Phụ gia tùy chọn'
        ],
        stock: 'Còn hàng'
    },
    '03': {
        name: 'Cupcake Caramel',
        price: 25000,
        originalPrice: 30000,
        discount: 17,
        img: 'cake-pic/cupcakecaramel25.jpg',
        images: [
            'cake-pic/cupcakecaramel25.jpg',
            'https://i.pinimg.com/1200x/d2/34/9d/d2349dc47c2462d32b865273b33bb089.jpg'
        ],
        type: 'cupcake',
        rating: 4.8,
        reviews: 357,
        sold: 357,
        description: 'Hương Caramel hòa quyện trong Cupcake mịn. Lớp kem caramel béo ngậy trên nền bánh xốp mềm, tạo nên sự kết hợp hoàn hảo.',
        features: [
            'Caramel tự làm thủ công',
            'Bánh xốp mềm',
            'Size vừa ăn',
            'Thơm béo đặc trưng'
        ],
        ingredients: [
            'Bột mì',
            'Đường caramel',
            'Bơ',
            'Trứng',
            'Kem tươi'
        ],
        stock: 'Còn hàng'
    },
    '06': {
        name: 'Tiramisu Truyền Thống',
        price: 250000,
        originalPrice: 280000,
        discount: 11,
        img: 'cake-pic/tiramisu250.jpg',
        images: [
            'cake-pic/tiramisu250.jpg',
            'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800',
            'https://i.pinimg.com/1200x/97/5b/82/975b828369c16f30ffce388057f8bdbb.jpg'
        ],
        type: 'tiramisu',
        rating: 4.7,
        reviews: 264,
        sold: 264,
        description: 'Tiramisu Ý truyền thống với lớp phô mai mascarpone mịn màng, bánh ladyfinger thấm cà phê espresso đậm đà và lớp bột cacao nguyên chất. Ngọt ngào và mịn màn.',
        features: [
            'Phô mai mascarpone Ý nhập khẩu',
            'Cà phê espresso đậm đà',
            'Bột cacao nguyên chất',
            'Công thức truyền thống Ý',
            'Vị ngọt cân bằng hoàn hảo'
        ],
        ingredients: [
            'Phô mai mascarpone',
            'Cà phê espresso',
            'Bánh ladyfinger',
            'Bột cacao',
            'Rượu Marsala'
        ],
        stock: 'Còn hàng'
    },
    '07': {
        name: 'Tiramisu Dâu Tây',
        price: 320000,
        originalPrice: 370000,
        discount: 14,
        img: 'cake-pic/tiramisudautay320.jpg',
        images: [
            'cake-pic/tiramisudautay320.jpg',
            'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800'
        ],
        type: 'tiramisu',
        rating: 4.9,
        reviews: 310,
        sold: 310,
        description: 'Dâu tây tươi hòa quyện với lớp bánh mềm tan. Phiên bản sáng tạo của tiramisu với hương vị trái cây tươi mát.',
        features: [
            'Dâu tây Đà Lạt tươi',
            'Kết hợp độc đáo',
            'Hương vị tươi mát',
            'Phô mai mascarpone cao cấp'
        ],
        ingredients: [
            'Dâu tây tươi',
            'Phô mai mascarpone',
            'Bánh ladyfinger',
            'Kem tươi',
            'Đường'
        ],
        stock: 'Còn hàng'
    },
    '08': {
        name: 'Tiramisu mini Matcha',
        price: 22000,
        originalPrice: 27000,
        discount: 19,
        img: 'cake-pic/tiramisumatcha22.jpg',
        images: [
            'cake-pic/tiramisumatcha22.jpg'
        ],
        type: 'tiramisu',
        rating: 4.6,
        reviews: 198,
        sold: 198,
        description: 'Tiramisu kết hợp cùng Matcha đậm vị. Hương trà xanh Nhật Bản hòa quyện với vị béo của phô mai.',
        features: [
            'Matcha Nhật Bản',
            'Size mini tiện lợi',
            'Đắng ngọt hài hòa',
            'Giàu chất chống oxy hóa'
        ],
        ingredients: [
            'Bột matcha Nhật',
            'Phô mai mascarpone',
            'Bánh ladyfinger',
            'Kem tươi'
        ],
        stock: 'Còn hàng'
    },
    '09': { name: 'Tiramisu mini', price: 17000, originalPrice: 20000, discount: 15, img: 'cake-pic/tiramisumini17.jpg', images: ['cake-pic/tiramisumini17.jpg'], type: 'tiramisu', rating: 4.7, reviews: 275, sold: 275, description: 'Tiramisu mini tan ngay trong miệng', features: ['Size mini', 'Tan nhanh', 'Vị ngọt nhẹ'], ingredients: ['Phô mai', 'Cà phê', 'Bánh'], stock: 'Còn hàng' },
    '10': { name: 'Cupcake RedVelvet', price: 27000, originalPrice: 32000, discount: 16, img: 'cake-pic/cupcakeredvelvet27.jpg', images: ['cake-pic/cupcakeredvelvet27.jpg'], type: 'cupcake', rating: 4.7, reviews: 298, sold: 298, description: 'Cupcake + RedVelvet = bùng nổ!', features: ['Màu đỏ tự nhiên', 'Kem cheese'], ingredients: ['Bột mì', 'Bột cacao', 'Cream cheese'], stock: 'Còn hàng' },
    '11': { name: 'Macaron Truyền Thống', price: 14000, originalPrice: 17000, discount: 18, img: 'cake-pic/macaron14.jpg', images: ['cake-pic/macaron14.jpg'], type: 'cookie', rating: 4.9, reviews: 384, sold: 384, description: 'Xốp mềm, vui miệng', features: ['Nhiều màu sắc', 'Vị ngọt nhẹ'], ingredients: ['Bột hạnh nhân', 'Đường', 'Lòng trắng trứng'], stock: 'Còn hàng' },
    '12': { name: 'Donut', price: 27000, originalPrice: 32000, discount: 14, img: 'cake-pic/donut27.jpg', images: ['cake-pic/donut27.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Ngọt, xốp và giòn tan', features: ['Chiên giòn', 'Phủ đường'], ingredients: ['Bột mì', 'Men', 'Đường'], stock: 'Còn hàng' },
    '04': { name: 'Cupcake Matcha', price: 17000, originalPrice: 22000, discount: 13, img: 'cake-pic/cupcakematchachip27.jpg', images: ['cake-pic/cupcakematchachip27.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Christmas trong Macaron của bạn?', features: ['Chiên giòn', 'Phủ đường'], ingredients: ['Bột mì', 'Men', 'Đường'], stock: 'Còn hàng' },
    '05': { name: 'Cupcake Vani', price: 27000, originalPrice: 32000, discount: 12, img: 'cake-pic/cupcakevani25.jpg', images: ['cake-pic/cupcakevani25.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Xốp mềm, vui miệng', features: ['Chiên giòn', 'Phủ đường'], ingredients: ['Bột mì', 'Men', 'Đường'], stock: 'Còn hàng' },
    '13': { name: 'Bánh quy', price: 27000, originalPrice: 32000, discount: 15, img: 'cake-pic/cookieschip17.jpg', images: ['cake-pic/cookieschip17.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Nhiều vị, nhiều trải nghiệm!', features: ['Viền giòn', 'Giữa mềm', 'Nhiều chip socola'], ingredients: ['Bơ', 'Đường nâu', 'Bột mì'], stock: 'Còn hàng' },
    '14': { name: 'Set Donut Socola', price: 155000, originalPrice: 220000, discount: 13, img: 'cake-pic/setdonutsocola155.jpg', images: ['cake-pic/setdonutsocola155.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Socola đậm vị trong từng Donut', features: ['Chiên giòn', 'Phủ đường'], ingredients: ['Bột mì', 'Men', 'Đường'], stock: 'Còn hàng' },
    '15': { name: 'Set Macaron', price: 135000, originalPrice: 230000, discount: 14, img: 'cake-pic/setmacaron135.jpg', images: ['cake-pic/setmacaron135.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Giòn vui, ngọt nhẹ', features: ['Chiên giòn', 'Phủ đường'], ingredients: ['Bột mì', 'Men', 'Đường'], stock: 'Còn hàng' },
    '16': { name: 'Bánh Sukem Socola', price: 25000, originalPrice: 32000, discount: 14, img: 'cake-pic/sukemsocola25.jpg', images: ['cake-pic/sukemsocola25.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Thêm nhiều vị hơn cho Christmas!', features: ['Chiên giòn', 'Phủ đường'], ingredients: ['Bột mì', 'Men', 'Đường'], stock: 'Còn hàng' },
    '17': { name: 'Sukem Socola Mini', price: 21000, originalPrice: 30000, discount: 15, img: 'cake-pic/sukemsocolamini22.jpg', images: ['cake-pic/sukemsocolamini22.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Sukem mềm cùng Socola ngọt lịm', features: ['Cốt ẩm', 'Đậm cacao', 'Mặt giòn nhẹ'], ingredients: ['Socola', 'Trứng', 'Bơ'], stock: 'Còn hàng' },
    '18': { name: 'Bánh RedVelvet', price: 299000, originalPrice: 322000, discount: 16, img: 'cake-pic/redvelvetcake299.jpg', images: ['cake-pic/redvelvetcake299.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Mini tan nhanh hơn trong miệng', features: ['Màu đỏ sang', 'Kem phô mai', 'Cốt mềm ẩm'], ingredients: ['Cream cheese', 'Bột cacao', 'Trứng'], stock: 'Còn hàng' },
    '19': { name: 'Set Cookies Christmas', price: 249000, originalPrice: 310000, discount: 17, img: 'cake-pic/setcookies249.jpg', images: ['cake-pic/setcookies249.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Đậm vị, ngọt và tươi mới', features: ['Không cần nướng', 'Cốt mềm', 'Ăn lạnh ngon'], ingredients: ['Cream cheese', 'Gelatin', 'Kem tươi'], stock: 'Còn hàng' },
    '20': { name: 'Macaron Christmas', price: 22000, originalPrice: 32000, discount: 18, img: 'cake-pic/macaronchristmas22.jpg', images: ['cake-pic/macaronchristmas22.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Ngọt, xốp và giòn tan', features: ['Chiên giòn', 'Phủ đường'], ingredients: ['Bột mì', 'Men', 'Đường'], stock: 'Còn hàng' },
    '21': { name: 'Bánh Churros', price: 14000, originalPrice: 22000, discount: 16, img: 'cake-pic/churros14.jpg', images: ['cake-pic/churros14.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Giòn tan, vui miệng', features: ['Chiên giòn', 'Phủ đường'], ingredients: ['Bột mì', 'Men', 'Đường'], stock: 'Còn hàng' },
    '22': { name: 'Bánh kem dâu tây', price: 27000, originalPrice: 42000, discount: 12, img: 'cake-pic/banhkemdau299.jpg', images: ['cake-pic/banhkemdau299.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Nhiều hương vị, trọn vị ngon', features: ['Mịn mượt', 'Đậm cacao', 'Ăn lạnh'], ingredients: ['Socola', 'Kem tươi', 'Gelatin'], stock: 'Còn hàng' },
    '23': { name: 'Set Tiramisu', price: 199000, originalPrice: 232000, discount: 13, img: 'cake-pic/settiramisu199.jpg', images: ['cake-pic/settiramisu199.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Hương vị Socola cùng bánh mềm tan', features: ['Vỏ giòn nhẹ', 'Nhân vanilla', 'Màu pastel'], ingredients: ['Bột hạnh nhân', 'Lòng trắng trứng', 'Đường'], stock: 'Còn hàng' },
    '24': { name: 'Bánh Phô mai cháy', price: 299000, originalPrice: 332000, discount: 15, img: 'cake-pic/basque299.jpg', images: ['cake-pic/basque299.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Hương vị mới mùa giáng sinh', features: ['Chiên giòn', 'Phủ đường'], ingredients: ['Bột mì', 'Men', 'Đường'], stock: 'Còn hàng' },
    '25': { name: 'Bánh Brownie', price: 22000, originalPrice: 32000, discount: 16, img: 'cake-pic/brownie22.jpg', images: ['cake-pic/brownie22.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Donut ngậm nhân béo ngậy', features: ['Chiên giòn', 'Phủ đường'], ingredients: ['Bột mì', 'Men', 'Đường'], stock: 'Còn hàng' },
    '26': { name: 'Bánh rán Pháp Beignet', price: 27000, originalPrice: 32000, discount: 14, img: 'cake-pic/beignet.jpg', images: ['cake-pic/beignet.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Dâu tươi cùng bánh tan mịn', features: ['Mềm xốp', 'Ngọt nhẹ', 'Phủ đường'], ingredients: ['Bột mì', 'Men', 'Đường'], stock: 'Còn hàng' },
    '27': { name: 'Cupcake Ginger', price: 27000, originalPrice: 32000, discount: 14, img: 'cake-pic/ginggercupcake27.jpg', images: ['cake-pic/ginggercupcake27.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Phô mai tan chảy đậm đà', features: ['Tan nhanh', 'Thơm bơ', 'Giòn nhẹ'], ingredients: ['Bơ', 'Đường', 'Bột mì'], stock: 'Còn hàng' },
    '28': { name: 'Bánh quy gừng', price: 27000, originalPrice: 32000, discount: 13, img: 'cake-pic/ginger.jpg', images: ['cake-pic/ginger.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Giòn tan trong lớp đường mịn', features: ['Nhân kem đầy', 'Cốt mềm', 'Mùi bơ thơm'], ingredients: ['Bột mì', 'Kem nhân', 'Đường'], stock: 'Còn hàng' },
    '29': { name: 'Bomboloni Donut', price: 27000, originalPrice: 32000, discount: 12, img: 'cake-pic/bomboloni27.jpg', images: ['cake-pic/bomboloni27.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Giáng sinh sao thiếu Ginger nhỉ?', features: ['Chiên giòn', 'Phủ đường'], ingredients: ['Bột mì', 'Men', 'Đường'], stock: 'Còn hàng' },
    '30': { name: 'Tiramisu ngàn lớp', price: 265000, originalPrice: 335000, discount: 17, img: 'cake-pic/crepe249.jpg', images: ['cake-pic/crepe249.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Tan không thể cưỡng!', features: ['Hương cà phê', 'Mascarpone béo', 'Không cần nướng'], ingredients: ['Mascarpone', 'Cafe', 'Ladyfinger'], stock: 'Còn hàng' },
    '31': { name: 'Mousse Socola', price: 159000, originalPrice: 320000, discount: 16, img: 'cake-pic/mousesocola27.jpg', images: ['cake-pic/mousesocola27.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Socola trong từng lớp bánh', features: ['Hương xoài thơm', 'Cốt mousse mềm', 'Màu vàng đẹp'], ingredients: ['Xoài', 'Kem tươi', 'Gelatin'], stock: 'Còn hàng' },
    '32': { name: 'Mousse Dâu tây', price: 159000, originalPrice: 320000, discount: 16, img: 'cake-pic/strawmousse.jpg', images: ['cake-pic/strawmousse.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Mềm mịn cùng dâu tây tươi', features: ['Vị matcha thanh', 'Mousse mượt', 'Ngọt nhẹ'], ingredients: ['Matcha', 'Mascarpone', 'Ladyfinger'], stock: 'Còn hàng' },
    '33': { name: 'Set Mousse Mini', price: 159000, originalPrice: 320000, discount: 16, img: 'https://down-vn.img.susercontent.com/file/805af3be6cbb16704202cfe910462dca.webp', images: ['https://down-vn.img.susercontent.com/file/805af3be6cbb16704202cfe910462dca.webp'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Nhiều hương vị hơn với moussemini', features: ['Hương cà phê', 'Mascarpone béo', 'Không cần nướng'], ingredients: ['Mascarpone', 'Cafe', 'Ladyfinger'], stock: 'Còn hàng' },
    '34': { name: 'Mousse Blueberry Mini', price: 22000, originalPrice: 32000, discount: 15, img: 'https://i.pinimg.com/736x/d7/42/2d/d7422db89aea54f52436503950560311.jpg', images: ['https://i.pinimg.com/736x/d7/42/2d/d7422db89aea54f52436503950560311.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Việt quất thơm ngát và ngọt ngào trong mousse', features: ['Màu đỏ sang', 'Kem phô mai', 'Cốt mềm ẩm'], ingredients: ['Cream cheese', 'Bột cacao', 'Trứng'], stock: 'Còn hàng' },
    '35': { name: 'Muffin ngũ cốc', price: 30000, originalPrice: 40000, discount: 17, img: 'https://i.pinimg.com/736x/7a/01/21/7a0121443d876c29d7bdb1c6585eb7b5.jpg', images: ['https://i.pinimg.com/736x/7a/01/21/7a0121443d876c29d7bdb1c6585eb7b5.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Hương vị bổ dưỡng cùng nhiều vị ngon', features: ['Hương xoài thơm', 'Cốt mousse mềm', 'Màu vàng đẹp'], ingredients: ['Xoài', 'Kem tươi', 'Gelatin'], stock: 'Còn hàng' },
    '36': { name: 'Mousse Mocha', price: 22000, originalPrice: 32000, discount: 15, img: 'https://i.pinimg.com/1200x/0e/b3/cd/0eb3cd869291b9188d59ed1850cdbf4f.jpg', images: ['https://i.pinimg.com/1200x/0e/b3/cd/0eb3cd869291b9188d59ed1850cdbf4f.jpg'], type: 'donut', rating: 4.5, reviews: 150, sold: 150, description: 'Thử hương vị mới của nhà Halo nhé!', features: ['Mịn mượt', 'Vị dâu nhẹ', 'Ăn lạnh ngon'], ingredients: ['Dâu tươi', 'Kem tươi', 'Gelatin'], stock: 'Còn hàng' }
};

function getProductById(id) {
    return productsDatabase[id] || null;
}

