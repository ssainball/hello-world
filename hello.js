document.addEventListener("DOMContentLoaded", () => {

  /* =========================
      공통 출력 함수 (기존 유지)
     ========================= */
  function showPrompt(targetId, copyBtnId, text) {
    const outputBox = document.getElementById(targetId);
    const copyBtn = document.getElementById(copyBtnId);

    outputBox.textContent = text;
    copyBtn.style.display = "inline-block";

    copyBtn.onclick = () => {
      navigator.clipboard.writeText(text);
      copyBtn.innerText = "✅ 복사됨!";
      setTimeout(() => copyBtn.innerText = "📋 복사하기", 1500);
    };
  }

  /* =========================
      새 창 열기 함수 (마벨 전용)
     ========================= */
  function openInNewWindow(title, text) {
    // 새 창의 크기 및 설정
    const width = 600;
    const height = 700;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);
    
    const newWin = window.open("", "_blank", `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`);
    
    // 새 창에 들어갈 HTML 구조 및 스타일
    const htmlContent = `
      <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: 'Malgun Gothic', sans-serif; padding: 20px; line-height: 1.6; background-color: #f4f4f4; }
          pre { background: #fff; padding: 15px; border: 2px solid #000; white-space: pre-wrap; word-wrap: break-word; }
          .copy-btn { 
            background: #FF0000; color: #fff; border: none; padding: 10px 20px; 
            cursor: pointer; font-weight: bold; margin-bottom: 10px; border-radius: 5px;
          }
          .copy-btn:active { background: #cc0000; }
        </style>
      </head>
      <body>
        <h2>⚡ ${title} 프롬프트</h2>
        <button id="winCopyBtn" class="copy-btn">📋 이 서식 복사하기</button>
        <pre id="content">${text}</pre>
        <script>
          document.getElementById('winCopyBtn').onclick = () => {
            const text = document.getElementById('content').innerText;
            navigator.clipboard.writeText(text).then(() => {
              const btn = document.getElementById('winCopyBtn');
              btn.innerText = "✅ 복사 완료!";
              setTimeout(() => btn.innerText = "📋 이 서식 복사하기", 1500);
            });
          };
        <\/script>
      </body>
      </html>
    `;
    
    newWin.document.write(htmlContent);
    newWin.document.close();
  }

  /* =========================
      마벨 버튼 (새 창 버전)
     ========================= */
  document.getElementById("marvelButton").onclick = () => {
    const marvelText = `[Marvel 코믹스]
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

    openInNewWindow("Marvel 스타일 가이드", marvelText);
  };

  /* =========================
      웹툰 버튼 (기존 방식 유지)
     ========================= */
  document.getElementById("webtoonButton").onclick = () => {
    showPrompt(
      "output-webtoon",
      "copyWebtoon",
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

위 가이드를 바탕으로 고품질 슬라이드를 생성해주세요.`
    );
  };

});
