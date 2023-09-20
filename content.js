const clownCheck = () => {
  let comments = document.getElementsByClassName("author");
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    let flair = comment.previousElementSibling;
    if (!flair || flair.classList.contains("flair") || flair.classList.contains("customflair")) {
      // continue;
    } else {
      let element = document.createElement("span");
      element.textContent = '🤡'
      element.classList.add("customflair");
      element.style = 'font-size: 1.5em; margin-left: 0.5em; margin-right 0.5em;'
      comment.parentNode.insertBefore(element, comment);
    }
  }
}


const addClownCheckToEventListeners = () => {
  let buttons = document.getElementsByClassName("button");
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", () => {
      setTimeout(() => {
        clownCheck();
      }, 250)
    });
  }
}


clownCheck();
addClownCheckToEventListeners();