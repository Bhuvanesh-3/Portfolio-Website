const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");

function generateSignature() {
  const name = document.getElementById("nameInput").value;
  const color = document.getElementById("colorPicker").value;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "48px cursive";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 15);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function downloadSignature() {
  const link = document.createElement("a");
  link.download = "signature.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}