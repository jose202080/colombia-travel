// =========================
// MENU MOBILE
// =========================

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// =========================
// DESTINATIONS
// =========================

function showDestination(destination) {

    alert(
        "You selected: " +
        destination +
        "\n\nMore information about this destination will be available soon."
    );

}


// =========================
// PACKAGES
// =========================

function bookPackage(packageName) {

    alert(
        "Great choice! 🌎\n\n" +
        "You selected:\n" +
        packageName +
        "\n\n" +
        "Our travel advisor will help you complete your reservation."
    );

}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const destination =
        document.getElementById("destination").value;

    const message =
        document.getElementById("message").value;


    if (name === "" ||
        email === "" ||
        destination === "" ||
        message === "") {

        alert("Please complete all the fields.");

        return;
    }


    alert(
        "Thank you, " +
        name +
        "! 🇨🇴\n\n" +

        "We received your request to travel to " +
        destination +
        ".\n\n" +

        "We will contact you at:\n" +
        email
    );


    contactForm.reset();

});