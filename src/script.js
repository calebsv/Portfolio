
function createRipple(event) {
    const button = event.currentTarget
    const circle = document.createElement("span")
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`
    circle.classList.add(
        "absolute",
        "rounded-full",
        "bg-white/30",
        "animate-ripple"
    )

    const ripple = button.getElementsByClassName("ripple")[0]
    if (ripple) ripple.remove()

    circle.classList.add("ripple")
    button.appendChild(circle)
}


const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(el => obs.observe(el));


const glow = document.getElementById("glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX - 80 + "px";
    glow.style.top = e.clientY - 80 + "px";
});

const slider = document.getElementById("frontSlider");
const prevBtn = document.getElementById("prevFront");
const nextBtn = document.getElementById("nextFront");

function updateButtons() {
    if (slider.scrollLeft <= 0) {
        prevBtn.classList.add("opacity-0", "pointer-events-none");
    } else {
        prevBtn.classList.remove("opacity-0", "pointer-events-none");
    }

    if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 5
    ) {
        nextBtn.classList.add("opacity-0", "pointer-events-none");
    } else {
        nextBtn.classList.remove("opacity-0", "pointer-events-none");
    }
}
nextBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: 220,
        behavior: "smooth",
    });
});
prevBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: -220,
        behavior: "smooth",
    });
});
slider.addEventListener("scroll", updateButtons);
updateButtons();


const sliderr = document.getElementById("develoupSlider");
const previBtn = document.getElementById("previousFront");
const nextiBtn = document.getElementById("nextiousFront");


function updateeButtons() {
    if (sliderr.scrollLeft <= 0) {
        previBtn.classList.add("opacity-0", "pointer-events-none");
    } else {
        previBtn.classList.remove("opacity-0", "pointer-events-none");
    }

    if (
        sliderr.scrollLeft + sliderr.clientWidth >=
        sliderr.scrollWidth - 5
    ) {
        nextiBtn.classList.add("opacity-0", "pointer-events-none");
    } else {
        nextiBtn.classList.remove("opacity-0", "pointer-events-none");
    }
}
nextiBtn.addEventListener("click", () => {
    sliderr.scrollBy({
        left: 220,
        behavior: "smooth",
    });
});
previBtn.addEventListener("click", () => {
    sliderr.scrollBy({
        left: -220,
        behavior: "smooth",
    });
});
sliderr.addEventListener("scroll", updateeButtons);
updateeButtons();

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");
const mobileLinks = document.querySelectorAll(".mobile-link");

function toggleMenu() {
    menuBtn.classList.toggle("open");
    mobileMenu.classList.toggle("open");
    menuOverlay.classList.toggle("open");
    document.body.classList.toggle("overflow-hidden");
}

menuBtn.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (mobileMenu.classList.contains("open")) toggleMenu();
    });
});

const footerYear = document.getElementById("footer-year");

footerYear.textContent = new Date().getFullYear();