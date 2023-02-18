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
      return alert("Please Enter the correct value");
    } else {
      return finalValue;
    }
  }
}

function resultTriangle(id1, result, name) {
  const result2 = document.getElementById(id1);
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td class="pb-10"></td>
  <td>${serial}&emsp;</td>
  <td>${name}&emsp;</td>
  <td>${result}cm<sup>2</sup></td>
  <td><button
  class="border-0 rounded-md bg-blue-600 text-white p-1 px-2 ml-10"
>
  Convert to m<sup>2</sup>
</button>&emsp;</td>
  `;
  result2.appendChild(tr);
}

const color1 = document.getElementsByClassName("background-hover");
for (const color2 of color1) {
  color2.addEventListener("mouseover", function () {
    let color = "#";
    color += Math.random().toString(16).slice(2, 8);
    color2.style.backgroundColor = color;
  });
}

let serial = 0;
document
  .getElementById("triangle-button")
  .addEventListener("click", function () {
    serial += 1;
    let firstValue = inputField("triangle-input-01");
    let secondValue = inputField("triangle-input-02");
    const triangleResult = 0.5 * firstValue * secondValue;
    if (isNaN(triangleResult)) {
      return;
    } else {
      let name = "Triangle";
      resultTriangle("result-show", triangleResult, name);
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
document.getElementById("ellipse-btn").addEventListener("click", function () {
  let firstValue = inputField("ellipse-input-01");
  let secondValue = inputField("ellipse-input-02");
  const ellipseResult = 3.14 * firstValue * secondValue;
  if (isNaN(ellipseResult)) {
    return;
  } else {
    const ellipseResult2 =
      "Ellipse  " + ellipseResult.toFixed(2) + "cm(square)";
    resultTriangle("result-show", ellipseResult2);
  }
});
