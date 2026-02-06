document.addEventListener("DOMContentLoaded", function () {


  /* ========= 마벨 영역 ========= */
  const marvelButton = document.getElementById("marvelButton");
  const outputMarvel = document.getElementById("output-marvel");
  const copyMarvel = document.getElementById("copyMarvel");

  /* ========= 웹툰 영역 ========= */
  const webtoonButton = document.getElementById("webtoonButton");
  const outputWebtoon = document.getElementById("output-webtoon");
  const copyWebtoon = document.getElementById("copyWebtoon");

  // 초기 상태
  outputMarvel.style.display = "none";
  copyMarvel.style.display = "none";
  outputWebtoon.style.display = "none";
  copyWebtoon.style.display = "none";

  /* ========= 마벨 버튼 ========= */
  marvelButton.onclick = function () {
    outputMarvel.textContent =
`[Marvel 코믹스]
■ 역할: 전문 프레젠테이션 디자이너
■ 스타일: 팝 코믹스
■ 카테고리: 카툰

━━━━━━━━━━━━━━━━━━━━━━

[컬러 시스템]
• 배경: #FFF500
• 텍스트: #000000
• 강조: #FF0000
• 폰트: Comic Neue

[무드 & 레퍼런스]
Marvel 코믹스, 만화책

[디자인 특성]
• 하프톤 패턴
• 말풍선
• 액션 라인
• 원색+검정

[텍스처]
Ben-Day dots

[레이아웃 가이드]
대각선 구도, 폭발 BOOM!

━━━━━━━━━━━━━━━━━━━━━━

위 가이드를 바탕으로 고품질 슬라이드를 생성해주세요.`;

outputMarvel.style.display = "block";
copyMarvel.style.display = "inline-block";

outputWebtoon.style.display = "none";
copyWebtoon.style.display = "none";
  };

 copyMarvel.onclick = function () {
    navigator.clipboard.writeText(outputMarvel.textContent);
    copyMarvel.textContent = "✅ 복사됨!";
    setTimeout(() => {
      copyMarvel.textContent = "📋 복사하기";}, 1500);
  };


/* ======================
   네이버 웹툰 버튼
====================== */
  webtoonButton.onclick = function () {
      outputWebtoon.textContent =
`[네이버 웹툰]

■ 역할: 전문 프레젠테이션 디자이너
■ 스타일: 웹툰 스타일
■ 카테고리: 카툰

━━━━━━━━━━━━━━━━━━━━━━

[컬러 시스템]
• 배경: #FFFFFF
• 텍스트: #000000
• 강조: #FF5722
• 폰트: Nanum Gothic

[무드 & 레퍼런스]
네이버 웹툰, 디지털 만화

[디자인 특성]
• 깔끔한 선
• 풀컬러
• 스크롤 최적화
• 현대적 만화

[텍스처]
없음

[레이아웃 가이드]
세로 스크롤 구도, 말풍선 배치

━━━━━━━━━━━━━━━━━━━━━━

위 가이드를 바탕으로 고품질 슬라이드를 생성해주세요.`;

  outputWebtoon.style.display = "block";
  copyWebtoon.style.display = "inline-block";
    
  outputMarvel.style.display = "none";
  copyMarvel.style.display = "none";
  };

  copyWebtoon.onclick = function () {
    navigator.clipboard.writeText(outputWebtoon.textContent);
    copyWebtoon.textContent = "✅ 복사됨!"; 
    setTimeout(() => copyWebtoon.textContent = "📋 복사하기", 1500);
  };

});

