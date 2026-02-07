document.addEventListener("DOMContentLoaded", function () {

  const marvelButton = document.getElementById("marvelButton");
  const webtoonButton = document.getElementById("webtoonButton");

  function openPromptWindow(title, content) {
    const win = window.open(
      "",
      "_blank",
      "width=720,height=900,noopener,noreferrer"
      );

    if(!win) {
      alert("팝업 차단.");
            return;
    }
  
    win.document.write(`
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <title>${title}</title>
        <style>
          body {
            margin: 0;
            padding: 24px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
            background: #0f172a;
            color: #e5e7eb;
          }
          pre {
            white-space: pre-wrap;
            background: rgba(255,255,255,0.05);
            padding: 20px;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.12);
          }
          button {
            margin-top: 16px;
            padding: 10px 16px;
            font-size: 14px;
            border-radius: 8px;
            border: none;
            background: #38bdf8;
            color: #020617;
            cursor: pointer;
          }
        </style>
      </head>
      
      
      <body>
      <pre id="content">${content}</pre>
      <button onclick="
        navigator.clipboard.writeText(document.getElementById('content').innerText);
        this.innerText='✅ 복사됨!';
        setTimeout(()=>this.innerText='📋 복사하기',1500);
      ">
        📋 복사하기
      </button>
    </body>
    </html>
    `);
       win.document.close();
  }

  /* ========= 마벨 버튼 ========= */
  marvelButton.onclick = function () {
    openPromptWindow(
     "Marvel Comic Prompt",
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

위 가이드를 바탕으로 고품질 슬라이드를 생성해주세요.`
      );
  };



/* ======================
   네이버 웹툰 버튼
====================== */
    webtoonButton.onclick = function () {
    openPromptWindow(
      "Naver Webtoon Prompt",
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

