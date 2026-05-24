
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


function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-inn');
  
  elements.forEach(element => {
    const position = element.getBoundingClientRect();
    
    if (position.top < window.innerHeight - 50) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);



const glow = document.getElementById("glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX - 80 + "px";
  glow.style.top = e.clientY - 80 + "px";
});

const groupButtons = document.querySelectorAll("[data-tab]");
const grid = document.getElementById("skills-grid");

function criarCard(titulo,logo){
  const card = document.createElement("div");

  card.classList.add(
    "p-6",
    "min-h-[100px]",
    "rounded-lg",
    "bg-gradient-to-br",
    "from-slate-900",
    "to-slate-800",
    "border",
    "border-slate-700/30",
    "transition-all",
    "hover:-translate-y-2",
    "hover:scale-[1.03]",
    "duration-300",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "text-center",
    "hover:border-secondary/50",
  );

  card.innerHTML = `
  <div class="w-[70px] h-[70px] mb-5">
   <img src="${logo}" alt="${titulo} logo" class="w-full h-full object-contain">
  </div>

    <h3 class="text-xl font-bold mb-2 text-center">${titulo}</h3>
  `;

  return card;
}

function renderizar(tab){

  grid.classList.add(
    "opacity-0",
    "translate-y-2"
  );

  setTimeout(() => {

    grid.innerHTML = "";

    if(tab === "languages"){

      grid.appendChild(
        criarCard(
          "JavaScript",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        )
      );

      grid.appendChild(
        criarCard(
          "HTML",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        )
      );

      grid.appendChild(
        criarCard(
          "CSS",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        )
      );

      grid.appendChild(
        criarCard(
          "PHP",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        )
      );

    }

    else if(tab === "frameworks"){

      grid.appendChild(
        criarCard(
          "React",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        )
      );

      grid.appendChild(
        criarCard(
          "Tailwind CSS",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        )
      );

      grid.appendChild(
        criarCard(
          "Bootstrap",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        )
      );

    }

    else if(tab === "tools"){

      grid.appendChild(
        criarCard(
          "Git",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        )
      );

      grid.appendChild(
        criarCard(
          "GitHub",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        )
      );

      grid.appendChild(
        criarCard(
          "NPM",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original.svg"
        )
      );

      grid.appendChild(
        criarCard(
          "NodeJs",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        )
      );

    }

    requestAnimationFrame(() => {

      grid.classList.remove(
        "opacity-0",
        "translate-y-2"
      );

      grid.classList.add(
        "opacity-100",
        "translate-y-0"
      );

    });

  }, 250);
}