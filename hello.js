document.addEventListener("DOMContentLoaded", () => {

  /* =========================
      팝업 생성 및 출력 함수
     ========================= */
  function openPopup(title, text) {
    // 1. 팝업창 크기 및 위치 설정
    const width = 500;
    const height = 650;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);

    // 2. 새 창 열기
    const popup = window.open("", "_blank", `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`);

    // 3. 팝업창에 HTML 주입
    popup.document.write(`
      <html>
      <head>
        <title>${title} 프롬프트</title>
        <style>
          body { font-family: sans-serif; padding: 20px; line-height: 1.5; background: #f8f9fa; }
          .container { background: white; padding: 15px; border: 1px solid #ddd; border-radius: 8px; }
          pre { white-space: pre-wrap; word-wrap: break-word; font-size: 14px; background: #eee; padding: 10px; border-radius: 4px; }
          .btn-copy { 
            width: 100%; padding: 10px; margin-bottom: 10px; 
            background: #007bff; color: white; border: none; 
            border-radius: 5px; cursor: pointer; font-weight: bold;
          }
          .btn-copy:hover { background: #0056b3; }
        </style>
      </head>
      <body>
        <h3>🚀 ${title} 스타일 가이드</h3>
        <button id="copyBtn" class="btn-copy">📋 이 내용 복사하기</button>
        <div class="container">
          <pre id="promptText">${text}</pre>
        </div>
        <script>
          document.getElementById('copyBtn').onclick = () => {
            const content = document.getElementById('promptText').innerText;
            navigator.clipboard.writeText(content).then(() => {
              const btn = document.getElementById('copyBtn');
              btn.innerText = "✅ 복사 완료!";
              setTimeout(() => btn.innerText = "📋 이 내용 복사하기", 1500);
            });
          };
        <\/script>
      </body>
      </html>
    `);
    popup.document.close();
  }

  /* =========================
      마벨 버튼 이벤트
     ========================= */
  document.getElementById("marvelButton").onclick = () => {
    const text = `[Marvel 코믹스]
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
    
    openPopup("Marvel", text);
  };

  /* =========================
      웹툰 버튼 이벤트
     ========================= */
  document.getElementById("webtoonButton").onclick = () => {
    const text = `[네이버 웹툰]
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

    openPopup("네이버 웹툰", text);
  };

});
