document.addEventListener("DOMContentLoaded", () => {
  // Function to animate skill lists
  const animateSkills = (listId) => {
    const skillsList = document.getElementById(listId)
    if (!skillsList) return

    const skills = skillsList.getElementsByTagName("li")

    for (let i = 0; i < skills.length; i++) {
      setTimeout(() => {
        skills[i].style.opacity = "0"
        skills[i].style.transform = "translateY(20px)"

        setTimeout(() => {
          skills[i].style.transition = "opacity 0.5s ease, transform 0.5s ease"
          skills[i].style.opacity = "1"
          skills[i].style.transform = "translateY(0)"
        }, 100)
      }, i * 200)
    }
  }

  // Animate both skill lists
  animateSkills("skills-list")
  animateSkills("soft-skills-list")

  // Make email and LinkedIn links interactive
  const links = document.querySelectorAll(".contact-item a")
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transition = "color 0.3s ease"
      link.style.color = "#2980b9"
    })

    link.addEventListener("mouseleave", () => {
      link.style.transition = "color 0.3s ease"
      link.style.color = "#3498db"
    })
  })
})
