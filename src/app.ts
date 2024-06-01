// Khai báo các biến và hàm cần thiết để điều hướng banner
let currentImageIndex = 0;
const images = ["image/0.jpg", "image/1.jpg", "image/2.jpg"]; // Danh sách các hình ảnh trong banner

// Hàm để chuyển đến hình ảnh trước đó
function previousImage() {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    updateBanner();
}

// Hàm để chuyển đến hình ảnh tiếp theo
function nextImage() {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    updateBanner();
}

// Hàm cập nhật hình ảnh trong banner
function updateBanner() {
    const bannerImage = document.getElementById("hinh") as HTMLImageElement;
    if (bannerImage) {
        bannerImage.src = images[currentImageIndex];
    }
}

// Gắn sự kiện cho nút điều hướng trước và sau
document.addEventListener('DOMContentLoaded', function() {
    const previousButton = document.querySelector(".fa-circle-left");
    if (previousButton) {
        previousButton.addEventListener("click", previousImage);
    }

    const nextButton = document.querySelector(".fa-circle-right");
    if (nextButton) {
        nextButton.addEventListener("click", nextImage);
    }

    // Tự động chuyển ảnh sau mỗi khoảng thời gian
    setInterval(nextImage, 2000); // Thay đổi mỗi 5 giây (5000 milliseconds)
});

// ẩn hiện giỏ hàng
document.addEventListener('DOMContentLoaded', function() {
    const cartUl = document.getElementById('cart-ul');
    const cartLi = document.querySelector('.hidden') as HTMLElement;

    if (cartUl && cartLi) {
        cartUl.addEventListener('click', function() {
            cartLi.classList.toggle('hidden');
        });
    }
});
// Gửi yêu cầu GET để lấy dữ liệu sản phẩm
fetch('http://localhost:5000/sanpham')
    .then(response => response.json())
    .then((products: any[]) => {
        // Xử lý dữ liệu nhận được từ server
        const productListDiv = document.getElementById('product-list');

        if (productListDiv) {
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.innerHTML = `
                    <h1 style="font-weight:bold;font-size:16px;">${product.name}</h1>
                    <img src="${product.imageUrl}" alt="${product.name}" width="200px" height="200px">
                    <div class="prod-text">
                    
                        <p><span>${product.price}</span><sup>đ</sup></p>
                    </div>
                    <button class="bu" onclick="addToCart('${product.name}', ${product.price})">MUA</button>

                `;
                productListDiv.appendChild(productItem);
            });
        } else {
            console.error("Element with id 'product-list' not found.");
        }
    })
    .catch(error => console.error('Error fetching products:', error));

// // Lấy dữ liệu từ db.json
// fetch('http://localhost:3000/dm')
//     .then(response => response.json())
//     .then((dm: any[]) => {
//         // Hiển thị sản phẩm mới nhất
//         const newdm = dm.filter(product => product.category === 'sp-moi');
//         renderdm(newdm, 'sp-moi');

//         // Hiển thị sản phẩm hot
//         const hotdm = dm.filter(product => product.category === 'sp-hot');
//         renderdm(hotdm, 'sp-hot');
//     })
//     .catch(error => console.error('Error fetching dm:', error));

// // Hàm để hiển thị sản phẩm trong một danh mục
// function renderdm(dm: any[], category: string) {
//     const productListDiv = document.getElementById('product-list') as HTMLDivElement;
//     if (productListDiv) {
//         const categoryHeader = document.createElement('h2');
//         categoryHeader.textContent = category === 'sp-moi' ? 'Sản phẩm Mới Nhất:' : 'Sản phẩm Hot:';
//         productListDiv.appendChild(categoryHeader);

//         dm.forEach(product => {
//             const productItem = document.createElement('div');
//             productItem.innerHTML = `
//                 <h1 style="font-weight:bold;font-size:16px;">${product.name}</h1>
//                 <img src="${product.img}" alt="${product.name}" width="200px" height="200px">
//                 <div class="prod-text">
                    
//                     <p><span>${product.price}</span><sup>đ</sup></p>
//                 </div>
//                 <button onclick="addToCart('${product.name}', ${product.price})">MUA</button> 
//             `;
//             productListDiv.appendChild(productItem);
//         });
//     } else {
//         console.error("Element with id 'product-list' not found.");
//     }
// }

// Mảng chứa các sản phẩm trong giỏ hàng
let cart: { name: string, price: number }[] = [];

// Hàm để thêm sản phẩm vào giỏ hàng
function addToCart(productName: string, productPrice: number) {
    const product = {
        name: productName,
        price: productPrice
    };
    cart.push(product);
    updateCartUI();
}

// // Add event listener for clicking on the cart icon
document.addEventListener('DOMContentLoaded', function() {
    const cart = document.getElementById('cart');
    if (cart) {
        cart.addEventListener('click', function() {
            updateCartUI();
        });
    } else {
        console.error("Element with id 'cart' not found.");
    }
});
// Hàm để cập nhật giao diện giỏ hàng
function updateCartUI() {
    const cartBody = document.querySelector('#cart tbody') as HTMLTableSectionElement;
    if (cartBody) {
        cartBody.innerHTML = ''; // Xóa nội dung cũ

        let totalPrice = 0;

        cart.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.price}đ</td>
                <td>1</td>
                <td><button onclick="removeFromCart('${product.name}')">Xóa</button></td>
            `;
            cartBody.appendChild(row);
            totalPrice += product.price;
        });

        // Cập nhật tổng tiền
        const totalPriceElement = document.querySelector('.price-total span') as HTMLSpanElement;
        if (totalPriceElement) {
            totalPriceElement.textContent = totalPrice.toString();
        }
    } else {
        console.error("Element with class 'cart' not found.");
    }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productName: string) {
    cart = cart.filter(product => product.name !== productName);
    updateCartUI();
}
