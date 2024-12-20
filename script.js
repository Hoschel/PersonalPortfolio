const services = [
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
    title: "Branding",
    description:
      "Creating unique brand identities that stand out in the market.",
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    title: "UI/UX Design",
    description: "Designing seamless user experiences that delight and engage.",
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    title: "Web Development",
    description: "Building high-performing websites with modern technologies.",
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    title: "Strategy",
    description: "Developing effective digital strategies for business growth.",
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    title: "Marketing",
    description: "Creating impactful digital marketing campaigns.",
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
    title: "Photography",
    description: "Professional photography services for your brand.",
  },
];

// Portfolio Data
const portfolioItems = [
  {
    title: "Agency Website",
    category: "Web Design",
    image: "path/to/image1.jpg",
  },
  {
    title: "Mobile App",
    category: "UI/UX Design",
    image: "path/to/image2.jpg",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image: "path/to/image3.jpg",
  },
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "path/to/image4.jpg",
  },
  {
    title: "Marketing Campaign",
    category: "Digital Marketing",
    image: "path/to/image5.jpg",
  },
  {
    title: "Product Photography",
    category: "Photography",
    image: "path/to/image6.jpg",
  },
];

// Populate Services
const servicesGrid = document.querySelector(".services-grid");
services.forEach((service) => {
  const serviceCard = document.createElement("div");
  serviceCard.className = "stat-card";
  serviceCard.innerHTML = `
        <div class="service-icon" style="color: var(--color-accent); margin-bottom: 1.5rem;">
            ${service.icon}
        </div>
        <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">${service.title}</h3>
        <p style="color: var(--color-gray);">${service.description}</p>
    `;
  servicesGrid.appendChild(serviceCard);
});

// Populate Portfolio
const portfolioGrid = document.querySelector(".portfolio-grid");
portfolioItems.forEach((item) => {
  const portfolioCard = document.createElement("div");
  portfolioCard.className = "portfolio-item";
  portfolioCard.style.cssText = `
        position: relative;
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: 1rem;
        cursor: pointer;
    `;

  portfolioCard.innerHTML = `
        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s ease;">
        <div class="portfolio-overlay" style="
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
            opacity: 0;
            transition: opacity 0.5s ease;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 2rem;
        ">
            <h3 style="color: var(--color-light); font-size: 1.5rem; margin-bottom: 0.5rem;">${item.title}</h3>
            <p style="color: var(--color-gray);">${item.category}</p>
        </div>
    `;

  portfolioCard.addEventListener("mouseenter", () => {
    portfolioCard.querySelector("img").style.transform = "scale(1.1)";
    portfolioCard.querySelector(".portfolio-overlay").style.opacity = "1";
  });

  portfolioCard.addEventListener("mouseleave", () => {
    portfolioCard.querySelector("img").style.transform = "scale(1)";
    portfolioCard.querySelector(".portfolio-overlay").style.opacity = "0";
  });

  portfolioGrid.appendChild(portfolioCard);
});

// Smooth Scroll
document.querySelector(".scroll-button").addEventListener("click", () => {
  document.getElementById("stats").scrollIntoView({ behavior: "smooth" });
});

// Intersection Observer for Fade In Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
