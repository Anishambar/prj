var brcode;
const sideBar = document.querySelector("aside");

let noteSize = document.getElementById("notes");

noteSize.style.height = noteSize.scrollHeight + "px";
noteSize.style.overflowY = "hidden";
noteSize.addEventListener("input", adjust);
function adjust(){
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + "px";
}

function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  window.alert(`Code matched = ${decodedText}`, decodedResult);
  brcode = decodedResult.toString();
}

function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  window.alert(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox:{width: 250, height: 250} });
html5QrcodeScanner.render(onScanSuccess, onScanFailure);



Products.forEach(product => {
  const tr = document.createElement('tr');
  const trContent = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                `
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
})
