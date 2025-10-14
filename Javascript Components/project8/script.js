const video = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switch-btn"); // Correctly select the button
const btn = switchBtn; // Assign the button element to the 'btn' variable (optional, but makes the code in the listener consistent with your original)

switchBtn.addEventListener("click", function() {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
