 let yourArray = ["hello", 42, true, null, {name: "John"}];

    // Access the array length property and display it
    let length = yourArray.length;
    console.log("Length:", length);

    // Add each element of the array to an unordered list
    let list = document.getElementById("my-list");
    yourArray.forEach(function(item) {
      let li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });