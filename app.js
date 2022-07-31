const btn = document.querySelector(".switch");
const slide = document.querySelector(".slide");
const video = document.querySelector(".video-container");

btn.addEventListener("click", (e) => {
  if (e.target.classList.contains("slide")) {
    e.target.classList.remove("slide");
    video.play();
  } else {
    e.target.classList.add("slide");
    video.pause();
  }
  console.log(e.target.classList);
});
