// Store and retrieve animation preference
const select = document.getElementById('animationSelect');
const image = document.getElementById('animImage');
const button = document.getElementById('applyBtn');

// Load saved preference
document.addEventListener("DOMContentLoaded", () => {
  const savedAnimation = localStorage.getItem('userAnimation');
  if (savedAnimation) {
    select.value = savedAnimation;
    applyAnimation(savedAnimation);
  }
});

button.addEventListener('click', () => {
  const selected = select.value;
  localStorage.setItem('userAnimation', selected);
  applyAnimation(selected);
});

function applyAnimation(animationType) {
  image.className = ''; // Clear previous classes
  void image.offsetWidth; // Reflow to reset animation
  image.classList.add(animationType);
}
