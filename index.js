import data from "./data.js";

$(document).ready(() => {
  loadData();
});

function loadData() {
  let html = "";
  data.forEach((item) => {
    html += `
          <tr>
            <td>${item.name}</td>
            <td>${item.speed}</td>
          </tr>`;
  });
  console.log(html);
  $("#networks-speed-table").html(html);
}
