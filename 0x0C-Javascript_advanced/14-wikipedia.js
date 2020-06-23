function createElement(data) {
  let paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode(data));
  document.head.append(paragraph);
}

function queryWikipedia(callback) {
  let req = new XMLHttpRequest();
  req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow");
  req.responseText = () => callback()
}

queryWikipedia(createElement());