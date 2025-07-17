document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    if (path.includes('index.html') || path.endsWith('/portal/') || path.endsWith('/portal'))
  {
        const continueBtn = document.getElementById('btun');
        const nameInput = document.getElementById('nameInput');

        if (continueBtn) {
            continueBtn.addEventListener('click', function() {
                const name = nameInput.value.trim();
                if (name === "") {
                    alert("Please write your name");
                } else {
                    window.location.href = "chosenprof.html";
                }
            });
        }
    }

    if (path.includes('chosenprof.html')) {
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');
        const profCards = document.querySelectorAll('.prof-card');

        if (searchBtn) {
            searchBtn.addEventListener('click', function() {
                const input = searchInput.value.trim().toLowerCase();
                if (input === "") {
                    alert("Please write professor name");
                } else if (["prof 1", "prof 2", "prof 3", "prof 4"].includes(input)) {
                    window.location.href = "testimonial.html";
                } else {
                    alert("No match found");
                }
            });
        }

        if (profCards.length > 0) {
            profCards.forEach(function(card) {
                card.addEventListener('click', function() {
                    window.location.href = "testimonial.html";
                });
            });
        }
    }

    if (path.includes('testimonial.html')) {
        const submitBtn = document.getElementById('bob');
        const testimonialInput = document.getElementById('testimonialInput');

        if (submitBtn) {
            submitBtn.addEventListener('click', function() {
                const testimonial = testimonialInput.value.trim();
                if (testimonial === "") {
                    alert("Please write something");
                } else {
                    window.location.href = "thankyou.html";
                }
            });
        }
    }
    if (path.includes('thankyou.html')) {
        const restartBtn = document.getElementById('bob');
        if (restartBtn) {
            restartBtn.addEventListener('click', function() {
                window.location.href = "index.html";
            });
        }
    }
});

