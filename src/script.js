let infoObject = {
  brand: "",
  type: "",
  temperature: 5,
};

//brand name
function brandName(value) {
  // api object
  infoObject = { ...infoObject, brand: value };
  console.log(infoObject);
}

//Select button

function getSelectValue(value) {
  if (value === "null") {
    return;
  } else {
    infoObject = { ...infoObject, type: value };
  }
  console.log(infoObject);
}

//temperature
function rangeSlide(value, min, max) {
  // api object
  infoObject = { ...infoObject, temperature: value };

  //change background color
  const backValue = (value - min) / (max - min);
  const color = `rgb(255, 199, 54, ${backValue})`;
  document.getElementById("rangeSlider").style.backgroundColor = color;
  console.log(infoObject);
}

//calculate

const resultMessage = document.getElementById("resultModal");
let highDensity;
let lowDensity;

function calculate() {
  //check for info

  if (!infoObject.brand) {
    document.getElementById("brand-error").classList.add("active");
    console.log("No brand");
  } else if (!infoObject.type) {
    document.getElementById("type-error").classList.add("active");
    console.log("No type");
  } else {
    document.getElementById("brand-error").classList.remove("active");
    document.getElementById("type-error").classList.remove("active");
    console.log("calc ready");
  }

  //Calculate the number

  if (infoObject.type === "rice") {
    highDensity = 6.4 - 0.35 * infoObject.temperature;

    lowDensity = 5.6 - 0.12 * infoObject.temperature;
  }
  if (infoObject.type === "coffee") {
    highDensity = 4 - 0.35 * infoObject.temperature;

    lowDensity = 3.5 - 0.12 * infoObject.temperature;
  }

  //Insert info in Modal

  resultMessage.innerHTML = `
  <div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <p class="result-intro p-4">
        BRAND:
        <span class="bold-message">${infoObject.brand.toUpperCase()}</span>
      </p>
    </div>
    <div class="modal-body">
      <div class="result-message p-4">
        <div class="d-flex flex-column gap-4">
          <h3 class="result-bold">You product shelf life is:</h3>
          <p class="result-text">
          ${
            highDensity < 0
              ? `<p class= "result-text">Your product in high density
              polyethylene has expired.</p>`
              : `<span class="result-bold">${highDensity.toFixed(
                  2
                )} Months</span> in high density
              polyethylene.`
          }
            
          </p>
          <p class="result-text">
          ${
            lowDensity < 0
              ? `<p class= "result-text">Your product in low density
              polyethylene has expired.`
              : `          <span class="result-bold">${lowDensity.toFixed(
                  2
                )} Months</span> in low density
              polyethylene.`
          }
  
          </p>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>
    </div>
  </div>
</div>`;

  //open Modal
  var myModal = new bootstrap.Modal(document.getElementById("resultModal"));
  myModal.show();
}
