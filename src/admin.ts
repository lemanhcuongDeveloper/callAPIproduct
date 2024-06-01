document.addEventListener('DOMContentLoaded', function () {
    // Gửi yêu cầu GET để lấy dữ liệu sản phẩm
    fetch('http://localhost:3000/admin')
        .then(response => response.json())
        .then((products: any[]) => {
            // Xử lý dữ liệu nhận được từ server
            const productListDiv = document.getElementById('product-list');

            if (productListDiv) { // Kiểm tra null trước khi sử dụng
                products.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.innerHTML = `
                        <img src="${product.imageUrl}" alt="${product.name}" width="80px" height="80px">
                        <a>${product.name}</a>
                        <a>${product.price}.00đ</a>
                        <button onclick="deleteProduct('${product.id}')">Xóa</button> 
                        <button onclick="editPricePrompt('${product.id}', ${product.price})" data-id="${product.id}">Sửa </button>
                    `;
                    productListDiv.appendChild(productItem);
                });
            } else {
                console.error("Element with id 'product-list' not found.");
            }
        })
        .catch(error => console.error(error));

    // Xử lý sự kiện khi form thêm sản phẩm được gửi
    const productForm = document.getElementById('product-form');
    if (productForm) {
        productForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của form

            // Lấy dữ liệu từ form
            const nameInput = document.getElementById('name') as HTMLInputElement;
            const imageUrlInput = document.getElementById('imageUrl') as HTMLInputElement;
            const priceInput = document.getElementById('price') as HTMLInputElement;

            const name = nameInput.value;
            const imageUrl = imageUrlInput.value;
            const price = parseFloat(priceInput.value); // Chuyển giá thành số

            // Gửi yêu cầu POST để thêm sản phẩm mới
            fetch('http://localhost:3000/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    imageUrl: imageUrl,
                    price: price
                })
            })
                .then(response => {
                    // Nếu thêm sản phẩm thành công, làm mới trang để cập nhật danh sách sản phẩm
                    if (response.ok) {
                        // location.reload();
                    } else {
                        throw new Error('Failed to add product');
                    }
                })
                .catch(error => console.error(error));
        });
    } else {
        console.error("Element with id 'product-form' not found.");
    }
});
// Function to delete a product
function deleteProduct(productId: string) {
    fetch(`http://localhost:3000/admin/${productId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            // Xóa sản phẩm khỏi giao diện người dùng
            const productElement = document.getElementById(productId);
            if (productElement) {
                productElement.remove();
            }
            console.log('Product deleted successfully');
        } else {
            console.error('Failed to delete product');
        }
    })
    .catch(error => console.error('Error deleting product:', error));
}
function editPricePrompt(productId: string, currentName: string, currentPrice: number) {
    const newName = prompt(`Enter new name for product (current name: ${currentName}):`);
    if (newName !== null) {
        const newPriceString = prompt(`Enter new price for product (current price: ${currentPrice}):`);
        if (newPriceString !== null) {
            const newPrice = parseFloat(newPriceString);
            if (!isNaN(newPrice)) {
                const newImageUrl = prompt(`Enter new image URL for product:`);
                if (newImageUrl !== null) {
                    editProduct(productId, newName, newPrice, newImageUrl);
                }
            } else {
                alert('Invalid price. Please enter a valid number.');
            }
        }
    }
}

function editProduct(productId: string, newName: string, newPrice: number, newImageUrl: string) {
    fetch(`http://localhost:3000/admin/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newName,
            price: newPrice,
            imageUrl: newImageUrl
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('Product information updated successfully');
            // Cập nhật giá trị của phần tử sản phẩm tương ứng
            const productElement = document.querySelector(`[data-id="${productId}"]`);
            if (productElement) {
                const nameElement = productElement.querySelector('a:first-child');
                const priceElement = productElement.querySelector('a:nth-child(2)');
                const imgElement = productElement.querySelector('img');
                if (nameElement && priceElement && imgElement) {
                    nameElement.textContent = newName;
                    priceElement.textContent = `${newPrice}.00đ`;
                    imgElement.src = newImageUrl;
                    imgElement.alt = newName;
                }
            }
        } else {
            console.error('Failed to update product information');
        }
    })
    .catch(error => console.error('Error updating product information:', error));
}



//show quản lý DM
document.addEventListener('DOMContentLoaded', function () {
    // Gửi yêu cầu GET để lấy dữ liệu sản phẩm
    fetch('http://localhost:3000/dm')
        .then(response => response.json())
        .then((products: any[]) => {
            // Xử lý dữ liệu nhận được từ server
            const productListDiv = document.getElementById('categorY');

            if (productListDiv) { // Kiểm tra null trước khi sử dụng
                products.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.innerHTML = `
                        <img src="${product.img}" alt="${product.name}" width="80px" height="80px">
                        <a>${product.name}</a>
                        <button onclick="deleteCategory('${product.id}')">Xóa</button>
                    `;
                    productListDiv.appendChild(productItem);
                });
            } else {
                console.error("Element with id 'categorY' not found.");
            }
        })
        .catch(error => console.error(error));
    });

    function deleteCategory(categoryId: string) {
        fetch(`http://localhost:3000/dm/${categoryId}`, {
            method: 'DELETE'
        })
        .then((response: Response) => {
            if (response.ok) {
                // Remove the category from the UI
                const categoryElement = document.getElementById(categoryId);
                if (categoryElement) {
                    categoryElement.remove();
                }
                console.log('Category deleted successfully');
            } else {
                console.error('Failed to delete category');
            }
        })
        .catch((error: Error) => console.error('Error deleting category:', error));
    }

    
    