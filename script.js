function showFact() {
    document.getElementById("fact").textContent =
        "I love dekins bald head!";
}

function changeColour() {
    const colours = ["lightblue", "lightgreen", "pink", "yellow", "purple", "orange"];
    
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
    
    document.body.style.backgroundColor = randomColour;
}

function greet() {
    let name = document.getElementById("name").value;

    if (name.trim() === "") {
        document.getElementById("hello").textContent =
            "Please enter your name!";
    } else {
        document.getElementById("hello").textContent =
            "Hello, " + name + "! Welcome to my website!";
    }
}

let number = 0;

function count() {
    number++;
    document.getElementById("number").textContent = number;
}
