
document.addEventListener('DOMContentLoaded', () => {
  // For index.html
  const nameInput = document.getElementById("nameInput");
  const continueBtn = document.getElementById("btun");
  if (nameInput && continueBtn) {
    continueBtn.addEventListener("click", goToPage);
  }

  // For chosenprof.html - display professor by search
  const profCards = document.querySelectorAll('.prof-card');
  const dataList = document.getElementById('professors');
  const searchInput = document.getElementById('searchInput');
  const noMatchMessage = document.getElementById('p2');

  if (profCards.length && dataList && searchInput) {
    profCards.forEach(card => {
      const name = card.getAttribute('data-name');
      const option = document.createElement('option');
      option.value = name;
      dataList.appendChild(option);
    });

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      let visibleCount = 0;

      profCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        const match = name.includes(query);
        card.style.display = match ? 'flex' : 'none';
        if (match) visibleCount++;
      });

      if (noMatchMessage) {
        noMatchMessage.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  }

  // Department dropdown filter
  const department = document.querySelector(".form-control");
  if (department) {
    department.addEventListener("change", function () {
      const selectedValue = this.value;
      const profCards = document.querySelectorAll(".prof-card");
      let visibleCount = 0;

      profCards.forEach(card => {
        if (card.id === selectedValue) {
          card.style.display = "flex";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });

      const noMatchMessage = document.getElementById("p2");
      if (noMatchMessage) {
        noMatchMessage.style.display = visibleCount === 0 ? "block" : "none";
      }
    });
  }

  // For testimonial.html
  const submitBtn = document.getElementById("submitBtn");
  const testimonialInput = document.getElementById("testimonialInput");
  if (submitBtn && testimonialInput) {
    submitBtn.addEventListener("click", goToPage);
  }

  // For thankyou.html (optional display logic)
  if (window.location.pathname.toLowerCase().includes("thankyou.html")) {
    const displayName = document.getElementById("displayName");
    const displayProfile = document.getElementById("displayProfile");
    const displayTestimonial = document.getElementById("displayTestimonial");

    if (displayName) {
      const name = localStorage.getItem("userName") || "Guest";
      displayName.innerText = name;
    }
    if (displayProfile) {
      const profile = localStorage.getItem("profile") || "Unknown";
      displayProfile.innerText = profile;
    }
    if (displayTestimonial) {
      const testimonial = localStorage.getItem("testimonial") || "No message provided.";
      displayTestimonial.innerText = testimonial;
    }
  }
});

function goToPage() {
  const currentPage = window.location.pathname.toLowerCase();

  if (currentPage.includes("index.html")) {
    const name = document.getElementById("nameInput").value.trim();
    if (name === "") {
      alert("Please enter your name");
      return;
    }
    localStorage.setItem("userName", name);
    window.location.href = "chosenprof.html";

  } else if (currentPage.includes("testimonial.html")) {
    const testimonial = document.getElementById("testimonialInput").value.trim();
    if (testimonial === "") {
      alert("Please write your testimonial");
      return;
    }
    localStorage.setItem("testimonial", testimonial);
    window.location.href = "thankyou.html";
  }
}

function profCardNext(profileName) {
  localStorage.setItem("profile", profileName);
  window.location.href = "testimonial.html";
}

function restart() {
  localStorage.clear();
  window.location.href = "index.html";
