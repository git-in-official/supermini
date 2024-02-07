function displayCorrespondingUl() {
  // ul태그 감추기
  document.querySelectorAll(".options-list").forEach(function (ul) {
    ul.style.display = "none";
  });

  // select option에 맞는 ul태그 display block처리
  const selectedOption = document.getElementById("selectOption").value;
  if (selectedOption) {
    document.getElementById(
      "list" + selectedOption.charAt(selectedOption.length - 1)
    ).style.display = "grid";
  }
}

displayCorrespondingUl();

document
  .getElementById("selectOption")
  .addEventListener("change", displayCorrespondingUl);
