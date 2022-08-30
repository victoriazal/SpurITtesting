let collapsible_content = document.getElementsByClassName("collapsible__content")

const animation = collapsible_content[0].animate(
  { height: ["80px", "0px"], overflow: "hidden" },
  { duration: 250, fill: "both", easing: "ease-out" },

);

animation.pause();

document.querySelector("button").addEventListener("click", () => {
  if (animation.playState === "paused") {
    animation.play();
  } else {
    animation.reverse();
  }
});
