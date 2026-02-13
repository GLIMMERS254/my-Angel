// ---------- Typewriter Letter ----------
const letterText = `Ann Kaboo, every moment with you is magical. Your smile lights up my world, your voice is music to my heart, and your love is the greatest gift I have ever received. I promise to cherish, adore, and love you forever. You are my heart, my soul, my everything. Forever yours, Raymond 💙`;
let i=0;
const letterEl = document.getElementById("letter-text");
function typeWriter() {
  if(i<letterText.length){
    letterEl.innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter,40);
  }
}
typeWriter();

// ---------- Countdown ----------
const daysLoved = 30; // corrected
document.getElementById("countdown").innerText = `I've loved you for ${daysLoved} days 💖`;

// ---------- Gift boxes ----------
const boxes = document.querySelectorAll(".box");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");
boxes.forEach(box => {
  box.addEventListener("click", () => {
    modal.style.display="block";
    modalText.innerHTML = `<img src="${box.src}" width="100"><br>${box.dataset.content}`;
  });
});
closeBtn.onclick = ()=>{modal.style.display="none";}
window.onclick = e=>{if(e.target==modal) modal.style.display="none";}

// ---------- Music & Voice ----------
const music = document.getElementById("music");
const voice = document.getElementById("voice");
document.getElementById("music-toggle").onclick=()=>{ music.paused?music.play():music.pause();}
document.getElementById("voice-toggle").onclick=()=>{ voice.paused?voice.play():voice.pause();}
document.getElementById("volume").oninput=e=>{music.volume=e.target.value;}

// ---------- Word Puzzle Game ----------
const words = ["RAYMOND","KABBY","LOVE","HEART","HUG","KISS","CANDY","CUPID","SMILE","ROMANCE"];
const puzzleContainer = document.getElementById("puzzle");
const puzzleResult = document.getElementById("puzzle-result");

words.forEach(word=>{
  word.split("").forEach(l=>{
    let box = document.createElement("div");
    box.className="puzzle-box";
    box.contentEditable=true;
    box.dataset.letter=l;
    puzzleContainer.appendChild(box);
  });
});

document.getElementById("checkPuzzle").onclick=()=>{
  let correct=0;
  document.querySelectorAll(".puzzle-box").forEach(box=>{
    if(box.textContent.toUpperCase()===box.dataset.letter) correct++;
  });
  puzzleResult.innerText=`You found ${correct} out of ${words.join("").length} letters correctly! 💖`;
}