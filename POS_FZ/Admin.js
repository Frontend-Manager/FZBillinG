document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const itemCategory = document.getElementById('itemCategory').value;
    const itemImage = document.getElementById('itemImage').files[0];

    if (!itemImage) {
        alert('Please upload an image.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const newItem = {
            name: itemName,
            price: itemPrice,
            category: itemCategory,
            image: e.target.result
        };

        // Save new item to localStorage
        const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
        menuItems.push(newItem);
        localStorage.setItem('menuItems', JSON.stringify(menuItems));

        // Add new item to the menu dynamically
        if (window.opener && window.opener.addMenuItem) {
            window.opener.addMenuItem(newItem);
        }

        alert('New item added successfully!');
        window.close(); // Close the add item form
    };

    reader.readAsDataURL(itemImage);
});
