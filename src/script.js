
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