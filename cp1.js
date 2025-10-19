const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const feedback = document.getElementById("feedback")
const count = document.getElementById("count")
const submitBtn = document.getElementById("submit-btn")
const feedbackDisplay = document.getElementById("feedback-display")

feedback.addEventListener("input", () => {
  count.textContent = feedback.value.length
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
    if (!username.value || !email.value || !feedback.value) {
      alert("Fill out the whole form pal");
      return;
    }
    else {
      alert("Thank you, your submission has been recorded")
    };

const entry = document.createElement("div")
entry.textContent = `${username.value} (${email.value}): ${feedback.value}`;
feedbackDisplay.appendChild(entry)

form.reset();
  });

  form.addEventListener("click", (e) => {
    if (e.target.matches("input, textarea")) {
      console.log("Interacting with:", e.target.id);
      e.stopPropagation();

    }});
