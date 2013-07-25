// Traverse the DOM!

function traverse_dom(search_term) {
  // I want to traverse all the div
  // elements in the DOM and find one whose
  // innerText is equal to our search_team
  var elements = document.getElementsByTagName('div');
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerText === search_term) {
      return elements[i];
    }
  }
  return null;
}