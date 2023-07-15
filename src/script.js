let infoObject = {
  brand: "",
  type: "",
  temperature: 5,
};

//brand name
function brandName(value) {
  // api object
  infoObject = { ...infoObject, brand: value };
}

// radio buttons background

const lineColor = "1px solid #4c7a50";

function typeChoice(id) {
  const radioChoice = document.getElementsByClassName("radio-choice");

  for (i = 0; i < radioChoice.length; i++) {
    radioChoice[i].classList.remove("active");
    if (radioChoice[i].children[0].value === id) {
      radioChoice[i].classList.add("active");
      infoObject = { ...infoObject, type: id };
      document.getElementById("line").style.borderRight = lineColor;
    }
  }
}

//temperature
function rangeSlide(value, min, max) {
  // api object
  infoObject = { ...infoObject, temperature: value };

  //change background color
  const backValue = (value - min) / (max - min);
  const color = `rgb(255, 199, 54, ${backValue})`;
  document.getElementById("rangeSlider").style.backgroundColor = color;
}

//calculate

const resultMessage = document.getElementById("resultMessage");
let highDensity;
let lowDensity;

function calculate() {
  if (infoObject.type === "arroz") {
    highDensity = 6.4 - 0.35 * infoObject.temperature;

    lowDensity = 5.6 - 0.12 * infoObject.temperature;
  }
  if (infoObject.type === "cafe") {
    highDensity = 4 - 0.35 * infoObject.temperature;

    lowDensity = 3.5 - 0.12 * infoObject.temperature;
    infoObject = { ...infoObject, type: "café" };
  }

  resultMessage.innerHTML = `<div class="result-wrapper">
  <div class="result-message">
    <p class="result-intro">
      EL TIEMPO DE VIDA DE TU ${infoObject.type.toUpperCase()} DE LA MARCA
      <span class="bold-message">${infoObject.brand.toUpperCase()}</span>
    </p>
    <div class="results">
      <p class="result-text">Es de</p>
      <div class="result-display">
      ${
        highDensity < 0
          ? `<p class= "result-text">Su producto ya expiro</p>`
          : `   <h3 class="result-bold">${highDensity.toFixed(2)} Meses</h3>
      <p class="result-text">en polietileno de alta densidad</p>`
      }
     
      </div>
      <h3 class="y">Y</h3>
      <div class="result-display">
      ${
        lowDensity < 0
          ? `<p class= "result-text">Su producto ya expiro</p>.`
          : `<h3 class="result-bold">${lowDensity.toFixed(2)} Meses</h3>
          <p class="result-text">en polietileno de baja densidad.</p>`
      }
      </div>
    </div>
  </div>
</div>`;
}
