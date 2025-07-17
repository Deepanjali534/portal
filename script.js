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

  }
  else if (currentPage.includes("testimonial.html")) {
    const testimonial = document.getElementById("testimonialInput").value.trim();
    if (testimonial === "") {
      alert("Please write your testimonial");
      return;
    }
    localStorage.setItem("testimonial", testimonial);
    window.location.href = "thankyou.html";
  }


function searchProfile() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();

  if (input === "") {
    alert("Please enter a profile name.");
    return;
  }

  const validProfiles = ["prof 1", "prof 2", "prof 3", "prof 4"];
  if (!validProfiles.includes(input)) {
    alert("No match found.");
    return;
  }

  localStorage.setItem("profile", input);
  window.location.href = "testimonial.html";
}

function profCardNext(profileName) {
  localStorage.setItem("profile", profileName);
  window.location.href = "testimonial.html";
}

function restart() {
  localStorage.clear();
  window.location.href = "index.html";
}

