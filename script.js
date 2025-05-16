// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileNav = document.getElementById("mobile-nav")

  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active")
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!mobileNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
      mobileNav.classList.remove("active")
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })

        // Close mobile menu after clicking a link
        mobileNav.classList.remove("active")
      }
    })
  })

  // Simple scroll animation for elements
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".feature-card, .testimonial-card, .section-header")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial styles for animation
  document.querySelectorAll(".feature-card, .testimonial-card, .section-header").forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })

  // Run animation on load and scroll
  window.addEventListener("load", animateOnScroll)
  window.addEventListener("scroll", animateOnScroll)
})
