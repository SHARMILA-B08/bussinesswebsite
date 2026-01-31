// Scroll animation
const cards = document.querySelectorAll(
  '.feature-card, .service-card, .stat-card'
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s ease";
  observer.observe(card);
});

// Contact form validation
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const status = document.getElementById("formStatus");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
      status.style.color = "red";
      status.textContent = "Please fill all fields.";
      return;
    }

    status.style.color = "green";
    status.textContent = "Message sent successfully!";
    form.reset();
  });
}
