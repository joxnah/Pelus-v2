const player = document.querySelector(".cozy-player");

if (player) {
  const audio = player.querySelector("audio");
  const button = player.querySelector("button");

  function setPlaying(isPlaying) {
    player.classList.toggle("is-playing", isPlaying);
    button.setAttribute("aria-pressed", String(isPlaying));
    button.textContent = isPlaying ? "Oprește muzica" : "Pornește muzica cozy";
  }

  button.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        button.textContent = "Nu s-a putut reda muzica";
      }
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", () => setPlaying(true));
  audio.addEventListener("pause", () => setPlaying(false));
  audio.addEventListener("ended", () => setPlaying(false));
}
