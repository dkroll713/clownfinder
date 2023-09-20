// const clownCheck = () => {
let comments = document.getElementsByClassName("author");
console.log('Comments:', comments)
for (let i = 0; i < comments.length; i++) {
  let comment = comments[i];
  console.log('Comment:', comment.innerText)
  let flair = comment.previousElementSibling;
  if (flair && flair.classList.contains("flair")) {
    console.log('User has flair');
  } else {
    console.log('Lol no flair');
    let element = document.createElement("span");
    element.textContent = '🤡'
    element.style = 'font-size: 1.5em; margin-left: 0.5em; margin-right 0.5em;'
    comment.parentNode.insertBefore(element, comment);
  }
}
// }

// document.addEventListener('DOMContentLoaded', () => clownCheck());

// 🤡