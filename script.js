let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCountAll = document.getElementById("heartCount");
const coinCountAll = document.getElementById("coinCount");
const copyCountAll = document.getElementById("copyCount");
const history = document.getElementById("historyList");
const clearBtn = document.getElementById("clearBtn");

const cards = document.querySelectorAll("section.mb-2");



function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  const heartBtn = card.querySelector(".heartBtn");
  const copyBtn = card.querySelector(".copyBtn");
  const callBtn = card.querySelector(".callBtn");

  
  const serviceName = card.querySelector(".serviceName").innerText;
  const serviceNumber = card.querySelector(".serviceNumber").innerText;


  heartBtn.addEventListener("click", function () {
    heartCount++;
    heartCountAll.innerText = heartCount;
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(serviceNumber);
    alert("The number Copied: " + serviceNumber);

    copyCount++;
    copyCountAll.innerText = copyCount + " Copy";


    const li = document.createElement("li");
    li.innerText =
      serviceName + " - " + serviceNumber + " " + getCurrentTime() ;
    li.className = "p-2 bg-gray-100 rounded";
    history.prepend(li);
  });

  callBtn.addEventListener("click", function () {
    if (coinCount < 20) {
      alert("Not enough coins!");
      return;
    }

    coinCount -= 20;
    coinCountAll.innerText = coinCount;

    alert("Calling " + serviceName + " at " + serviceNumber);



const li = document.createElement("li");
li.style.padding = "8px";
li.style.backgroundColor = "#F5FFF6";
li.style.marginBottom = "5px";
li.style.borderRadius = "5px";
li.style.display = "flex";
li.style.justifyContent = "space-between";
li.style.alignItems = "center";

li.innerHTML = `
  <div>
    <div style="font-weight:bold;">${serviceName}</div>
    <div>${serviceNumber}</div>
  </div>
  <div style="font-size:12px; color:gray;">${getCurrentTime()}</div>`;

history.prepend(li)});

}


clearBtn.addEventListener("click", function () {
  history.innerHTML = "";
});

