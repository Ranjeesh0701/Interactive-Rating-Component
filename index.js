const ratings = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit-button");
const thankYouComponent = document.querySelector(".thank-you-component");
const ratingComponent = document.querySelector(".component");
const selectedRatingComponent = document.querySelector(".selectedRating");
var selectedRating = null;

const handleRating = (event) => {
    selectedRating = event.target.dataset.rating;
    var selectedElement = document.querySelector(`[data-rating="${event.target.dataset.rating}"]`);
    ratings.forEach(rating => {
        if(rating != selectedElement) {
            rating.classList.remove('selected');
        }
        else {
            rating.classList.add('selected');
        }
    })
};

ratings.forEach((rating) =>
  rating.addEventListener("click", (e) => {
    handleRating(e);
  })
);

submitBtn.addEventListener('click', () => {
    if(selectedRating) {
        if(thankYouComponent.style.display === "block") {
            selectedRating = null;
            thankYouComponent.style.display = "none";
            ratingComponent.style.display = "block";
        }
        else {
            selectedRatingComponent.innerHTML = selectedRating;
            thankYouComponent.style.display = "block";
            ratingComponent.style.display = "none";
        }
    }
})
