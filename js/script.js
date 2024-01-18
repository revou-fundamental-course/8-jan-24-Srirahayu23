function calculateSquare(event) {
  event.preventDefault();

  const sideLength = parseFloat(document.getElementById("sideLength").value);

  if (!isNaN(sideLength)) {
    const area = sideLength * sideLength;
    const perimeter = 4 * sideLength;

    document.getElementById("result").innerHTML = `
    <label>Luas: ${area}</label>
    <label>Keliling: ${perimeter}</label>
    `;
  } else {
    document.getElementById("result").innerHTML =
      "<p>Masukkan panjang sisi yang valid.</p>";
  }
}
