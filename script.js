const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach(card => {
  const buttons = card.querySelectorAll(".flip-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
});
