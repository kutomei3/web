// Function to add a row
function addRow(id, fileName, about, level) {
    const tableBody = document.getElementById("table-body");
  
    // Create table row
    const row = document.createElement("tr");
  
    // Row content
    row.innerHTML = `
      <td>${id}</td>
      <td>
        <div class="file-info">
          <span class="file-name">${fileName}</span>
        </div>
      </td>
      <td><span class="file-tag">${about}</span></td>
      <td><button class="skull-button">${level}</button></td>
    `;
  
    // Append to the table body
    tableBody.appendChild(row);
  }
  
  // Example usage
  addRow(1, "Book", "พีชคณิต", "🌙🌙");
  addRow(2, "Cart", "เรขาคณิต", "🌙");
  addRow(3, "Danger", "พีชคณิต", "🌙🌙🌙");
  addRow(4, "Dreamer", "พีชคณิต", "🌙");
  addRow(5, "Take Me Home", "พีชคณิต", "🌙🌙");
  addRow(6, "Tour CP", "พีชคณิต", "🌙🌙");
  addRow(7, "omakase", "พีชคณิต", "🌙");
  
