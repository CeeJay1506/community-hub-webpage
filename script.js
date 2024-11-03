document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the Community Hub!");

  // User authentication
  const authForm = document.getElementById("auth-form");
  const authTypeSelect = document.getElementById("auth-type");
  const usernameGroup = document.getElementById("username-group");
  const emailGroup = document.getElementById("email-group");

  // Initially hide email and username groups
  usernameGroup.style.display = "none";
  emailGroup.style.display = "none";

  // Toggle visibility of username and email fields based on selected action
  authTypeSelect.addEventListener("change", () => {
    const authType = authTypeSelect.value;

    if (authType === "signup") {
      usernameGroup.style.display = "block";
      emailGroup.style.display = "block";
    } else if (authType === "login") {
      usernameGroup.style.display = "block";
      emailGroup.style.display = "none";

      // Toggle between username and email login
      const useEmail = confirm("Do you want to log in with email?");
      if (useEmail) {
        usernameGroup.style.display = "none";
        emailGroup.style.display = "block";
      } else {
        usernameGroup.style.display = "block";
        emailGroup.style.display = "none";
      }
    }
  });

  authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const authType = authTypeSelect.value;

    if (authType === "signup") {
      console.log("User signed up:", { username, email, password });
      alert("Signup successful!");
    } else if (authType === "login") {
      if (email) {
        console.log("User logged in with email:", { email, password });
        alert("Login successful with email!");
      } else {
        console.log("User logged in with username:", { username, password });
        alert("Login successful with username!");
      }
    }

    // Clear form fields
    authForm.reset();
  });

  // Event sign-ups
  const eventItems = document.querySelectorAll(".event-item");
  eventItems.forEach((item) => {
    const signupButton = document.createElement("button");
    signupButton.textContent = "Sign Up";
    signupButton.addEventListener("click", () => {
      alert("Signed up for event!");
    });
    item.appendChild(signupButton);
  });

  // News updates (simulate fetching updates)
  setTimeout(() => {
    const newsSection = document.getElementById("news");
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");
    newsItem.innerHTML = `
            <h3>New Community Center Opening</h3>
            <p>We are excited to announce the opening of our new community center next month. Stay tuned for more details!</p>
        `;
    newsSection.appendChild(newsItem);
  }, 2000);

  // Add more resources dynamically
  const resources = [
    {
      title: "Job Assistance Program",
      description:
        "Our job assistance program helps community members find employment and improve their skills.",
      link: "https://www.jobassistance.com",
    },
    {
      title: "Food Bank",
      description:
        "Visit our local food bank to receive groceries and support for your family.",
      link: "https://www.foodbank.com",
    },
  ];

  const resourcesSection = document.getElementById("resources");
  resources.forEach((resource) => {
    const resourceItem = document.createElement("div");
    resourceItem.classList.add("resource-item");
    resourceItem.innerHTML = `
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <a href="${resource.link}" target="_blank">Learn More</a>
        `;
    resourcesSection.appendChild(resourceItem);
  });

  // Back to Top button functionality
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
