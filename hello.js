let isOpen = false;

document.getElementById("myButton").onclick = function () {
  const output = document.getElementById("output");

  if (isOpen === false) {
    output.textContent =
`[NotebookLM 슬라이드 디자인 요청]

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

    this.textContent = "닫기";
    isOpen = true;
  } else {
    output.textContent = "";
    this.textContent = "버튼을 누르면 슬라이더 데크 프람프트 출력";
    isOpen = false;
  }
};
