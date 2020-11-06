# [Infinite Scroll](https://josephgattuso.github.io/infinite-scroll)

> Simple photo gallery app that fetches images from the Unsplash API. Built using plain JavaScript.

![GitHub](https://img.shields.io/github/license/josephgattuso/infinite-scroll?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/josephgattuso/infinite-scroll?style=flat-square)
![Pull Requests](https://img.shields.io/badge/pull_requests-welcome-blue?style=flat-square)
![Twitter Follow](https://img.shields.io/twitter/follow/joeetuso?style=flat-square)

## Goals for this project

- Build an infinite scrolling feature
- Learn how to interact with 3rd Party APIs
- Practice with responsive layouts using media queries

<!-- ## 🚀 Quick start -->

## 📖 User Stories

- [x] Add a loader SVG
- [x] Add image placeholders
- [x] Center elements on page
- [x] Add responsive layout
- [x] Fetch data from API
- [x] Display data with JS
- [x] Infinite scrolling with JS

## 💻 Code Review

So far we cleaned up the code this way:

```js
// Unsplash API
let count = 5;
const apiKey = "jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek";
let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 30;
    apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
  }
}
```

How can we clean up the code even more, to make the code more readable and understandable? There are many solutions to this, but here is one approach:

```js
zlet isInitialLoad = true // NEW LINE ****

// Unsplash API
let initialCount = 5;
const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${initialCount}`;

// NEW Block****
function updateAPIURLWithNewCount (picCount) {
  apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${picCount}`;
}
// NEW Block*****


// Check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}


...

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
    if (isInitialLoad) { // NEW LINE ****
      updateAPIURLWithNewCount(30) // NEW LINE ****
      isInitialLoad = false // NEW LINE ****
    } // NEW LINE ****
  } catch (error) {
    // Catch Error Here
  }
}
```

## 🔗 Resources

- [Loading.io](https://loading.io) - Loading Animation Generator (free & ££)
- [Google Fonts](https://fonts.google.com)
- [Unsplash Images](https://unsplash.com/) - Hero images
- [Unsplash API Documentation](https://unsplash.com/documentation#creating-a-developer-account)
- [Infinite Scroll: Let’s Get To The Bottom Of This](https://www.smashingmagazine.com/2013/05/infinite-scrolling-lets-get-to-the-bottom-of-this)
- [For Each vs For Loops Article](https://alligator.io/js/foreach-vs-for-loops)
- [W3Schools - For Each](https://www.w3schools.com/jsref/jsref_foreach.asp)
- [W3Schools - DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp)
- [W3Schools - On Load Event](https://www.w3schools.com/jsref/event_onload.asp)
