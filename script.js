const quotes=[
"Believe in yourself!",
"Success starts with small steps.",
"Never give up.",
"Dream it. Build it.",
"Stay positive and strong!",
];

function generate(){
  document.getElementById('quote').innerText = quotes[Math.floor(Math.random()*quotes.length)];
}
