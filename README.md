# GitHub Repo Search Board

**[GitHub Repository Search Board: GitHub 저장소 검색 보드]**

> AI가 코드를 만들어도, 최종 판단은 개발자가 한다.

---

## 📋 프로젝트 소개

GitHub REST API를 활용하여 저장소를 검색하고, 검색 결과를 다크 모드 기반의 카드 형태로 보여주는 웹 애플리케이션입니다. 순수 HTML, CSS, JavaScript만을 사용하여 구현되었으며, 초보자도 쉽게 이해할 수 있도록 상세한 주석이 포함되어 있습니다.

### 주요 특징
- 🌙 **다크 모드 UI**: GitHub 스타일의 세련된 다크 테마
- 📱 **반응형 디자인**: 모바일/태블릿/데스크톱 모두 지원
- 🔍 **실시간 검색**: GitHub API를 통한 실시간 저장소 검색
- 📊 **정렬 기능**: Stars 기준 내림차순 정렬
- 💬 **초보자 친화적**: 모든 코드에 상세한 한글 주석

---

## 🎯 학습 목표

1. **GitHub REST API 활용**
   - API 엔드포인트 이해
   - 쿼리 파라미터 활용
   - 응답 데이터 처리

2. **JavaScript 비동기 프로그래밍**
   - async/await 패턴
   - fetch API 사용
   - Promise 이해
   - 에러 처리

3. **DOM 조작 및 이벤트 처리**
   - getElementById를 통한 요소 선택
   - 이벤트 리스너 등록
   - 동적 HTML 생성

4. **반응형 웹 디자인**
   - CSS Grid 시스템
   - 미디어 쿼리
   - CSS 변수 활용

5. **프로젝트 구조화**
   - HTML/CSS/JS 파일 분리
   - 관심사의 분리 (Separation of Concerns)
   - 재사용 가능한 함수 작성

---

## 🛠️ 기술 스택

### 실습 환경
- **언어**: HTML5, CSS3, JavaScript (ES6+)
- **API**: GitHub REST API v3
- **도구**: Visual Studio Code, Git, GitHub
- **브라우저**: Chrome, Firefox, Safari (최신 버전)

### 사용 기술
- **Frontend**: 순수 JavaScript (No Framework)
- **스타일링**: CSS3 (Grid, Flexbox, CSS Variables)
- **비동기 처리**: async/await, fetch API
- **버전 관리**: Git, GitHub

---

## 🚀 실행 방법

### 1. 저장소 클론
```bash
git clone https://github.com/ChoiHyeokJun-coder/github-repo-search-api.git
cd github-repo-search-api
```

### 2. 브라우저에서 실행
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 3. 사용 방법
1. 검색창에 키워드 입력 (예: "react", "vue", "javascript")
2. 검색 버튼 클릭 또는 Enter 키 입력
3. 상위 6개의 저장소가 Stars 순으로 표시됨

---

## ✨ 주요 기능

### 1. 저장소 검색
- GitHub API를 통한 실시간 검색
- Stars 기준 내림차순 정렬
- 최대 6개 결과 표시

### 2. 저장소 카드 표시
각 카드에는 다음 정보가 포함됩니다:
- 📦 저장소 이름 (full_name)
- 📝 저장소 설명 (description)
- 💻 사용 언어 (language)
- ⭐ Star 수 (stargazers_count)
- 🍴 Fork 수 (forks_count)
- 🔗 GitHub 링크 (html_url)

### 3. 반응형 그리드
- **모바일** (< 768px): 1열
- **태블릿** (≥ 768px): 2열
- **데스크톱** (≥ 1024px): 3열

### 4. 입력값 검증
- 빈 값 검증
- 공백 제거 (trim)
- 사용자 친화적 에러 메시지

### 5. 에러 처리
- API 호출 실패 시 에러 메시지 표시
- console.error로 디버깅 정보 제공

---

## 📝 사용한 프롬프트 기록

### 1차 요청: GitHub API URL 생성
```
GitHub REST API에서 저장소를 검색하는 요청 URL을 만들고 싶습니다.
조건: keyword 사용, stars 기준 내림차순, 결과 6개
```

### 2차 요청: Template Literal 방식
```
URL을 JavaScript 함수 안에서 사용할 수 있도록 template literal 방식으로 작성
조건: keyword 변수명 고정, encodeURIComponent 처리, 초보자용 주석
```

### 3차 요청: 프롬프트 기록
```
프롬프트 진행 내용을 PROMPT.md 파일로 작성해서 기록
```

### 4차 요청: 파일 분리 및 구조화
```
HTML/CSS/JavaScript 파일 분리
조건: 검색창, 버튼, 상태 메시지, 카드 목록 영역, 명확한 ID 부여
```

### 5차 요청: ID 명명 규칙 변경 및 다크 모드
```
ID를 camelCase로 변경 (searchInput, searchButton, statusMessage, repoList)
다크 모드 디자인 적용, 반응형 그리드 (1열/2열/3열)
```

### 6차 요청: 입력값 검증 코드
```
순수 JavaScript로 검색 버튼 클릭 시 입력값 읽기
조건: 공백 제거, 빈 값 검증, console.log 출력, 초보자용 주석
```

### 7차 요청: API 호출 함수
```
fetchRepos 함수 작성
조건: async/await, encodeURIComponent, response.ok 확인, throw new Error, JSON 반환
```

### 8차 요청: 카드 필드 정리
```
API 응답의 items 배열에서 카드에 표시할 6가지 필드 정리
(이름, 설명, 언어, Star, Fork, 링크)
```

### 9차 요청: 검색 기능 통합
```
handleSearch 함수에서 fetchRepos로 데이터 가져오고 renderRepos에 전달
조건: 입력값 검증 유지, try-catch 에러 처리
```

---

## 🔍 AI 생성 결과 검토 기준

### 1. 코드 품질
- ✅ 변수명이 명확하고 일관성 있는가?
- ✅ 함수가 단일 책임 원칙을 따르는가?
- ✅ 주석이 충분하고 이해하기 쉬운가?
- ✅ 에러 처리가 적절한가?

### 2. 기능 구현
- ✅ 요구사항이 모두 충족되었는가?
- ✅ 예외 상황이 처리되었는가?
- ✅ 사용자 경험이 고려되었는가?

### 3. 코드 구조
- ✅ 파일이 적절히 분리되었는가?
- ✅ 재사용 가능한 구조인가?
- ✅ 확장 가능한 설계인가?

### 4. 문서화
- ✅ README가 명확한가?
- ✅ 주석이 충분한가?
- ✅ 사용 예시가 포함되었는가?

---

## 🔧 수정 요청 내용

### 주요 수정 사항

1. **ID 명명 규칙 변경**
   - kebab-case → camelCase
   - 이유: JavaScript 표준 명명 규칙 준수

2. **다크 모드 디자인 적용**
   - Bootstrap 스타일 제거
   - GitHub 스타일의 다크 테마 적용
   - 이유: 현대적이고 세련된 UI

3. **반응형 그리드 구현**
   - 모바일/태블릿/데스크톱 대응
   - 이유: 모든 디바이스에서 최적화된 경험

4. **JSON 데이터 콘솔 출력 추가**
   - fetchRepos 함수에 console.log 추가
   - 이유: 디버깅 및 학습 편의성

5. **검색 기능 통합**
   - handleSearch에서 fetchRepos 호출
   - renderRepos에 데이터 전달
   - 이유: 실제 동작하는 검색 기능 구현

---

## 💡 배운 점

### 1. API 활용
- GitHub REST API의 구조와 사용법
- 쿼리 파라미터를 통한 데이터 필터링
- Rate Limit 및 인증 개념

### 2. 비동기 프로그래밍
- async/await의 동작 원리
- Promise와 async/await의 차이
- try-catch를 통한 에러 처리

### 3. DOM 조작
- getElementById vs querySelector
- innerHTML vs createElement
- 이벤트 리스너의 동작 방식

### 4. CSS 기술
- CSS Grid와 Flexbox의 차이
- CSS 변수의 활용
- 미디어 쿼리를 통한 반응형 디자인

### 5. 프로젝트 관리
- Git을 통한 버전 관리
- 파일 구조화의 중요성
- 문서화의 필요성

### 6. AI 활용
- 명확한 프롬프트 작성의 중요성
- AI 생성 코드의 검토 필요성
- 단계적 개발의 효율성

---

## 📊 3줄 보고서

1. **GitHub REST API를 활용한 저장소 검색 웹 애플리케이션을 순수 JavaScript로 구현**하여, API 호출부터 데이터 렌더링까지 전체 프로세스를 학습했습니다.

2. **다크 모드 기반의 반응형 UI를 CSS Grid와 미디어 쿼리로 구현**하여, 모바일/태블릿/데스크톱 모든 환경에서 최적화된 사용자 경험을 제공합니다.

3. **AI를 활용한 단계적 개발 과정을 통해 9차례의 프롬프트로 프로젝트를 완성**하며, AI 생성 코드의 검토와 수정 요청의 중요성을 체득했습니다.

---

## 🚀 향후 개선 사항

### 단기 개선 (1-2주)
- [ ] 로딩 스피너 추가
- [ ] 페이지네이션 구현
- [ ] 검색 히스토리 저장 (LocalStorage)
- [ ] 다크/라이트 모드 토글

### 중기 개선 (1-2개월)
- [ ] 고급 검색 필터 (언어, 날짜, 라이선스)
- [ ] 저장소 즐겨찾기 기능
- [ ] 검색 결과 정렬 옵션 (Stars, Forks, Updated)
- [ ] GitHub 인증 연동 (Rate Limit 해제)

### 장기 개선 (3개월 이상)
- [ ] React/Vue로 리팩토링
- [ ] TypeScript 적용
- [ ] 백엔드 API 서버 구축
- [ ] 사용자 계정 시스템
- [ ] 저장소 비교 기능
- [ ] 트렌딩 저장소 대시보드

---

## 📁 프로젝트 구조

```
github-repo-search-api/
├── 📄 index.html                    # HTML 구조
├── 🎨 style.css                     # 다크 모드 CSS
├── ⚙️ app.js                        # 메인 JavaScript
├── 🔰 simple-search.js              # 검색 로직
├── 🌐 fetch-repos.js                # API 호출 함수
├── 📖 STRUCTURE.md                  # 구조 설명
├── 📋 repo-card-fields.md           # 카드 필드 정리
├── 📝 README.md                     # 프로젝트 가이드 (현재 파일)
├── 📚 API_URL_EXAMPLE.md            # API 문서
├── 🔧 github-api-url-builder.js     # API URL 예시
├── 🐙 GITHUB_SETUP.md               # GitHub 가이드
└── 📋 PROMPT.md                     # 프롬프트 진행 기록
```

---

## 🤝 기여 방법

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

## 👤 작성자

**ChoiHyeokJun**
- GitHub: [@ChoiHyeokJun-coder](https://github.com/ChoiHyeokJun-coder)
- Repository: [github-repo-search-api](https://github.com/ChoiHyeokJun-coder/github-repo-search-api)

---

## 🙏 감사의 말

이 프로젝트는 AI(Claude)의 도움을 받아 개발되었습니다. AI가 코드를 생성했지만, 모든 코드는 개발자가 검토하고 승인했습니다. **AI는 도구일 뿐, 최종 판단과 책임은 개발자에게 있습니다.**

---

## 📚 참고 자료

- [GitHub REST API 공식 문서](https://docs.github.com/en/rest/search#search-repositories)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)
- [CSS Grid 가이드](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

**작성일**: 2026년 5월 11일  
**프로젝트**: GitHub Repository Search Board  
**버전**: 1.0.0  
**최종 업데이트**: 2026년 5월 11일 21:54
