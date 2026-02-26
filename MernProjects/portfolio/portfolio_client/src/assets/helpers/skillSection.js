document.addEventListener("DOMContentLoaded", () => {
    const skillCircles = document.querySelectorAll(".skill-circle");

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function animateSkills() {
        skillCircles.forEach(circle => {
            if (!circle.classList.contains("animated") && isInViewport(circle)) {
                let skill = circle.getAttribute("data-skill");
                let angle = 0;
                const interval = setInterval(() => {
                    angle += 3.6; // each % = 3.6deg
                    if (angle / 3.6 >= skill) {
                        angle = skill * 3.6;
                        clearInterval(interval);
                    }
                    circle.style.background = `conic-gradient(#007bff ${angle}deg, #e9ecef ${angle}deg)`;
                }, 15);
                circle.classList.add("animated");
            }
        });
    }

    window.addEventListener("scroll", animateSkills);
    animateSkills();
});