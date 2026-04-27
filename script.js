const yearEl = document.getElementById("year");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const bookingForm = document.getElementById("bookingForm");
const bookingService = document.getElementById("bookingService");
const bookingDate = document.getElementById("bookingDate");
const bookingTime = document.getElementById("bookingTime");
const bookingMessage = document.getElementById("bookingMessage");
const timeSlots = document.getElementById("timeSlots");
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");
const serviceCards = document.querySelectorAll(".selectable-service");

const availableTimes = ["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "03:30 PM", "05:00 PM"];

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("open");
  });
}

if (bookingDate) {
  const today = new Date().toISOString().split("T")[0];
  bookingDate.setAttribute("min", today);
}

function renderTimeSlots() {
  if (!timeSlots) {
    return;
  }
  timeSlots.innerHTML = "";
  availableTimes.forEach((time) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "time-slot";
    button.textContent = time;
    button.addEventListener("click", () => {
      document.querySelectorAll(".time-slot").forEach((slot) => slot.classList.remove("active"));
      button.classList.add("active");
      if (bookingTime) {
        bookingTime.value = time;
      }
    });
    timeSlots.appendChild(button);
  });
}

serviceCards.forEach((card) => {
  const selectService = () => {
    serviceCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
    if (bookingService) {
      bookingService.value = card.dataset.service || "";
    }
    window.location.hash = "booking";
  };

  card.addEventListener("click", selectService);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectService();
    }
  });
});

if (bookingForm && bookingMessage) {
  renderTimeSlots();
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const service = bookingService ? bookingService.value.trim() : "";
    const date = bookingDate ? bookingDate.value : "";
    const time = bookingTime ? bookingTime.value.trim() : "";

    if (!service || !date || !time) {
      bookingMessage.textContent = "Please select a service, date, and available time.";
      return;
    }

    bookingMessage.textContent = `Booking confirmed for ${service} on ${date} at ${time}. Our team will contact you by email.`;
    bookingForm.reset();
    if (bookingTime) {
      bookingTime.value = "";
    }
    document.querySelectorAll(".time-slot").forEach((slot) => slot.classList.remove("active"));
    serviceCards.forEach((item) => item.classList.remove("active"));
  });
}

if (contactForm && contactMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactMessage.textContent = "Thanks for reaching out. We will reply via email shortly.";
    contactForm.reset();
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
