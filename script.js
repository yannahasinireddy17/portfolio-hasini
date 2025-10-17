console.log("Portfolio Loaded Successfully!");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed!");

  // ===== Active Navigation Highlight =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      if (scrollY >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // ===== Scroll Animations =====
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  // ===== Back to Top Button =====
  const topBtn = document.createElement("button");
  topBtn.id = "topBtn";
  topBtn.innerText = "↑";
  document.body.appendChild(topBtn);

  window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ===== Dark Mode Toggle =====
  const darkToggle = document.createElement("button");
  darkToggle.id = "darkModeToggle";
  darkToggle.innerText = "🌙";
  darkToggle.style.position = "fixed";
  darkToggle.style.top = "20px";
  darkToggle.style.right = "20px";
  darkToggle.style.padding = "10px";
  darkToggle.style.border = "none";
  darkToggle.style.borderRadius = "8px";
  darkToggle.style.cursor = "pointer";
  darkToggle.style.zIndex = "1000";
  document.body.appendChild(darkToggle);

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
