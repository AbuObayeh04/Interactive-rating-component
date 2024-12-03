const btn = document.querySelector("#button");
const liS = document.querySelectorAll("li");
const container = document.querySelector(".container");
let number = "";

function addText(element) {
  number = "";
  number = element.innerText;
}

liS.forEach((li) => {
  li.addEventListener("click", function () {
    liS.forEach((li) => {
      li.classList.remove("selected");
    });

    li.classList.add("selected");

    addText(li);
  });
});

btn.onclick = function () {
  container.innerHTML = "";

  const svg = document.createElement("img");
  svg.src = "images/illustration-thank-you.svg";
  svg.className = "thx-icon";
  container.append(svg);

  const selectedText = document.createElement("p");
  selectedText.className = `select-p`;
  selectedText.innerText = `You selected ${number} out of 5`;
  container.append(selectedText);

  const text = document.createElement("p");
  text.innerText = "Thank you!";
  text.className = "thx";
  container.append(text);

  const paragraph = document.createElement("p");
  paragraph.innerText =
    "  We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
  paragraph.className = "paragraph";

  container.append(paragraph);
};
