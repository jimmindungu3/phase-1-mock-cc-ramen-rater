// write your code here

document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let id = 1;
      data.forEach((item) => {
        const ramenMenu = document.querySelector("#ramen-menu");
        // console.log(ramenMenu)
        const img = document.createElement("img");
        img.className = id;
        id++;
        img.src = item.image;
        ramenMenu.appendChild(img);

        img.addEventListener("click", function () {
          const commentDisplay = document.querySelector("#comment-display");
          commentDisplay.textContent = item.comment;

          const rating = document.querySelector("#rating-display");
          rating.textContent = item.rating;

          const bigImage = document.querySelector(".detail-image");
          bigImage.src = item.image;

          const name = document.querySelector(".name");
          name.textContent = item.name;

          const restaurantName = document.querySelector(".restaurant");
          restaurantName.textContent = item.restaurant;
        });
      });
    });
});

let newName;
let newRestaurant;
let newRating;
let newComment;
let newImgSrc;

const form = document.querySelector("#new-ramen");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // newName = document.querySelector("#new-name").value;
    // newRestaurant = document.querySelector("#new-restaurant").value;

    const newImg = document.createElement("img");
    newImg.id = "new-image"
    const newImgSrc = document.querySelector("#new-image").value;
    newImg.src = newImgSrc;
    // newRating = document.querySelector("#new-rating").value;
    // newComment = document.querySelector("#new-comment").value;

    const ramenMenu = document.querySelector("#ramen-menu");
    ramenMenu.appendChild(newImg);

    form.reset();

})
  
// const newImage = document.querySelector("#new-image");
// newImage.addEventListener("click", handleClick)
//  function handleClick() {
//     const NewBigImage = document.querySelector(".detail-image");
//     NewBigImage.src = newImgSrc;

// }