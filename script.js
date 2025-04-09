document.getElementById("themeToggle").addEventListener("click", () => 
    { 
    document.body.classList.toggle("dark-theme"); 
    });
    
    // Wait for DOM to load (optional but safe)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill out all fields.");
        } else {
            // Check if there's a response element or create one
            let responseEl = document.getElementById("response");
            if (!responseEl) {
                responseEl = document.createElement("p");
                responseEl.id = "response";
                form.appendChild(responseEl); // Add below the form
            }

            responseEl.innerText = `Thanks, ${name}. We'll get back to you soon!`;

            // Optional: reset form
            e.target.reset();
        }
    });
});

document.getElementById("loadUsersBtn").addEventListener("click", 
    async () => { 
      try { 
        const res = await 
    fetch('https://jsonplaceholder.typicode.com/users'); 
        const users = await res.json(); 
        const userList = document.getElementById("userList"); 
        userList.innerHTML = ""; 
        users.forEach(user => { 
          const li = document.createElement("li"); 
          li.textContent = user.name; 
          userList.appendChild(li); 
        }); 
      } catch (err) { 
        console.error("Failed to load users:", err); 
      } 
    }); 

    document.querySelectorAll(".question").forEach((q) => { 
        q.addEventListener("click", () => { 
          q.nextElementSibling.classList.toggle("visible"); 
        }); 
      });

      function updateClock() {
        const clock = document.getElementById("clock");
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }
    
    setInterval(updateClock, 1000);
    updateClock(); // initial call

    