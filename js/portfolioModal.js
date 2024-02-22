document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".view-more").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      // data-portfolio-id 속성을 사용하여 고유 ID를 가져옵니다.
      var portfolioId = this.getAttribute("data-portfolio-id");
      openModal(portfolioId);
    });
  });

  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("portfolioModal").style.display = "none";
  });
});

function openModal(portfolioId) {
  // 이미지 세트를 portfolioId 기반으로 정의합니다.
  var imageSets = {
    webDesign1: [
      "/images/contactus_banner.webp",
      "/images/dark-prism-textured-abstract-bac.webp",
      "/images/istockphoto-1365412652-612x612.jpg",
      "/images/millennial-group-young-businesspeople-asia-businessman-businesswoman-celebrate-giving-five-after-dealing-feeling-happy-signing-contract-agreement-meeting-room-small-modern-office.jpg",
    ],
    irDeck1: [
      "/images/team_logo.png",
      "/images/business_mark.png",
      "/images/contactus_banner.webp",
      "/images/music-template-design-of-web-des.webp",
    ],
    strategyConsulting1: [
      "/images/contact_us.png",
      "/images/dark-prism-textured-abstract-bac.webp",
      "/images/istockphoto-1365412652-612x612.jpg",
      "/images/page_04.webp",
    ],
  };

  var images = imageSets[portfolioId] || []; // 해당 ID가 없는 경우 빈 배열을 사용
  var modalImagesContainer = document.querySelector(".modal-images");
  modalImagesContainer.innerHTML = ""; // 이전 이미지를 지웁니다.

  images.forEach((imageSrc) => {
    let img = document.createElement("img");
    img.src = imageSrc;
    modalImagesContainer.appendChild(img);
  });

  document.getElementById("portfolioModal").style.display = "block";
}
