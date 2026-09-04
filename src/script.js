
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


      // ---------- Hero: floating particles for the futuristic background ----------
      (function () {
        const container = document.getElementById('particles');
        if (!container) return;
        const count = 34;
        for (let i = 0; i < count; i++) {
          const dot = document.createElement('span');
          dot.className = 'particle';
          dot.style.left = Math.random() * 100 + '%';
          dot.style.top = Math.random() * 100 + '%';
          const size = 1 + Math.random() * 2;
          dot.style.width = size + 'px';
          dot.style.height = size + 'px';
          dot.style.animationDelay = (Math.random() * 6) + 's';
          dot.style.animationDuration = (4 + Math.random() * 4) + 's';
          container.appendChild(dot);
        }
      })();

    (function () {
      const el = document.getElementById('terminal-body');
      if (!el) return;

      const seq = [
        { type: 'cmd', text: 'Hi' },
        { type: 'out', text: 'caleb-lira · front-end developer', cls: 'text-slate-300' },
        { type: 'gap' },
        { type: 'cmd', text: 'mission.txt' },
        { type: 'out', text: 'Developing interfaces', cls: 'text-white font-semibold' },
        { type: 'out', text: 'that shape perspectives.', cls: 'text-secondary font-semibold' },
        { type: 'gap' },
        { type: 'cmd', text: 'status --check' },
        { type: 'out', text: '[ok] building modern, high-performance apps', cls: 'text-sky-400' },
        { type: 'out', text: '[ok] focused on user experience', cls: 'text-yellow-400' },
      ];

      let i = 0;

      function finish() {
        const cur = document.createElement('span');
        cur.className = 'terminal-cursor';
        el.appendChild(cur);
      }

      function next() {
        if (i >= seq.length) {
          finish();
          return;
        }
        const item = seq[i++];

        if (item.type === 'gap') {
          const gap = document.createElement('div');
          gap.className = 'h-3';
          el.appendChild(gap);
          next();
          return;
        }

        const line = document.createElement('div');
        line.className = 'flex gap-2';

        if (item.type === 'cmd') {
          const prompt = document.createElement('span');
          prompt.className = 'text-secondary shrink-0';
          prompt.textContent = '$';
          line.appendChild(prompt);
        }

        const span = document.createElement('span');
        span.className = item.cls || 'text-slate-200';
        line.appendChild(span);
        el.appendChild(line);

        let c = 0;
        const speed = item.type === 'cmd' ? 55 : 18;
        const timer = setInterval(() => {
          span.textContent += item.text[c];
          c++;
          if (c >= item.text.length) {
            clearInterval(timer);
            setTimeout(next, item.type === 'cmd' ? 250 : 350);
          }
        }, speed);
      }

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            next();
            io.disconnect();
          }
        });
      });
      io.observe(el);
    })();
