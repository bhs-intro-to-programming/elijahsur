////////////////////////////////////////////////////////////////////////////////
// Add a single paragraph dynamically

// Create a paragraph element
const p = document.createElement('p');

// Create the text of the paragraph.
const text = document.createTextNode('This paragraph is created dynamically.')

// Add the text to the paragraph.
p.append(text);

// And add the new paragraph to the body of the document.
document.querySelector('body').append(p);

////////////////////////////////////////////////////////////////////////////////
// Add ten paragraphs.

// Do the same thing as before but in a loop
for (let i = 0; i < 10; i++) {
  const p = document.createElement('p');
  p.append(document.createTextNode(`Counting ${i}.`));
  document.querySelector('body').append(p);
}

////////////////////////////////////////////////////////////////////////////////
// This function is an event handler. (Similar to the functions we used with
// registerOnclick in some of our old environments.

const recordClick = (e) => {
  // Create a paragraph element.
  const p = document.createElement('p');

  // Create the text of the paragrph, using the event object we were passed
  const text = document.createTextNode(`Clicked on “${e.target.parentNode.innerText}”`);

  // Add the text to the paragraph
  p.append(text);

  // Add the paragraph to the body of the document
  document.getElementById("clicks").append(p);
};

////////////////////////////////////////////////////////////////////////////////
// Add something to every existing paragraph.

document.querySelectorAll('p').forEach(p => {

  // Create a bold element.
  const b = document.createElement('b');

  // Create some text and add it to the bold element.
  b.append(document.createTextNode('Click me!'));

  // Register the recordClick function to handle when the bold element is
  // clicked.
  b.onclick = recordClick;

  // Append some text to the current paragraph.
  p.append(document.createTextNode(' '));

  // And finally append the bold element to the paragraph.
  p.append(b);
});
