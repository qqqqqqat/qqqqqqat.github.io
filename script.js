function toggleContent() {
    const contentSection = document.getElementById("main-content");
    const toggleButton = document.getElementById("toggle-button");

    if (contentSection.style.display === "none") {
        contentSection.style.display = "block";
        contentSection.innerHTML = "Thank you for clicking the button!";
        toggleButton.textContent = "Show Less";
    } else {
        contentSection.style.display = "none";
        toggleButton.textContent = "Show More";
    }
}
