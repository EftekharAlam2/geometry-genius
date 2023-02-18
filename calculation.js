function inputField(id1) {
  const value1 = document.getElementById(id1);
  const valueString = value1.value;
  const finalValue = parseFloat(valueString);
  value1.value = "";
  if (isNaN(finalValue)) {
    return alert("Please Enter the correct value");
  } else if (finalValue.toString().length != valueString.length) {
    return alert("Please Enter the correct value");
  } else {
    if (finalValue < 0) {
      return alert("Please Enter the posu correct value");
    } else {
      return finalValue;
    }
  }
}

function resultTriangle(id1, result) {
  const result2 = document.getElementById(id1);
  const new1 = document.createElement("p");
  new1.innerText = result;
  result2.appendChild(new1);
}

document
  .getElementById("triangle-button")
  .addEventListener("click", function () {
    let firstValue = inputField("triangle-input-01");
    let secondValue = inputField("triangle-input-02");
    const triangleResult = 0.5 * firstValue * secondValue;
    if (isNaN(triangleResult)) {
      return;
    } else {
      const triangleResult2 =
        "Triangle   " + triangleResult.toFixed(2) + "cm(square)";
      resultTriangle("result-show", triangleResult2);
    }
  });
document.getElementById("rectangle-btn").addEventListener("click", function () {
  let firstValue = inputField("rectangle-input-01");
  let secondValue = inputField("rectangle-input-02");
  const rectangleResult = firstValue * secondValue;
  if (isNaN(rectangleResult)) {
    return;
  } else {
    const rectangleResult2 =
      "Rectangle  " + rectangleResult.toFixed(2) + "cm(square)";
    resultTriangle("result-show", rectangleResult2);
  }
});
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    let firstValue = inputField("parallelogram-input-01");
    let secondValue = inputField("parallelogram-input-02");
    const parallelogramResult = firstValue * secondValue;
    if (isNaN(parallelogramResult)) {
      return;
    } else {
      const parallelogramResult2 =
        "Parallelogram  " + parallelogramResult.toFixed(2) + "cm(square)";
      resultTriangle("result-show", parallelogramResult2);
    }
  });
document.getElementById("rhombus-btn").addEventListener("click", function () {
  let firstValue = inputField("rhombus-input-01");
  let secondValue = inputField("rhombus-input-02");
  const rhombusResult = 0.5 * firstValue * secondValue;
  if (isNaN(rhombusResult)) {
    return;
  } else {
    const rhombusResult2 =
      "Rhombus  " + rhombusResult.toFixed(2) + "cm(square)";
    resultTriangle("result-show", rhombusResult2);
  }
});
document.getElementById("pentagon-btn").addEventListener("click", function () {
  let firstValue = inputField("pentagon-input-01");
  let secondValue = inputField("pentagon-input-02");
  const pentagonResult = 0.5 * firstValue * secondValue;
  if (isNaN(pentagonResult)) {
    return;
  } else {
    const pentagonResult2 =
      "Pentagon  " + pentagonResult.toFixed(2) + "cm(square)";
    resultTriangle("result-show", pentagonResult2);
  }
});
document.getElementById("pentagon-btn").addEventListener("click", function () {
  let firstValue = inputField("pentagon-input-01");
  let secondValue = inputField("pentagon-input-02");
  const pentagonResult = 0.5 * firstValue * secondValue;
  if (isNaN(pentagonResult)) {
    return;
  } else {
    const pentagonResult2 =
      "Pentagon  " + pentagonResult.toFixed(2) + "cm(square)";
    resultTriangle("result-show", pentagonResult2);
  }
});
