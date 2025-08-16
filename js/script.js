// Welcome Message
const welcomeMsg = document.getElementById("welcomeMsg");
const nameInput = document.getElementById("name");
if (welcomeMsg && nameInput) {
  nameInput.addEventListener("input", () => {
    welcomeMsg.textContent = `Hi, ${nameInput.value || "Guest"}`;
  });
}

// Form Validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const output = document.getElementById("formOutput");

    if (!email.includes("@") || message.length < 5) {
      output.innerHTML = `<p style="color:red;">Form tidak valid!</p>`;
    } else {
      output.innerHTML = `
        <p><strong>Name:</strong> ${nameInput.value}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
      form.reset();
      welcomeMsg.textContent = "Hi, Guest";
    }
  });
}
