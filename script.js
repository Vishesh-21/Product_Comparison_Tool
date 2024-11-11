let products = ["Features"];
let features = [];

function addProduct() {
  const productName = document.getElementById("productName").value.trim();
  if (!productName) return;

  products.push(productName);
  updateTable();
  document.getElementById("productName").value = "";
}

function addFeature() {
  const featureName = document.getElementById("featureName").value.trim();
  if (!featureName) return;

  features.push(featureName);
  updateTable();
  document.getElementById("featureName").value = "";
}

function updateTable() {
  const productHeader = document.getElementById("productHeader");
  const tableBody = document.getElementById("tableBody");

  productHeader.innerHTML = "";
  products.forEach((product) => {
    const th = document.createElement("th");
    th.textContent = product;
    productHeader.appendChild(th);
  });

  tableBody.innerHTML = "";
  features.forEach((feature, featureIndex) => {
    const row = document.createElement("tr");

    const featureCell = document.createElement("td");
    featureCell.className = "feature-title";
    featureCell.textContent = feature;
    row.appendChild(featureCell);

    products.forEach((val, index) => {
      if (index === 0) {
      } else {
        const inputCell = document.createElement("td");
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Enter ${feature}`;
        input.className = "feature-input";
        inputCell.appendChild(input);
        row.appendChild(inputCell);
      }
    });

    tableBody.appendChild(row);
  });
}
