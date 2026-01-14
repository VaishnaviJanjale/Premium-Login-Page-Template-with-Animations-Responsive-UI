const input = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";

  toggle.classList.toggle("ri-eye-fill");
  toggle.classList.toggle("ri-eye-off-fill");

  toggle.style.transform = "scale(1.3)";
  setTimeout(() => {
    toggle.style.transform = "scale(1)";
  }, 150);
});
