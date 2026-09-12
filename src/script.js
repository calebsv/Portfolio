
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

window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

(function () {
    const services = [
        {
            icon: 'bi-code-slash',
            title: 'Development Front-End',
            desc: 'Building responsive and interactive web interfaces using modern front-end technologies and best practices. Using HTML, CSS, JavaScript, React and TailwindCSS.',
            items: ['Responsive web design', 'Interactive UI components', 'Cross-browser compatibility']
        },
        {
            icon: 'bi-window',
            title: 'Websites & Landing Pages',
            desc: 'Corporate websites and conversion pages designed to load quickly and convey credibility.',
            items: ['Basic technical SEO', 'Performance optimization', 'Integration with forms/CTAs']
        },
        {
            icon: 'bi-plug',
            title: 'Systems',
            desc: 'Custom systems to manage your businesss data, processes, users, and key operations.',
            items: ['Administrative', 'Management', 'Basic Control and monitoring of processes']
        },
        {
            icon: 'bi-tools',
            title: 'Maintenance & Improvements',
            desc: 'Bug fixes, refactoring and optimization of existing projects, without breaking what already works.',
            items: ['Bug fixes', 'Legacy code refactoring', 'Performance and accessibility improvements']
        },
        {
           icon: 'bi-chat-dots',
            title: 'Technical Consulting',
            desc: 'Support in choosing the stack, front-end architecture, and best practices to ensure your project gets off to the right start.',
            items: ['Technology selection', 'Architecture planning', 'Code review and best practices']
        }
    ];

    const nav = document.getElementById('servicesNav');
    const card = document.getElementById('serviceCard');
    let current = 0;

    services.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.className = 'service-num group';
        btn.setAttribute('data-index', i);
        btn.innerHTML = `<span class="service-num-label">${String(i + 1).padStart(2, '0')}</span>`;
        btn.addEventListener('click', () => {
            if (i !== current) goTo(i);
        });
        nav.appendChild(btn);
    });

    function renderCard(index) {
        const s = services[index];
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        setTimeout(() => {
            card.innerHTML = `
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-900 to-slate-900
                      flex items-center justify-center text-secondary text-2xl mb-5">
            <i class="bi ${s.icon}"></i>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">${s.title}</h3>
          <p class="text-slate-400 leading-relaxed mb-5 max-w-xl">${s.desc}</p>
          <ul class="space-y-2">
            ${s.items.map(item => `
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <i class="bi bi-check-circle-fill text-secondary"></i> ${item}
              </li>
            `).join('')}
          </ul>
        `;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200);
    }

    function updateNav(index) {
        [...nav.children].forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }

    function goTo(index) {
        current = index;
        renderCard(index);
        updateNav(index);
    }

    goTo(0);
})();