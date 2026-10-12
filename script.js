document.body.classList.add("js-ready");

const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleLabel = document.querySelector(".theme-toggle-label");
const themeToggleState = document.querySelector(".theme-toggle-state");
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");
const year = document.getElementById("year");
const rotatingText = document.querySelector(".rotating-text");
const progressBar = document.querySelector(".scroll-progress");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const filterTitle = document.getElementById("filter-title");
const filterDescription = document.getElementById("filter-description");
const statNumbers = document.querySelectorAll(".stat-number");
const tiltCards = document.querySelectorAll(".tilt-card");
const pointerGlow = document.querySelector(".pointer-glow");
const stackTabs = document.querySelectorAll(".stack-tab");
const stackEyebrow = document.getElementById("stack-eyebrow");
const stackTitle = document.getElementById("stack-title");
const stackDescription = document.getElementById("stack-description");
const stackStrength = document.getElementById("stack-strength");
const stackTools = document.getElementById("stack-tools");
const stackOutcomes = document.getElementById("stack-outcomes");
const stackBadges = document.getElementById("stack-badges");
const stackSnippet = document.getElementById("stack-snippet");
const stackLevelBar = document.getElementById("stack-level-bar");
const inspectButtons = document.querySelectorAll(".inspect-button");
const projectModalShell = document.getElementById("project-modal-shell");
const modalCloseButtons = document.querySelectorAll("[data-close-modal]");
const modalKicker = document.getElementById("modal-kicker");
const modalTitle = document.getElementById("modal-title");
const modalSummary = document.getElementById("modal-summary");
const modalTags = document.getElementById("modal-tags");
const modalChallenge = document.getElementById("modal-challenge");
const modalBuild = document.getElementById("modal-build");
const modalOutcome = document.getElementById("modal-outcome");
const modalHighlights = document.getElementById("modal-highlights");
const commandTriggers = document.querySelectorAll(".command-trigger");
const commandPalette = document.getElementById("command-palette");
const commandCloseButtons = document.querySelectorAll("[data-close-command]");
const commandItems = document.querySelectorAll(".command-item");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const THEME_STORAGE_KEY = "vikky-portfolio-theme";

const stackProfiles = {
  html: {
    eyebrow: "HTML Practice",
    title: "Clean page structure for responsive websites",
    description: "Main HTML ka use karke clear sections, readable content structure, aur portfolio ya website layouts banane ki practice karta hoon.",
    strength: "92%",
    tools: [
      "Hero, about, project, and contact sections with clean structure",
      "Readable layout flow for portfolio and practice websites",
      "Semantic blocks that help pages stay organized"
    ],
    outcomes: [
      "Responsive websites that feel clear and user-friendly",
      "Better content structure for web development projects",
      "Stronger foundation for frontend builds"
    ],
    badges: ["HTML", "Sections", "Responsive Structure"],
    snippet: `<section class="hero">
  <header class="intro">
    <h1>Build a clean website layout</h1>
    <p>Good structure makes content easier to use.</p>
  </header>
</section>`
  },
  css: {
    eyebrow: "CSS Practice",
    title: "Responsive styling that improves presentation",
    description: "CSS ke through main layouts ko attractive, readable, aur mobile friendly banane par focus karta hoon.",
    strength: "88%",
    tools: [
      "Responsive spacing and layout styling for different screens",
      "Cards, buttons, typography, and section level design treatment",
      "Color, alignment, and structure ko balance karke better visuals"
    ],
    outcomes: [
      "User-friendly pages with improved visual appeal",
      "Responsive designs that work across mobile and desktop",
      "Web pages that feel cleaner and more polished"
    ],
    badges: ["CSS", "Responsive Design", "UI Styling"],
    snippet: `:root {
  --accent: #7af0d2;
  --surface: rgba(13, 24, 45, 0.82);
}

.card {
  border-radius: 24px;
  background: var(--surface);
}`
  },
  javascript: {
    eyebrow: "JavaScript Practice",
    title: "Interactive behavior and API based learning",
    description: "JavaScript ke saath DOM interaction, small project logic, aur API integration par hands-on practice ki hai.",
    strength: "84%",
    tools: [
      "DOM events and interactive features for dynamic pages",
      "API usage in small learning based web projects",
      "Page behavior improve karne ke liye simple logic building"
    ],
    outcomes: [
      "Interactive project pages with better user experience",
      "Stronger coding confidence through practical web builds",
      "Better understanding of browser-based programming"
    ],
    badges: ["JavaScript", "DOM", "API Practice"],
    snippet: `fetch("/api/data")
  .then((response) => response.json())
  .then((data) => {
    renderProjects(data);
});`
  },
  python: {
    eyebrow: "Python Learning",
    title: "Programming fundamentals and logic building",
    description: "Python ko main programming concepts aur logical thinking improve karne ke liye seekh raha hoon.",
    strength: "74%",
    tools: [
      "Basic scripting and logic focused problem solving",
      "Concept building for future project growth",
      "Learning syntax, flow control, and coding habits"
    ],
    outcomes: [
      "Better understanding of programming fundamentals",
      "Improved problem solving mindset through coding practice",
      "A stronger base for future advanced work"
    ],
    badges: ["Python", "Logic", "Learning"],
    snippet: `skills = ["practice", "consistency", "problem solving"]

for skill in skills:
    print(skill)

print("Keep learning every day.")`
  },
  node: {
    eyebrow: "Node.js Learning",
    title: "Backend basics for future full stack growth",
    description: "Node.js ko main backend concepts aur API understanding build karne ke liye learning path me include kar raha hoon.",
    strength: "72%",
    tools: [
      "Basic backend ideas and request-response understanding",
      "API ready thinking for future web application growth",
      "Learning how frontend and backend can connect"
    ],
    outcomes: [
      "Stronger full stack awareness while learning web development",
      "Better understanding of how data can move in web apps",
      "Preparation for more advanced project building later"
    ],
    badges: ["Node.js", "Backend Basics", "Future Growth"],
    snippet: `app.get("/api/profile", (req, res) => {
  res.json({
    name: "Vikky Podiyam",
    role: "Aspiring Web Developer"
  });
});`
  }
};

const projectDetails = {
  "PX-01": {
    kicker: "Frontend Practice Project",
    title: "Personal portfolio website practice",
    summary: "A portfolio style project built to improve layout, presentation, and frontend structure using HTML, CSS, and JavaScript.",
    challenge: "The challenge was to create a website that looks organized, responsive, and useful while continuing to improve coding confidence.",
    build: "Used HTML for structure, CSS for layout and visual styling, and JavaScript for interactivity and smoother presentation.",
    outcome: "This kind of project helps show practical web development growth and makes my learning journey visible in one place.",
    tags: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Responsive website structure",
      "Better frontend design and styling practice",
      "Portfolio presentation through real code"
    ]
  },
  "PX-02": {
    kicker: "Responsive Website Practice",
    title: "Responsive website pages",
    summary: "Website practice focused on clean sections, responsive layout behavior, and user-friendly page presentation.",
    challenge: "The goal was to make pages work well across screen sizes while keeping the content easy to read and navigate.",
    build: "Worked on structure, spacing, styling, and layout adjustments to keep the website balanced on mobile and desktop.",
    outcome: "These projects improved my frontend confidence and helped me understand how to build cleaner responsive websites.",
    tags: ["Responsive UI", "HTML", "CSS"],
    highlights: [
      "Responsive layouts across screen sizes",
      "Cleaner section based design",
      "More user-friendly website structure"
    ]
  },
  "PX-03": {
    kicker: "JavaScript + API Practice",
    title: "JavaScript and API based mini projects",
    summary: "Small projects built to strengthen JavaScript understanding and API usage in practical web development work.",
    challenge: "The challenge was to move beyond static pages and work with dynamic data and interactive logic.",
    build: "Used JavaScript for DOM behavior and API requests to create projects that respond to user actions and fetched data.",
    outcome: "These projects helped improve problem solving and gave me hands-on confidence with dynamic frontend development.",
    tags: ["JavaScript", "API", "Dynamic UI"],
    highlights: [
      "Practice with fetched data and interaction flow",
      "Better JavaScript problem solving through real work",
      "Stronger understanding of frontend dynamics"
    ]
  },
  "PX-04": {
    kicker: "Deployment Practice",
    title: "GitHub project publishing",
    summary: "Projects were published on GitHub to share code, track progress, and build a visible development record.",
    challenge: "The challenge was to present learning projects in a cleaner and more professional way online.",
    build: "Organized project code and pushed it to GitHub so the work could be reviewed, improved, and shared.",
    outcome: "This improved my confidence with publishing work and showing practical project activity.",
    tags: ["GitHub", "Code Sharing", "Practice"],
    highlights: [
      "Project code shared publicly",
      "Better presentation of learning work",
      "Useful step toward professional portfolio building"
    ]
  },
  "PX-05": {
    kicker: "Hosting Experience",
    title: "Netlify deployment experience",
    summary: "Projects were deployed on Netlify to gain real hosting experience and make builds available as live websites.",
    challenge: "The key challenge was learning how to move project work from local files to a live hosted website.",
    build: "Used Netlify hosting to publish frontend projects and understand the deployment side of web development.",
    outcome: "This gave practical exposure to live deployment and made project sharing easier and more professional.",
    tags: ["Netlify", "Hosting", "Live Projects"],
    highlights: [
      "Live hosted project experience",
      "Better project presentation through deployment",
      "Hands-on learning beyond just local development"
    ]
  },
  "PX-06": {
    kicker: "Skill Growth Practice",
    title: "Python and Node.js learning practice",
    summary: "Python and Node.js are part of my current growth path as I continue building stronger logic and backend awareness.",
    challenge: "The challenge is to keep improving step by step while balancing frontend practice with broader programming concepts.",
    build: "I use small exercises and concept learning to strengthen Python basics, Node.js ideas, and overall coding understanding.",
    outcome: "This supports long-term growth from frontend practice toward stronger programming and full stack development ability.",
    tags: ["Python", "Node.js", "Learning"],
    highlights: [
      "Foundation building for future backend work",
      "Consistent learning through small steps",
      "Improved confidence in programming concepts"
    ]
  }
};

let lastOverlayTrigger = null;

function readThemePreference() {
  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === "light" || savedTheme === "dark" ? savedTheme : null;
  } catch {
    return null;
  }
}

function persistThemePreference(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage issues and keep the theme working for the current page load.
  }
}

function getInitialTheme() {
  const savedTheme = readThemePreference();

  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
  const isLightTheme = theme === "light";

  document.body.classList.toggle("light-theme", isLightTheme);

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isLightTheme));
    themeToggle.setAttribute(
      "aria-label",
      isLightTheme ? "Switch to dark mode" : "Switch to light mode"
    );
    themeToggle.title = isLightTheme ? "Switch to dark mode" : "Switch to light mode";
  }

  if (themeToggleLabel) {
    themeToggleLabel.textContent = "Theme";
  }

  if (themeToggleState) {
    themeToggleState.textContent = isLightTheme ? "Light" : "Dark";
  }
}

applyTheme(getInitialTheme());

if (year) {
  year.textContent = new Date().getFullYear();
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
    applyTheme(nextTheme);
    persistThemePreference(nextTheme);
  });
}

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          const matches = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", matches);
        });
      });
    },
    {
      threshold: 0.4,
      rootMargin: "-12% 0px -42% 0px"
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

if (revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

if (rotatingText && rotatingText.dataset.words) {
  const words = rotatingText.dataset.words
    .split(",")
    .map((word) => word.trim())
    .filter(Boolean);

  if (words.length > 1 && !prefersReducedMotion) {
    let index = 0;

    window.setInterval(() => {
      rotatingText.style.opacity = "0";

      window.setTimeout(() => {
        index = (index + 1) % words.length;
        rotatingText.textContent = words[index];
        rotatingText.style.opacity = "1";
      }, 180);
    }, 1900);
  }
}

function updateScrollProgress() {
  if (!progressBar) {
    return;
  }

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}

updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });

function setBodyLockState() {
  const shouldLock = Boolean(
    (projectModalShell && !projectModalShell.hidden) ||
    (commandPalette && !commandPalette.hidden)
  );

  document.body.classList.toggle("modal-open", shouldLock);
}

function renderList(container, items) {
  if (!container) {
    return;
  }

  container.innerHTML = "";

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    container.appendChild(listItem);
  });
}

function renderBadges(container, items) {
  if (!container) {
    return;
  }

  container.innerHTML = "";

  items.forEach((item) => {
    const badge = document.createElement("span");
    badge.textContent = item;
    container.appendChild(badge);
  });
}

function renderStackProfile(key) {
  const profile = stackProfiles[key];

  if (!profile) {
    return;
  }

  if (stackEyebrow) {
    stackEyebrow.textContent = profile.eyebrow;
  }

  if (stackTitle) {
    stackTitle.textContent = profile.title;
  }

  if (stackDescription) {
    stackDescription.textContent = profile.description;
  }

  if (stackStrength) {
    stackStrength.textContent = profile.strength;
  }

  if (stackLevelBar) {
    stackLevelBar.style.width = profile.strength;
  }

  if (stackSnippet) {
    stackSnippet.textContent = profile.snippet;
  }

  renderList(stackTools, profile.tools);
  renderList(stackOutcomes, profile.outcomes);
  renderBadges(stackBadges, profile.badges);

  stackTabs.forEach((tab) => {
    const isActive = tab.dataset.stack === key;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });
}

if (stackTabs.length) {
  renderStackProfile("html");

  stackTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.stack || "html";
      renderStackProfile(key);
    });
  });
}

if (filterButtons.length && projectCards.length) {
  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";

      filterButtons.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });

      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");

      if (filterTitle) {
        filterTitle.textContent = button.dataset.title || "Selected filter";
      }

      if (filterDescription) {
        filterDescription.textContent = button.dataset.description || "";
      }

      projectCards.forEach((card) => {
        const categories = (card.dataset.category || "").split(" ");
        const matches = filter === "all" || categories.includes(filter);
        card.classList.toggle("is-hidden", !matches);
      });
    });
  });
}

function openProjectModal(projectId, trigger) {
  const project = projectDetails[projectId];

  if (!project || !projectModalShell) {
    return;
  }

  lastOverlayTrigger = trigger || null;

  if (modalKicker) {
    modalKicker.textContent = project.kicker;
  }

  if (modalTitle) {
    modalTitle.textContent = project.title;
  }

  if (modalSummary) {
    modalSummary.textContent = project.summary;
  }

  if (modalChallenge) {
    modalChallenge.textContent = project.challenge;
  }

  if (modalBuild) {
    modalBuild.textContent = project.build;
  }

  if (modalOutcome) {
    modalOutcome.textContent = project.outcome;
  }

  renderBadges(modalTags, project.tags);
  renderList(modalHighlights, project.highlights);

  projectModalShell.hidden = false;
  setBodyLockState();

  const modalCloseButton = projectModalShell.querySelector(".modal-close");

  if (modalCloseButton) {
    modalCloseButton.focus();
  }
}

function closeProjectModal() {
  if (!projectModalShell || projectModalShell.hidden) {
    return;
  }

  projectModalShell.hidden = true;
  setBodyLockState();

  if (lastOverlayTrigger) {
    lastOverlayTrigger.focus();
  }
}

if (inspectButtons.length) {
  inspectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openProjectModal(button.dataset.project || "", button);
    });
  });
}

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeProjectModal);
});

function openCommandPalette(trigger) {
  if (!commandPalette) {
    return;
  }

  lastOverlayTrigger = trigger || null;
  commandPalette.hidden = false;
  setBodyLockState();


/* Auto-theme cycling: if the user has NOT saved a theme preference, toggle theme periodically.
   Respects `prefers-reduced-motion` and will not persist automated changes to localStorage. */
(function startAutoThemeCycle() {
  if (prefersReducedMotion) return;

  const saved = readThemePreference();
  if (saved) return; // don't auto-toggle if user already chose

  let current = document.body.classList.contains("light-theme") ? "light" : "dark";

  const interval = 8000; // ms between automatic switches

  setInterval(() => {
    current = current === "light" ? "dark" : "light";
    applyTheme(current);
    // do NOT persist this automated choice so user's explicit selection (if any) stays respected
  }, interval);
})();
  const firstCommand = commandPalette.querySelector(".command-item");

  if (firstCommand) {
    firstCommand.focus();
  }
}

function closeCommandPalette() {
  if (!commandPalette || commandPalette.hidden) {
    return;
  }

  commandPalette.hidden = true;
  setBodyLockState();

  if (lastOverlayTrigger) {
    lastOverlayTrigger.focus();
  }
}

if (commandTriggers.length) {
  commandTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openCommandPalette(trigger);
    });
  });
}

commandCloseButtons.forEach((button) => {
  button.addEventListener("click", closeCommandPalette);
});

if (commandItems.length) {
  commandItems.forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.dataset.target;
      const section = target ? document.querySelector(target) : null;

      closeCommandPalette();

      if (section) {
        section.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      }
    });
  });
}

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if ((event.ctrlKey || event.metaKey) && key === "k") {
    event.preventDefault();

    if (commandPalette && commandPalette.hidden) {
      openCommandPalette(document.activeElement instanceof HTMLElement ? document.activeElement : null);
    } else {
      closeCommandPalette();
    }
  }

  if (event.key === "Escape") {
    closeProjectModal();
    closeCommandPalette();
  }
});

if (statNumbers.length) {
  const animateCounter = (element) => {
    const target = Number(element.dataset.target || 0);
    const duration = prefersReducedMotion ? 0 : 1000;
    const startTime = performance.now();

    const tick = (now) => {
      if (duration === 0) {
        element.textContent = String(target);
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(target * progress);
      element.textContent = String(value);

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    window.requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.8
    }
  );

  statNumbers.forEach((item) => counterObserver.observe(item));
}

if (pointerGlow && window.matchMedia("(pointer: fine)").matches) {
  document.body.classList.add("has-fine-pointer");

  window.addEventListener(
    "pointermove",
    (event) => {
      pointerGlow.style.setProperty("--glow-x", `${event.clientX}px`);
      pointerGlow.style.setProperty("--glow-y", `${event.clientY}px`);
    },
    { passive: true }
  );
}

if (tiltCards.length && window.matchMedia("(pointer: fine)").matches && !prefersReducedMotion) {
  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const bounds = card.getBoundingClientRect();
      const offsetX = event.clientX - bounds.left;
      const offsetY = event.clientY - bounds.top;
      const rotateY = ((offsetX / bounds.width) - 0.5) * 10;
      const rotateX = (0.5 - (offsetY / bounds.height)) * 10;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}
