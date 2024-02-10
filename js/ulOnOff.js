// displayCorrespondingUl 함수: 선택된 라디오 버튼에 따라 해당하는 ul 태그를 표시하는 함수입니다.
function displayCorrespondingUl() {
  // 모든 .options-list 클래스를 가진 ul 태그를 숨깁니다.
  document.querySelectorAll(".options-list").forEach(function (ul) {
    ul.style.display = "none";
  });

  // 현재 선택된 라디오 버튼을 찾습니다.
  const selectedOption = document.querySelector(
    'input[name="requestCategory"]:checked'
  );
  // 선택된 라디오 버튼이 있을 경우 해당하는 ul 태그의 display 속성을 설정합니다.
  if (selectedOption) {
    const ulElement = document.getElementById(
      "list" + selectedOption.value.charAt(selectedOption.value.length - 1)
    );

    // 선택된 옵션이 option3인 경우 display를 flex로, 그 외는 grid로 설정합니다.
    if (selectedOption.value === "option3") {
      ulElement.style.display = "flex";
    } else {
      ulElement.style.display = "grid";
    }
  }
}

// 페이지 로드 시 displayCorrespondingUl 함수를 호출하여 초기 상태를 설정합니다.
displayCorrespondingUl();

// 모든 requestCategory 이름을 가진 라디오 버튼에 대해 이벤트 리스너를 추가합니다.
// 라디오 버튼의 선택이 변경될 때마다 displayCorrespondingUl 함수를 호출합니다.
document
  .querySelectorAll('input[name="requestCategory"]')
  .forEach(function (radio) {
    radio.addEventListener("change", displayCorrespondingUl);
  });

// selectOption이라는 ID를 가진 요소가 있다면, 해당 요소에 대해 변경 이벤트 리스너를 추가합니다.
// 이 부분은 코드에서 selectOption이라는 ID를 사용하는 요소가 실제로 존재하는지 확인해야 할 필요가 있습니다.
const selectOptionElement = document.getElementById("selectOption");
if (selectOptionElement) {
  selectOptionElement.addEventListener("change", displayCorrespondingUl);
}
