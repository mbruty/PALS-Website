import getData from "./getData.js";

$(document).ready(async () => {
  let data = await getData();
  let htmlString = "";
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].title);
    htmlString += `<div class="card text-white bg-secondary mb-3" >
                    <div class="card-header">${data[i].title}</div>
                    <div class="card-body">
                    <button type="button" class="btn btn-primary">View repository</button>
                      <p class="card-text">${data[i].description}<p>
                    </div>
                    </div>`;
  }
  $("#main").html(htmlString);
});
