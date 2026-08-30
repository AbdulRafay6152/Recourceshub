document.addEventListener("DOMContentLoaded", () => {
  // 1. Scroll reveal observer
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 70, 350)}ms`;
      observer.observe(item);
    });
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  // 2. Navigation Handle and Panel Logic
  const dock = document.querySelector(".nav-dock");
  const handle = document.querySelector(".nav-handle");

  if (dock && handle) {
    // DESKTOP: Handle hover only triggers peek (when not open)
    handle.addEventListener("mouseenter", () => {
      if (window.innerWidth > 600 && !dock.classList.contains("open")) {
        dock.classList.add("peek");
      }
    });

    handle.addEventListener("mouseleave", () => {
      if (!dock.classList.contains("open")) {
        dock.classList.remove("peek");
      }
    });

    // CLICK: Toggle full open / close
    handle.addEventListener("click", () => {
      const isOpen = dock.classList.toggle("open");
      dock.classList.remove("peek");

      handle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      handle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    // KEYBOARD: Close on Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && dock.classList.contains("open")) {
        dock.classList.remove("open");
        dock.classList.remove("peek");
        handle.setAttribute("aria-expanded", "false");
        handle.setAttribute("aria-label", "Open navigation");
      }
    });

    // CLOSE ON LINK CLICK
    dock.querySelectorAll(".drawer-link").forEach((link) => {
      link.addEventListener("click", () => {
        dock.classList.remove("open");
        dock.classList.remove("peek");
        handle.setAttribute("aria-expanded", "false");
        handle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  // 3. Highlight current page in navigation
  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll(".drawer-link").forEach((link) => {
      if (link.dataset.page === currentPage) {
        link.classList.add("active");
      }
    });
  }

  // 4. Update copyright year
  document.querySelectorAll("#year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});