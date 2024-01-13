const express = require("express");
const app = express();

const data = 
  {
    professionalName: "Ryan Singleton",
    base64Image: "/9j/4AAQSkZJRgABAQAASABIAAD/4QHkRXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAzAAAAcgEyAAIAAAAUAAAApodpAAQAAAABAAAAugAAAAAAAABIAAAAAQAAAEgAAAABQWRvYmUgUGhvdG9zaG9wIExpZ2h0cm9vbSBDbGFzc2ljIDExLjEgKE1hY2ludG9zaCkAADIwMjI6MDQ6MDEgMDk6NTg6MDgAABCQAAAHAAAABDAyMjGQAwACAAAAFAAAAYCQBAACAAAAFAAAAZSQEAACAAAABwAAAaiQEQACAAAABwAAAbCQEgACAAAABwAAAbiRAQAHAAAABAECAwCSkAACAAAABDA1OACSkQACAAAABDA1OACSkgACAAAABDA1OACgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAAZCgAwAEAAAAAQAAAfSkBgADAAAAAQAAAACkNAACAAAAHAAAAcAAAAAAMjAyMjowNDowMSAwOTo1ODowOAAyMDIyOjA0OjAxIDA5OjU4OjA4AC0wNTowMAAALTA1OjAwAAAtMDU6MDAAAEVGNzAtMjAwbW0gZi8yLjhMIElTIElJIFVTTQD/4QtqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOmF1eD0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC9hdXgvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgYXV4OlNlcmlhbE51bWJlcj0iMDMyMDIyMDA2ODc2IiBhdXg6TGVuc1NlcmlhbE51bWJlcj0iMDAwMDAwODA2MCIgYXV4OkZsYXNoQ29tcGVuc2F0aW9uPSIwLzEiIGF1eDpMZW5zSW5mbz0iNzAvMSAyMDAvMSAwLzAgMC8wIiBhdXg6TGVucz0iRUY3MC0yMDBtbSBmLzIuOEwgSVMgSUkgVVNNIiBhdXg6SW1hZ2VOdW1iZXI9IjAiIGF1eDpMZW5zSUQ9IjI1MSIgYXV4OkZpcm13YXJlPSIxLjAuMiIgeG1wOlJhdGluZz0iNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgTGlnaHRyb29tIENsYXNzaWMgMTEuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDQtMDFUMDk6NTg6MDguMDU4IiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNC0wMVQwOTo1ODowOC4wNTgiIHBob3Rvc2hvcDpEYXRlQ3JlYXRlZD0iMjAyMi0wNC0wMVQwOTo1ODowOC4wNTgtMDU6MDAiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+AP/tAHxQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAARBwBWgADGyVHHAIAAAIAAhwCPwAGMDk1ODA4HAI+AAgyMDIyMDQwMRwCNwAIMjAyMjA0MDEcAjwACzA5NTgwOC0wNTAwOEJJTQQlAAAAAAAQRNUdOUBKSYeQ1g76hUzpr//AABEIAfQBkAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQID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",
    nameLink: {
      firstName: "Ryan ",
      url: "https://www.google.com",
    },
    primaryDescription: "is a full stack web developer",
    workDescription1: "He specializes in React, Node, and Express",
    workDescription2: "He also has experience with MongoDB and SQL",
    linkTitleText: "Check out his work below",
    linkedInLink: {
      text: "LinkedIn Link",
      link: "https://www.linkedin.com/in/ryansingleton3/",
    },
    githubLink: {
      text: "GitHub Link",
      link: "https://github.com/ryansingleton-3",
    },
  }

module.exports = data;

// helpful link for converting image to base64: https://elmah.io/tools/base64-image-encoder/
// async function apiFetch(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// const getData = async () => {
//   const data = await apiFetch('http://localhost:8080/professional');
//   displayAllData(data);
// };

// function displayAllData(data) {
//   displayProfessionalName(data.professionalName);
//   displayImage(data.base64Image);
//   displayPrimaryDescription(data);
//   displayWorkDescription(data);
//   displayLinkTitleText(data);
//   displayLinkedInLink(data);
//   displayGitHubLink(data);
// }

// function displayProfessionalName(n) {
//   let professionalName = document.getElementById('professionalName');
//   professionalName.innerHTML = n;
// }

// function displayImage(img) {
//   let image = document.getElementById('professionalImage');
//   image.src = `data:image/png;base64, ${img}`;
// }
// function displayPrimaryDescription(data) {
//   let nameLink = document.getElementById('nameLink');
//   nameLink.innerHTML = data.nameLink.firstName;
//   nameLink.href = data.nameLink.url;
//   let primaryDescription = document.getElementById('primaryDescription');
//   primaryDescription.innerHTML = data.primaryDescription;
// }

// function displayWorkDescription(data) {
//   let workDescription1 = document.getElementById('workDescription1');
//   workDescription1.innerHTML = data.workDescription1;
//   let workDescription2 = document.getElementById('workDescription2');
//   workDescription2.innerHTML = data.workDescription2;
// }

// function displayLinkTitleText(data) {
//   let linkTitle = document.getElementById('linkTitleText');
//   linkTitle.innerHTML = data.linkTitleText;
// }

// function displayLinkedInLink(data) {
//   let linkedInLink = document.getElementById('linkedInLink');
//   linkedInLink.innerHTML = data.linkedInLink.text;
//   linkedInLink.href = data.linkedInLink.link;
// }

// function displayGitHubLink(data) {
//   let githubLink = document.getElementById('githubLink');
//   githubLink.innerHTML = data.githubLink.text;
//   githubLink.href = data.githubLink.link;
// }

// getData();