// see works.js for list of works
const randomWork = works[Math.floor(Math.random() * works.length)];
const work = document.querySelector(".work");
const workImage = new Image();
const workDescription = document.querySelector(".work .description");
workImage.src = `images/works/${randomWork.filename}`;
workImage.alt = workDescription.innerText = randomWork.title;
work.appendChild(workImage);

const contact = document.querySelector(".contact");
contact.addEventListener("mouseenter", (event) => {
  const img = event.currentTarget.querySelector("img");
  img.src = img.dataset.hover;
});
contact.addEventListener("mouseleave", (event) => {
  const img = event.currentTarget.querySelector("img");
  img.src = img.dataset.src;
});

setTimeout(() => {
  alert("So... what are you waiting for? Reload the page to see more works!");
}, 60000);
