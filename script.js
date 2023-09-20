const danskElements = document.querySelectorAll(".dansk");
const engElements = document.querySelectorAll(".eng");
const danskFlag = document.querySelector("#eng");
const engFlag = document.querySelector("#dansk");

function translateDanishtoE() {
  danskElements.forEach((element) => {
    element.style.display = "none";
  });

  danskFlag.style.display = "none";

  engElements.forEach((element) => {
    element.style.display = "block";
  });
}

function translateEnglishtoDa() {
  danskElements.forEach((element) => {
    element.style.display = "block";
  });

  danskFlag.style.display = "block";

  engElements.forEach((element) => {
    element.style.display = "none";
  });
}

engFlag.addEventListener("click", translateDanishtoE);
danskFlag.addEventListener("click", translateEnglishtoDa);
