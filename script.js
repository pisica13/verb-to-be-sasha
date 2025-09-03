// Exercise data: sentence and correct answer
const exercises = [
  ["I ___ happy.", "am"],
  ["You ___ my friend.", "are"],
  ["He ___ tall.", "is"],
  ["We ___ ready.", "are"],
  ["She ___ tired.", "is"],
  ["They ___ here.", "are"],
  ["It ___ cold today.", "is"],
  ["Papa ___ smart.", "is"],
  ["Mama ___ kind.", "is"],
  ["Sasha ___ loved.", "is"]
];

// Generate input fields for each exercise
const list = document.getElementById('exerciseList');
exercises.forEach((ex, i) => {
  const div = document.createElement('div');
  div.innerHTML = ex[0].replace("___", `<input id='ans${i}' size=5>`);
  list.appendChild(div);
});

// Check button: calculate score
document.getElementById('checkBtn').onclick = () => {
  let score = 0;
  exercises.forEach((ex, i) => {
    const ans = document.getElementById('ans' + i).value.trim().toLowerCase();
    if (ans === ex[1]) score++;
  });
  document.getElementById('score').innerText = score + " / " + exercises.length;
};

// Reset button: reload page
document.getElementById('resetBtn').onclick = () => {
  location.reload();
};

// Play song button: show YouTube iframe
document.getElementById("musicBtn").onclick = () => {
  document.getElementById("musicPlayer").style.display = "block";
};
