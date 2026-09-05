document.addEventListener("DOMContentLoaded", () => {
  // =============================================================
  // 1. Scroll reveal observer
  // =============================================================
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

  // =============================================================
  // 2. Dark Mode with Origin Wave Reveal Transition
  // =============================================================
  const themeToggle = document.getElementById("theme-toggle");

  const syncThemeAria = (theme) => {
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  };

  const initialTheme = document.documentElement.getAttribute("data-theme") || "light";
  syncThemeAria(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = activeTheme === "dark" ? "light" : "dark";

      // Check reduced motion preference
      const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        document.documentElement.setAttribute("data-theme", nextTheme);
        try { localStorage.setItem("sxw-theme", nextTheme); } catch (e) {}
        syncThemeAria(nextTheme);
        return;
      }

      // Calculate dynamic origin coordinates from the toggle's actual position
      const rect = themeToggle.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Compute required radius to cover the entire viewport
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      // Method A: Modern Native View Transition with circular clip-path
      if (document.startViewTransition) {
        const transition = document.startViewTransition(() => {
          document.documentElement.setAttribute("data-theme", nextTheme);
          try { localStorage.setItem("sxw-theme", nextTheme); } catch (e) {}
          syncThemeAria(nextTheme);
        });

        transition.ready.then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRadius}px at ${x}px ${y}px)`
              ]
            },
            {
              duration: 1000,
              easing: "cubic-bezier(.16, 1, .3, 1)",
              pseudoElement: "::view-transition-new(root)"
            }
          );
        });
      } else {
        // Method B: GPU-accelerated wave disk fallback for browsers without View Transitions
        const wave = document.createElement("div");
        wave.className = "theme-wave-overlay";
        wave.style.setProperty("--wave-x", `${x}px`);
        wave.style.setProperty("--wave-y", `${y}px`);
        wave.style.setProperty("--wave-radius", `${maxRadius}px`);
        wave.style.backgroundColor = nextTheme === "dark" ? "#121210" : "#f8f7f2";
        document.body.appendChild(wave);

        requestAnimationFrame(() => {
          wave.classList.add("expanding");
        });

        setTimeout(() => {
          document.documentElement.setAttribute("data-theme", nextTheme);
          try { localStorage.setItem("sxw-theme", nextTheme); } catch (e) {}
          syncThemeAria(nextTheme);
          wave.classList.add("fading");

          setTimeout(() => {
            if (wave.parentNode) wave.parentNode.removeChild(wave);
          }, 220);
        }, 440);
      }
    });
  }

  // =============================================================
  // 3. Navigation System (Original Mobile Nav + Desktop Revealer)
  // =============================================================
  const dock = document.querySelector(".nav-dock");
  const handle = document.querySelector(".nav-handle");
  const navHotZone = document.getElementById("navHotZone");
  const navDockZone = document.getElementById("navDockZone");
  let retractTimer = null;

  const showRevealer = () => {
    if (window.innerWidth <= 600) return; // Desktop only
    if (retractTimer) {
      clearTimeout(retractTimer);
      retractTimer = null;
    }
    if (dock) {
      dock.classList.add("revealer-visible");
    }
  };

  const scheduleRetractRevealer = (delay = 260) => {
    if (window.innerWidth <= 600) return; // Desktop only
    if (retractTimer) clearTimeout(retractTimer);
    retractTimer = setTimeout(() => {
      if (dock && !dock.classList.contains("open")) {
        dock.classList.remove("revealer-visible");
      }
    }, delay);
  };

  if (dock && handle) {
    // -----------------------------------------------------------
    // Desktop-Only Revealer Proximity & Hover Detection
    // -----------------------------------------------------------
    const isDesktopPointer = () => window.innerWidth > 600 && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (navHotZone) {
      navHotZone.addEventListener("mouseenter", showRevealer);
      navHotZone.addEventListener("mouseleave", () => scheduleRetractRevealer());
    }

    if (navDockZone) {
      navDockZone.addEventListener("mouseenter", showRevealer);
      navDockZone.addEventListener("mouseleave", () => scheduleRetractRevealer());
    }

    dock.addEventListener("mouseenter", showRevealer);
    dock.addEventListener("mouseleave", () => scheduleRetractRevealer());

    handle.addEventListener("focus", showRevealer);
    handle.addEventListener("blur", () => scheduleRetractRevealer());

    // Desktop hover peek (when not fully open)
    handle.addEventListener("mouseenter", () => {
      if (isDesktopPointer() && !dock.classList.contains("open")) {
        dock.classList.add("peek");
      }
    });

    handle.addEventListener("mouseleave", () => {
      if (!dock.classList.contains("open")) {
        dock.classList.remove("peek");
      }
    });

    // Desktop cursor proximity tracking
    document.addEventListener("mousemove", (e) => {
      if (!isDesktopPointer()) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const centerX = viewportWidth / 2;
      const distFromCenterX = Math.abs(e.clientX - centerX);

      // Approaching top-center zone
      const nearTopCenter = e.clientY <= 45 && distFromCenterX <= 150;
      // Approaching bottom dock zone
      const nearBottomDock = e.clientY >= (viewportHeight - 65) && distFromCenterX <= 170;

      if (nearTopCenter || nearBottomDock) {
        showRevealer();
      } else {
        if (!dock.matches(":hover") && (!navHotZone || !navHotZone.matches(":hover"))) {
          scheduleRetractRevealer(220);
        }
      }
    }, { passive: true });

    // -----------------------------------------------------------
    // Universal Click & Keyboard Navigation (Preserved Original Logic)
    // -----------------------------------------------------------
    handle.addEventListener("click", () => {
      const isOpen = dock.classList.toggle("open");
      dock.classList.remove("peek");

      handle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      handle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

      if (!isOpen && isDesktopPointer()) {
        scheduleRetractRevealer(350);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && dock.classList.contains("open")) {
        dock.classList.remove("open");
        dock.classList.remove("peek");
        handle.setAttribute("aria-expanded", "false");
        handle.setAttribute("aria-label", "Open navigation");
        if (isDesktopPointer()) scheduleRetractRevealer(250);
      }
    });

    dock.querySelectorAll(".drawer-link").forEach((link) => {
      link.addEventListener("click", () => {
        dock.classList.remove("open");
        dock.classList.remove("peek");
        handle.setAttribute("aria-expanded", "false");
        handle.setAttribute("aria-label", "Open navigation");
        if (isDesktopPointer()) scheduleRetractRevealer(250);
      });
    });
  }

  // =============================================================
  // 4. Highlight current page in navigation
  // =============================================================
  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll(".drawer-link").forEach((link) => {
      if (link.dataset.page === currentPage) {
        link.classList.add("active");
      }
    });
  }

  // =============================================================
  // 5. Update copyright year
  // =============================================================
  document.querySelectorAll("#year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
