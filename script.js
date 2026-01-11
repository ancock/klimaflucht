/* Smooth Scroll */
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* Fluchtbiografie */
const storySteps = [
  "Ich heiße Amir und bin 15 Jahre alt. Meine Familie lebte von der Landwirtschaft.",
  "Seit Jahren regnet es kaum noch. Die Felder verdorren, unser Brunnen ist leer.",
  "Als unser Dorf aufgegeben wird, fliehen wir in die nächste Stadt.",
  "Doch auch dort gibt es kein Wasser und keine Arbeit. Wir müssen weiterziehen.",
  "Unsere Flucht endet an Europas Grenzen – ohne klaren rechtlichen Schutz."
];

let step = 0;
const storyText = document.getElementById("storyText");
const nextStep = document.getElementById("nextStep");

storyText.textContent = storySteps[0];

nextStep.addEventListener("click", () => {
  step++;
  if (step < storySteps.length) {
    storyText.textContent = storySteps[step];
  } else {
    nextStep.disabled = true;
    nextStep.textContent = "Ende der Geschichte";
  }
});

/* Karte */
const slider = document.getElementById("mapSlider");
const mapYear = document.getElementById("mapYear");
const mapText = document.getElementById("mapText");

slider.addEventListener("input", () => {
  if (slider.value == 0) {
    mapYear.textContent = "Heute";
    mapText.textContent =
      "Klimaflucht betrifft vor allem besonders verwundbare Regionen.";
  } else {
    mapYear.textContent = "2050";
    mapText.textContent =
      "Ohne Klimaschutz nehmen klimabedingte Fluchtbewegungen stark zu – auch Richtung Europa.";
  }
});
