# [Infinite Scroll](https://josephgattuso.github.io/infinite-scroll)

> Simple photo gallery app that fetches images from the Unsplash API. Built using plain JavaScript.

![GitHub](https://img.shields.io/github/license/josephgattuso/infinite-scroll?color=orange&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/josephgattuso/infinite-scroll?style=flat-square)
![Pull Requests](https://img.shields.io/badge/pull_requests-welcome-blue?style=flat-square)
![Twitter Follow](https://img.shields.io/twitter/follow/joeetuso?style=flat-square)

## Goals for this project

- Build an infinite scrolling feature
- Learn how to interact with 3rd Party APIs
- Practice with responsive layouts using media queries

## 🚀 Quick start

1. Go to the [Unsplash Developer Docs](https://unsplash.com/documentation)
2. Either create a new account (it's free) or sign in to an existing account
3. Click `New Application`, enter in a name and description for the application and click "Create Application
4. Once you enter your info, you will be taken to your app's page. Scroll down until you see "Keys" and your key will be here. Copy the `Access Key`.
5. Go to the project folder and open the `app.js` file
6. Replace the value of the "apiKey" variable with your api key wraped in quotes and save
7. Run the project and see it work!

## 📖 User Stories

- [x] Add a loader SVG
- [x] Add image placeholders
- [x] Center elements on page
- [x] Add responsive layout
- [x] Fetch data from API
- [x] Display data with JS
- [x] Infinite scrolling with JS

## 💻 Code Review

So far we cleaned up the code like so

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

How can we clean up the code to make it more readable and understandable?
There are many solutions to this, but below is one approach

```js
let isInitialLoad = true;
let initialCount = 5;

// Unsplash API
const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${initialCount}`;

function updateAPIURLWithNewCount (picCount) {
  apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${picCount}`;
}

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
    if (isInitialLoad) {
      updateAPIURLWithNewCount(30)
      isInitialLoad = false
    }
  } catch (error) {
    // Catch error here
  }
}
```

## 🔗 Resources

- [For Each vs For Loops Article](https://alligator.io/js/foreach-vs-for-loops)
- [Google Fonts](https://fonts.google.com)
- [Infinite Scroll: Let’s Get To The Bottom Of This](https://www.smashingmagazine.com/2013/05/infinite-scrolling-lets-get-to-the-bottom-of-this)
- [Loading.io](https://loading.io) - Loading Animation Generator (free & ££)
- [Unsplash Images](https://unsplash.com/) - Hero images
- [W3Schools - DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp)
- [W3Schools - For Each](https://www.w3schools.com/jsref/jsref_foreach.asp)
- [W3Schools - On Load Event](https://www.w3schools.com/jsref/event_onload.asp)
