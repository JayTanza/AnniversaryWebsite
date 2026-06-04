// Medallion click handler - show anniv1.png
const medallion = document.getElementById("medallion");
const scene = document.getElementById("scene");
let isShowingAnniv = false;

medallion.addEventListener("click", function () {
  if (!isShowingAnniv) {
    // Create overlay with anniv1.png
    const overlay = document.createElement("div");
    overlay.className = "anniv-overlay";
    overlay.innerHTML = `
      <div class="anniv-container">
        <img src="img/anniv1.png" alt="Anniversary" class="anniv-image" />
        <button class="close-btn" id="closeBtn">×</button>
      </div>
    `;
    scene.appendChild(overlay);
    isShowingAnniv = true;

    // Handle close button
    document.getElementById("closeBtn").addEventListener("click", function (e) {
      e.stopPropagation();
      overlay.remove();
      isShowingAnniv = false;
    });

    // Close when clicking outside the image
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        overlay.remove();
        isShowingAnniv = false;
      }
    });
  }
});

// Music player functionality
const musicBtn = document.getElementById("musicBtn");
const audioPlayer = document.getElementById("audioPlayer");
let isPlaying = false;

musicBtn.addEventListener("click", function (e) {
  e.stopPropagation();

  if (isPlaying) {
    audioPlayer.pause();
    musicBtn.classList.remove("playing");
    isPlaying = false;
  } else {
    audioPlayer.play();
    musicBtn.classList.add("playing");
    isPlaying = true;
  }
});

// Stop music button when audio ends
audioPlayer.addEventListener("ended", function () {
  musicBtn.classList.remove("playing");
  isPlaying = false;
});
