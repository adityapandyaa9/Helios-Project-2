const range = document.getElementById("myRange");
const sliderValueDisplay = document.getElementById("slider-value");

range.addEventListener("input", function () {
  const value = parseInt(this.value, 10); // Parse value as integer
  const thumbPosition = ((value - this.min) / (this.max - this.min)) * 100; // Correct calculation

  this.style.setProperty("--thumb-position", `${thumbPosition}%`);
  sliderValueDisplay.textContent = value;
});

range.dispatchEvent(new Event("input")); // Set initial value and background
