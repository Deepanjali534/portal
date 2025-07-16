function goTONext() {
    const currentPage = window.location.pathname;

    if (currentPage.includes("index.html")) {
        const nameInput = document.querySelector('input[type="text"]').value.trim();
        if (nameInput === "") {
            alert("Please enter your name before continuing!");
            return;
        }
        window.location.href = "chosenprof.html";
    }

    else if (currentPage.includes("chosenprof.html")) {
        const searchInput = document.querySelector('.search input[type="text"]').value.trim().toLowerCase();
        const validProfs = ["prof1", "prof2", "prof3", "prof4"];

        if (searchInput === "") {
            alert("Please enter a professor name.");
            return;
        }

        if (validProfs.includes(searchInput)) {
            window.location.href = "testimonial.html";
        } else {
            alert("Professor Not Found!");
        }
    }

    else if (currentPage.includes("testimonial.html")) {
        const testimonialInput = document.querySelector('#testimonial').value.trim();
        if (testimonialInput === "") {
            alert("Please write something before submitting!");
            return;
        }
        window.location.href = "thankyou.html";
    }
}

function profCardNext() {
    window.location.href = "testimonial.html";
}

function restart() {
    window.location.href = "index.html";
}
