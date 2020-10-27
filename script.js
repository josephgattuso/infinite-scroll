console.log('hello world!');

// require('dotenv').config();

// Unsplash API
const count = 5;
const apiKey = process.env.API_KEY;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch error here
  }
}

// On Load
getPhotos();
