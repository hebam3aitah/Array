const fruits = [
    { name: "Apple", image: "apple.jpg" },
    { name: "Banana", image: "banana.jpg" },
    { name: "Orange", image: "orange.jpg" },
    { name: "grapes", image: "gribes.jpg" },
    { name: "strawberry", image: "images.jpg" }
];

// Select the unordered list
const ul = document.getElementById("fruit-list");

// Loop through the fruits array and create list items with images
fruits.forEach(fruit => {
    // Create a new list item
    const li = document.createElement("li");

    // Create an image element
    const img = document.createElement("img");
    img.src = fruit.image; // Set the image source
    img.alt = fruit.name;  // Set the alt text
    img.style.width = "100px"; // Optional: Set image size

    // Append the image to the list item
    li.appendChild(img);

    // Append the list item to the unordered list
    ul.appendChild(li);
});


function findIndex(arr, value) {
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element matches the value, return its index
        if (arr[i] === value) {
            return i;
        }
    }
    // If the value is not found, return not found
    return "not found";
}

// Example usage
const numbers = [10, 20, 30, 40, 50];
console.log(findIndex(numbers, 30)); // Output: 2
console.log(findIndex(numbers, 60)); // Output: -1