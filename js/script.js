document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Message sent successfully!");
});
function updateProfile() {
  const name = document.getElementById("profileName").value;
  const role = document.getElementById("profileRole").value;
  const location = document.getElementById("profileLocation").value;

  alert(`Profile updated:\nName: ${name}\nRole: ${role}\nLocation: ${location}`);
}
