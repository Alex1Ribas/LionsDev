//! To make it easier, this program doesn't need to ask for user input.
// Let's create an object to store information about your favorite painting.
// This object should save the painting's name, the painter's name,
//! the year it was made, and a short phrase
//! with its meaning, so it should have the following properties:
//! paintingName, ArtistName, year, meaning.

// how to declare an object
const painting = {
author: 'Vincent van Gogh',
paintingName: 'The Starry Night',
year: 1889,
meaning: "Represents the artist's internal struggle with his mental health and his search for beauty and hope." }

// how to access the object's properties
console.log(`My favorite painting is "${painting.paintingName}" made by ${painting.author} in ${painting.year} and means "${painting.meaning}".`);