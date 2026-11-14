
// Reveal website sections while scrolling
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
});

// Update footer year automatically
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} My Portfolio | Designed with passion`;
}
const successMessage = document.getElementById("successMessage");

if (successMessage) {
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 4000);
}