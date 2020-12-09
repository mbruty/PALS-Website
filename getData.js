export default function getData() {
  return new Promise((resolve, reject) => {
    // GET Request for data.csv
    fetch("http://127.0.0.1:5500/data.csv")
      // Convert the data to text
      .then((response) => response.text())
      // Process the data
      .then((data) => resolve(textToObject(data)));
  });
}

function textToObject(data) {
  // Split the data in to lines
  const rows = data.split("\n");
  const result = [];
  for (let i = 0; i < rows.length; i++) {
    // Add the row to the array
    result.push(parseRow(rows[i]));
  }
  return result;
}

function parseRow(row) {
  // Split the row on commas
  const data = row.split(",");
  // Return a new object with the data
  return {
    title: data[0],
    repo: data[1],
    description: data[2],
  };
}