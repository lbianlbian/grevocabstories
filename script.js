
// URLs placeholders, replace these with your actual URLs
const applePodcastsRSS = "script.google.com/macros/s/AKfycbwAhX2LV_2cMMN6unuAlb6a0RVFVpKy_dHLYaptq5627L4sWyl-O88IsQAMVZJdhBNu2g/exec"; // e.g. "podcasts://yourfeedurl.com/rss"
const mp3Files = [
  "https://ia601007.us.archive.org/35/items/artlessMendaciousQuiescent/artlessMendaciousQuiescent.mp3",
  "https://ia601007.us.archive.org/35/items/artlessMendaciousQuiescent/encomiumLagniappeAbrogate.mp3",
  "https://ia601007.us.archive.org/35/items/artlessMendaciousQuiescent/enervatedCharnelAbjure.mp3",
  "https://ia601007.us.archive.org/35/items/artlessMendaciousQuiescent/lacrymoseLasciviousAver.mp3",
  "https://ia601007.us.archive.org/35/items/artlessMendaciousQuiescent/lugubriousLoquaciousFecund.mp3"
];

const storiesModal = document.getElementById('storiesModal');
const applePodcastLinkDiv = document.getElementById('applePodcastLink');
const downloadLinksUl = document.querySelector('#downloadLinks ul');
const audioPlayer = document.getElementById('audioPlayer');

// Detect Apple device (iOS or macOS Safari)
function isAppleDevice() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.userAgent.includes("Macintosh") && "ontouchend" in document);
}

function openStoriesModal() {
  // Show the modal
  storiesModal.style.display = "block";

  // Show Apple Podcasts link if on Apple device
  if (isAppleDevice()) {
    applePodcastLinkDiv.style.display = "block";
    applePodcastLinkDiv.innerHTML = `
      <a href="podcasts://${applePodcastsRSS}" style="font-weight:bold; color:#ff6f61; text-decoration:none;">
        Open in Apple Podcasts
      </a>
    `;
  } else {
    applePodcastLinkDiv.style.display = "none";
  }

  // Populate the download links with file URLs and nice labels
  downloadLinksUl.innerHTML = mp3Files.map((url, i) => {
    return `<li><a href="${url}" target='_blank'>MP3 File ${i+1}</a></li>`;
  }).join('');

  // Setup audio player to play all MP3s autoplay one after another
  let currentTrack = 0;
  audioPlayer.src = mp3Files[currentTrack];
  audioPlayer.play();

  audioPlayer.onended = () => {
    currentTrack++;
    if (currentTrack < mp3Files.length) {
      audioPlayer.src = mp3Files[currentTrack];
      audioPlayer.play();
    }
  };
}

function closeStoriesModal() {
  storiesModal.style.display = "none";
  audioPlayer.pause();
  audioPlayer.src = ""; // Clear source for freshness
}

// Close modal if clicking outside modal content
window.onclick = function(event) {
  if (event.target === storiesModal) {
    closeStoriesModal();
  }
};

function openFormModal() {
            document.getElementById('formModal').style.display = 'block';
        }

        function closeFormModal() {
            document.getElementById('formModal').style.display = 'none';
        }

        // Also close if user clicks outside modal content
        window.onclick = function(event) {
            const modal = document.getElementById('formModal');
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }