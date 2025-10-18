
# Kwak Portfolio (HTML/CSS/JS)

- 빌드 도구 없이 정적 호스팅 가능 (GitHub Pages, S3+CloudFront 등)
- 구조
  - `styles/` : base/layout + 컴포넌트 + 페이지 전용 CSS
  - `scripts/` : router(해시), 컴포넌트(tabs, fade), 페이지 초기화 모듈
  - `assets/` : images/fonts

## 로컬 실행
그냥 `index.html`을 브라우저로 열거나, 간단한 서버로 실행하세요.
```bash
# Python
python -m http.server 8080

# PowerShell (Windows 11)
Start-Process http://localhost:8080 ; python -m http.server 8080
```

## 배포
- GitHub Pages: `main` 브랜치 루트에 `index.html`이 있으면 바로 동작
- S3/CloudFront: 정적 웹 호스팅으로 업로드
