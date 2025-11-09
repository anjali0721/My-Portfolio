// Typing effect
// Typing effect
const nameText = "Anjali Verma";
const taglineText = "Frontend Developer | Software Developer | Graphic Designer";
const nameEl = document.getElementById("typed-name");
const tagEl = document.getElementById("typed-tagline");

let nameIndex = 0;
let tagIndex = 0;

function typeName() {
  if (nameIndex < nameText.length) {
    nameEl.textContent += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeName, 100);
  } else {
    setTimeout(typeTagline, 500);
  }
}
function typeTagline() {
  if (tagIndex < taglineText.length) {
    tagEl.textContent += taglineText.charAt(tagIndex);
    tagIndex++;
    setTimeout(typeTagline, 50);
  }
}
window.addEventListener("load", typeName);

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      reveals[i].classList.add("show");
    }
  }
});

// Hollow Circle Skill Animation
// Circular skill animation on scroll
const circulars = document.querySelectorAll(".circular");
let skillsAnimated = false;

function animateCircular(circle, delay = 0) {
  setTimeout(() => {
    circle.classList.add("show"); // Fade-in effect

    const percent = circle.getAttribute("data-percent");
    const numb = circle.querySelector(".numb");
    const outer = circle.querySelector(".outer");
    let progress = 0;

    const interval = setInterval(() => {
      if (progress >= percent) {
        clearInterval(interval);
      } else {
        progress++;
        numb.textContent = progress + "%";
        outer.style.background = `conic-gradient(#00b4d8 ${progress * 3.6}deg, rgba(255,255,255,0.1) 0deg)`;
      }
    }, 15);
  }, delay);
}

function checkSkillsAnimation() {
  const skillsSection = document.getElementById("skills");
  const rect = skillsSection.getBoundingClientRect();
  if (!skillsAnimated && rect.top < window.innerHeight - 100) {
    circulars.forEach((circle, index) => {
      animateCircular(circle, index * 500); // Animate one by one
    });
    skillsAnimated = true;
  }
}

window.addEventListener("scroll", checkSkillsAnimation);
window.addEventListener("load", checkSkillsAnimation);


// Contact form alert
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
});
// About text animation on scroll
const aboutText = document.querySelectorAll(".about-anim");

window.addEventListener("scroll", () => {
  const section = document.querySelector("#about");
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 150) {
    aboutText.forEach(p => p.classList.add("show"));
  }
});
