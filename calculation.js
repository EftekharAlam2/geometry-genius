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

document
  .getElementById("triangle-button")
  .addEventListener("click", function () {
    const firstValue = inputField("triangle-input-01");
    const secondValue = inputField("triangle-input-02");
    const triangleResult = 0.5 * firstValue * secondValue;
    if (isNaN(triangleResult)) {
      return;
    } else {
      const result2 = document.getElementById("result-show");
      const triangleResult2 = "Triangle " + triangleResult.toFixed(2);
      result2.innerText = triangleResult2;
    }
  });
