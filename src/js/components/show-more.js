// show more text
const btnShowMore = document.querySelectorAll(".show-more");

btnShowMore.forEach((btn) => {
  btn.addEventListener("click", () => {
    const activeText = btn.previousElementSibling;
    const btnText = btn.querySelector(".show-more__title");
    const plusTextBtn = btn.querySelector("span");

    activeText.classList.toggle("show-more--active");

    if (!activeText.classList.contains("show-more--active")) {
      btnText.textContent = "Load more";
      plusTextBtn.textContent = "+";
    } else {
      btnText.textContent = "Load less";
      plusTextBtn.textContent = "-";
    }
  });
});

// show more bonuses
const btnShowMoreBonus = document.querySelector(".bonus__show-more--active");
const bonuses = document.querySelectorAll(".bonuses-plate__item");

bonuses.forEach((bonus) => {
  btnShowMoreBonus.addEventListener("click", () => {
    bonus.classList.toggle("bonus--more");

    if (!bonus.classList.contains("bonus--more")) {
      btnShowMoreBonus.textContent = "Show more";
    } else {
      btnShowMoreBonus.textContent = "Show less";
    }
  });
});
