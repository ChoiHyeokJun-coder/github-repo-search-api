# 프롬프트 진행 내용 기록

## 📋 프로젝트 개요
GitHub REST API를 사용하여 저장소를 검색하는 URL을 생성하는 프로젝트

---

## 🎯 1차 요청 (초기 요구사항)

### 사용자 요청
```
GitHub REST API에서 저장소를 검색하는 요청 URL을 만들고 싶습니다.

조건:
1. 검색어는 사용자가 입력한 keyword를 사용합니다.
2. 저장소 검색 API를 사용합니다.
3. stars 기준으로 정렬합니다.
4. 내림차순으로 정렬합니다.
5. 결과는 6개만 가져옵니다.
6. fetch에서 사용할 수 있는 URL 문자열 예시를 보여주세요.
```

### 수행 작업
1. **index.html 분석**
   - 기존 프로젝트 구조 파악
   - GitHub 저장소 검색 웹 애플리케이션 확인
   - 기존 API 호출 코드 확인 (per_page=12로 설정되어 있음)

2. **index.html 수정**
   - API URL 구조 변경
   - `per_page=12` → `per_page=6`으로 수정
   - `sort=stars&order=desc` 파라미터 추가
   - 상세한 주석 추가

3. **API_URL_EXAMPLE.md 생성**
   - URL 구조 및 파라미터 설명
   - JavaScript fetch 사용 예시 (기본, async/await)
   - 다양한 검색어에 대한 실제 URL 예시
   - 응답 데이터 구조 설명
   - 주의사항 (URL 인코딩, Rate Limit, CORS)

### 결과물
```javascript
const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;
```

---

## 🎯 2차 요청 (Template Literal 방식 요청)

### 사용자 피드백
```
URL을 JavaScript 함수 안에서 사용할 수 있도록
template literal 방식으로 다시 작성해 주세요.

조건:
1. 검색어 변수 이름은 keyword로 고정해 주세요.
2. 검색어는 encodeURIComponent로 처리해 주세요.
3. 결과 개수는 6개로 제한해 주세요.
4. 초보자가 이해할 수 있도록 각 부분에 주석을 달아 주세요.
```

### 수행 작업
1. **github-api-url-builder.js 생성**
   - Template Literal을 사용한 URL 생성 함수 작성
   - 각 부분에 상세한 한글 주석 추가
   - 다양한 사용 예시 제공:
     - 기본 함수 사용법
     - fetch와 함께 사용하는 방법
     - async/await 패턴
     - 공백 포함 검색어 처리
   - 실제 API 호출 함수 예시 포함

2. **README.md 생성**
   - 초보자를 위한 완벽한 가이드 작성
   - 핵심 코드 강조
   - 각 파라미터별 상세 설명
   - 4가지 실제 사용 예시
   - 완성된 함수 예시
   - 핵심 포인트 정리
   - 테스트 방법 안내

### 핵심 코드
```javascript
// 검색어 변수 (keyword로 고정)
const keyword = 'react';

// GitHub API URL 생성 (template literal 사용)
const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;
```

### 주석 설명
```javascript
// 1. URL 생성 (template literal 사용)
// GitHub API 검색 URL을 만듭니다
const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;

// 파라미터 설명:
// - q: 검색어 (query)
// - sort=stars: 별점(stars) 기준으로 정렬
// - order=desc: 내림차순(descending) 정렬 (높은 별점부터)
// - per_page=6: 결과를 6개만 가져오기
```

---

## 🎯 3차 요청 (프롬프트 기록)

### 사용자 요청
```
프롬프트 진행 내용을 PROMPT.md 파일로 작성해서 기록해 보세요.
```

### 수행 작업
- 전체 프롬프트 진행 과정을 체계적으로 문서화
- 각 단계별 요청사항과 수행 작업 정리
- 생성된 파일 목록 및 설명 추가

---

## 📁 생성된 파일 목록

### 1. index.html (수정됨)
- **목적**: 실제 동작하는 GitHub 저장소 검색 웹 애플리케이션
- **주요 변경사항**:
  - API URL에 `sort=stars&order=desc` 추가
  - `per_page=6`으로 변경
  - 상세한 주석 추가
- **기능**:
  - 검색어 입력 UI
  - GitHub API 호출
  - 검색 결과를 카드 형태로 표시
  - 별점, 포크 수 표시

### 2. API_URL_EXAMPLE.md
- **목적**: GitHub API URL 구조 및 사용법 상세 문서
- **내용**:
  - URL 구조 설명
  - 파라미터 상세 설명 (표 형식)
  - JavaScript fetch 사용 예시
  - 실제 URL 예시 (다양한 검색어)
  - 응답 데이터 구조
  - 주의사항 (URL 인코딩, Rate Limit, CORS)

### 3. github-api-url-builder.js
- **목적**: 다양한 사용 예시가 포함된 JavaScript 파일
- **내용**:
  - URL 생성 함수 (`buildGitHubSearchURL`)
  - 실제 API 호출 함수 (`searchGitHubRepositories`)
  - 3가지 사용 예시 (기본, fetch, async/await)
  - 모든 코드에 상세한 한글 주석
  - 초보자도 이해할 수 있는 단계별 설명

### 4. README.md
- **목적**: 초보자를 위한 완벽한 가이드 문서
- **내용**:
  - 핵심 코드 강조 (Template Literal 방식)
  - 각 부분별 상세 설명 (5개 섹션)
  - 4가지 실제 사용 예시
  - 완성된 함수 예시
  - 핵심 포인트 5가지
  - 프로젝트 파일 설명
  - 테스트 방법

### 5. PROMPT.md (현재 파일)
- **목적**: 프롬프트 진행 과정 기록
- **내용**:
  - 전체 프로젝트 개요
  - 각 단계별 요청사항
  - 수행 작업 내역
  - 생성된 파일 목록 및 설명

---

## 🔑 핵심 성과

### 1. 요구사항 완벽 충족
- ✅ 검색어 변수명: `keyword`로 고정
- ✅ URL 인코딩: `encodeURIComponent()` 사용
- ✅ 정렬 기준: `sort=stars` (별점 기준)
- ✅ 정렬 순서: `order=desc` (내림차순)
- ✅ 결과 개수: `per_page=6` (6개 제한)
- ✅ Template Literal 방식 사용
- ✅ 초보자를 위한 상세한 주석

### 2. 추가 제공 사항
- 실제 동작하는 웹 애플리케이션
- 다양한 사용 예시 (4가지 이상)
- 완성된 함수 예시
- 상세한 문서화 (3개의 마크다운 파일)
- 테스트 가능한 코드

### 3. 문서화 품질
- 초보자도 이해할 수 있는 한글 주석
- 단계별 설명
- 실제 사용 예시
- 주의사항 및 팁
- 체계적인 구조

---

## 💡 학습 포인트

### JavaScript Template Literal
```javascript
// 백틱(`)과 ${} 사용
const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;
```

### URL 인코딩의 중요성
```javascript
// 공백, 특수문자 처리
'machine learning' → 'machine%20learning'
'vue.js' → 'vue.js'
```

### GitHub API 파라미터
- `q`: 검색어
- `sort`: 정렬 기준 (stars, forks, updated 등)
- `order`: 정렬 순서 (asc, desc)
- `per_page`: 결과 개수 (최대 100)

### fetch API 사용법
```javascript
// async/await 패턴
const response = await fetch(url);
const data = await response.json();
```

---

## 📊 프로젝트 구조

```
task_4/
├── index.html                    # 웹 애플리케이션
├── github-api-url-builder.js     # JavaScript 예시 코드
├── README.md                     # 초보자 가이드
├── API_URL_EXAMPLE.md            # API 상세 문서
└── PROMPT.md                     # 프롬프트 진행 기록 (현재 파일)
```

---

## 🎓 결론

이 프로젝트를 통해 다음을 학습할 수 있습니다:

1. **GitHub REST API 사용법**
   - 저장소 검색 API 엔드포인트
   - 쿼리 파라미터 활용
   - 정렬 및 필터링

2. **JavaScript 기초**
   - Template Literal 문법
   - encodeURIComponent 함수
   - fetch API 사용법
   - async/await 패턴

3. **웹 개발 실무**
   - API 통합
   - 에러 처리
   - 사용자 입력 처리
   - 동적 UI 렌더링

4. **문서화 기술**
   - 코드 주석 작성법
   - README 작성법
   - 예시 코드 제공
   - 초보자 친화적 설명

---

## 📝 참고 자료

- [GitHub REST API 공식 문서](https://docs.github.com/en/rest/search#search-repositories)
- [MDN - Template Literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)
- [MDN - encodeURIComponent](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
- [MDN - Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)

---

---

## 🎯 4차 요청 (파일 분리 및 구조화)

### 사용자 요청
```
순수 HTML/CSS/JavaScript로 GitHub Repository Search Board 앱의 기본 HTML 구조를 작성해 주세요.

조건:
1. 검색어 입력창이 있어야 합니다.
2. 검색 버튼이 있어야 합니다.
3. 상태 메시지 영역이 있어야 합니다.
4. 저장소 카드 목록을 보여줄 영역이 있어야 합니다.
5. JavaScript에서 선택하기 쉽도록 id를 명확히 붙여 주세요.
6. CSS는 style.css, JavaScript는 app.js로 분리해 주세요.
```

### 수행 작업

1. **style.css 생성**
   - 기존 index.html의 인라인 스타일을 외부 파일로 분리
   - CSS 변수 사용 (색상 테마)
   - 반응형 그리드 레이아웃
   - GitHub 스타일 디자인
   - 모든 스타일에 한글 주석 추가

2. **app.js 생성**
   - 기존 index.html의 인라인 스크립트를 외부 파일로 분리
   - DOM 요소 선택 로직
   - GitHub API 호출 함수
   - 이벤트 리스너 등록
   - 상세한 한글 주석 추가

3. **index.html 재구성**
   - 깔끔한 HTML 구조만 유지
   - 명확한 ID 부여:
     - `search-input`: 검색 입력창
     - `search-btn`: 검색 버튼
     - `status-message`: 상태 메시지
     - `repo-list`: 저장소 목록
   - 외부 CSS/JS 파일 링크

4. **STRUCTURE.md 생성**
   - 파일 구조 설명
   - HTML 구조 상세 설명
   - CSS 구조 설명
   - JavaScript 구조 설명
   - ID 및 선택자 정리 (표 형식)
   - 데이터 흐름 다이어그램
   - 커스터마이징 가이드

### 핵심 변경사항

#### HTML 구조 (index.html)
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GitHub Repository Search Board</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>GitHub Repo Search Board</h1>
    
    <div class="search-box">
      <input type="text" id="search-input" placeholder="저장소 키워드를 입력하세요" />
      <button id="search-btn">검색</button>
    </div>

    <div id="status-message">검색어를 입력하고 검색 버튼을 눌러주세요.</div>
    <div id="repo-list" class="repo-list"></div>
  </div>

  <script src="app.js"></script>
</body>
</html>
```

#### 파일 분리 효과
- **유지보수성 향상**: 각 파일이 명확한 역할 수행
- **재사용성 증가**: CSS와 JS를 다른 프로젝트에서도 사용 가능
- **가독성 개선**: HTML 구조가 깔끔하고 이해하기 쉬움
- **협업 용이**: 각 파일을 독립적으로 수정 가능

### 생성된 파일

#### 6. style.css (신규)
- **목적**: 모든 스타일을 외부 파일로 분리
- **내용**:
  - CSS 변수 정의 (색상 테마)
  - 반응형 레이아웃
  - 그리드 시스템
  - 호버 효과 및 트랜지션
  - 모든 스타일에 한글 주석

#### 7. app.js (신규)
- **목적**: 모든 JavaScript 로직을 외부 파일로 분리
- **내용**:
  - DOM 요소 선택
  - `searchRepositories()` 함수
  - GitHub API 호출 로직
  - 동적 카드 생성
  - 이벤트 리스너 (클릭, 엔터키)
  - 상세한 한글 주석

#### 8. STRUCTURE.md (신규)
- **목적**: 프로젝트 구조 상세 설명
- **내용**:
  - 파일 구조 트리
  - HTML 구조 설명 (4개 주요 요소)
  - CSS 구조 설명 (변수, 클래스)
  - JavaScript 구조 설명 (함수, 이벤트)
  - ID 및 선택자 정리 표
  - 데이터 흐름 다이어그램
  - 동적 생성 카드 구조
  - 커스터마이징 가이드

---

## 📁 업데이트된 파일 목록

### 전체 파일 구조
```
task_4/
├── index.html                    # HTML 구조 (외부 파일 링크)
├── style.css                     # CSS 스타일 (신규)
├── app.js                        # JavaScript 로직 (신규)
├── STRUCTURE.md                  # 구조 설명 문서 (신규)
├── github-api-url-builder.js     # API URL 생성 예시
├── README.md                     # 초보자 가이드
├── API_URL_EXAMPLE.md            # API 상세 문서
├── GITHUB_SETUP.md               # GitHub 설정 가이드
└── PROMPT.md                     # 프롬프트 진행 기록 (현재 파일)
```

---

## 🔑 4차 요청 핵심 성과

### 1. 파일 분리 완료
- ✅ HTML: 구조만 담당 (index.html)
- ✅ CSS: 스타일만 담당 (style.css)
- ✅ JavaScript: 로직만 담당 (app.js)
- ✅ 관심사의 분리 (Separation of Concerns) 원칙 준수

### 2. 명확한 ID 부여
- ✅ `search-input`: 검색 입력창
- ✅ `search-btn`: 검색 버튼
- ✅ `status-message`: 상태 메시지
- ✅ `repo-list`: 저장소 목록

### 3. 문서화 강화
- ✅ STRUCTURE.md: 구조 상세 설명
- ✅ 모든 코드에 한글 주석
- ✅ ID 및 선택자 정리 표
- ✅ 데이터 흐름 다이어그램

### 4. 유지보수성 향상
- 각 파일이 독립적으로 수정 가능
- 코드 재사용성 증가
- 협업 용이성 향상
- 디버깅 편의성 증가

---

## 📊 업데이트된 프로젝트 구조

```
task_4/
├── 📄 index.html                    # HTML 구조 (메인 파일)
├── 🎨 style.css                     # CSS 스타일 (신규)
├── ⚙️ app.js                        # JavaScript 로직 (신규)
├── 📖 STRUCTURE.md                  # 구조 설명 (신규)
├── 📝 README.md                     # 초보자 가이드
├── 📚 API_URL_EXAMPLE.md            # API 문서
├── 🔧 github-api-url-builder.js     # API URL 예시
├── 🐙 GITHUB_SETUP.md               # GitHub 가이드
└── 📋 PROMPT.md                     # 진행 기록 (현재 파일)
```

---

## 💡 추가 학습 포인트

### 관심사의 분리 (Separation of Concerns)
```
HTML  → 구조 (Structure)
CSS   → 표현 (Presentation)
JS    → 동작 (Behavior)
```

### 외부 파일 링크
```html
<!-- CSS 링크 -->
<link rel="stylesheet" href="style.css" />

<!-- JavaScript 링크 -->
<script src="app.js"></script>
```

### DOM 요소 선택 패턴
```javascript
// ID로 선택 (가장 빠름)
const element = document.getElementById('search-input');

// querySelector (유연함)
const element = document.querySelector('#search-input');
```

---

---

## 🎯 5차 요청 (ID 명명 규칙 변경 및 다크 모드 디자인)

### 사용자 요청 (ID 변경)
```
결과 목록 영역의 id를 repoList로 고정하고,
상태 메시지 영역의 id를 statusMessage로 고정해서 다시 작성해 주세요.

추가 조건:
1. 입력창 id는 searchInput으로 해 주세요.
2. 버튼 id는 searchButton으로 해 주세요.
3. JavaScript에서 선택하기 쉽게 구조를 단순하게 유지해 주세요.
```

### 사용자 요청 (다크 모드 디자인)
```
GitHub Repository Search Board 앱의 CSS를 수정해 주세요.

조건:
1. Bootstrap 느낌의 흰색 프로필 UI로 만들지 않습니다.
2. 다크 모드 기반의 검색 보드 느낌으로 디자인합니다.
3. 검색창과 버튼은 상단에 배치합니다.
4. 저장소 카드는 그리드 형태로 배치합니다.
5. 모바일에서는 1열, 태블릿에서는 2열, 데스크톱에서는 3열로 보이게 합니다.
6. 초보자가 이해할 수 있도록 CSS 주석을 달아 주세요.
```

### 수행 작업

#### 1. ID 명명 규칙 변경 (camelCase 적용)
**변경 전 (kebab-case):**
- `search-input` → `searchInput`
- `search-btn` → `searchButton`
- `status-message` → `statusMessage`
- `repo-list` → `repoList`

**변경 이유:**
- JavaScript에서 선택하기 쉬움
- camelCase는 JavaScript 표준 명명 규칙
- 코드 가독성 향상

**수정된 파일:**
- `index.html`: 모든 ID를 camelCase로 변경
- `app.js`: DOM 선택자 변수명 및 getElementById 인자 변경
- `style.css`: `#statusMessage` ID 선택자 변경
- `STRUCTURE.md`: 문서 업데이트

#### 2. 다크 모드 디자인 적용

**CSS 변수 (다크 모드 테마):**
```css
:root {
  /* 배경 색상 */
  --bg-primary: #0d1117;        /* 메인 배경 (진한 검정) */
  --bg-secondary: #161b22;      /* 카드 배경 (약간 밝은 검정) */
  --bg-tertiary: #21262d;       /* 호버 배경 */
  
  /* 텍스트 색상 */
  --text-primary: #c9d1d9;      /* 주요 텍스트 (밝은 회색) */
  --text-secondary: #8b949e;    /* 보조 텍스트 (중간 회색) */
  --text-link: #58a6ff;         /* 링크 색상 (파란색) */
  
  /* 강조 색상 */
  --accent-primary: #238636;    /* 주요 강조 (녹색) */
  --accent-hover: #2ea043;      /* 호버 강조 */
  
  /* 테두리 색상 */
  --border-color: #30363d;      /* 테두리 (어두운 회색) */
  
  /* 그림자 */
  --shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}
```

**주요 디자인 특징:**
1. **다크 모드 기반**: GitHub 스타일의 어두운 배경
2. **반응형 그리드**:
   - 모바일 (< 768px): 1열
   - 태블릿 (≥ 768px): 2열
   - 데스크톱 (≥ 1024px): 3열
3. **호버 효과**: 카드 및 버튼에 부드러운 전환 효과
4. **그림자 효과**: 깊이감 있는 UI
5. **상세한 주석**: 모든 CSS 섹션에 한글 주석

**반응형 미디어 쿼리:**
```css
/* 태블릿: 2열 */
@media (min-width: 768px) {
  .repo-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 데스크톱: 3열 */
@media (min-width: 1024px) {
  .repo-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 모바일 최적화 */
@media (max-width: 767px) {
  .search-box {
    flex-direction: column;
  }
}
```

### 핵심 변경사항

#### HTML (index.html)
```html
<!-- 변경 전 -->
<input id="search-input" />
<button id="search-btn">검색</button>
<div id="status-message"></div>
<div id="repo-list"></div>

<!-- 변경 후 -->
<input id="searchInput" />
<button id="searchButton">검색</button>
<div id="statusMessage"></div>
<div id="repoList"></div>
```

#### JavaScript (app.js)
```javascript
// 변경 전
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const statusMessage = document.getElementById('status-message');
const repoList = document.getElementById('repo-list');

// 변경 후
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const statusMessage = document.getElementById('statusMessage');
const repoList = document.getElementById('repoList');
```

#### CSS (style.css)
- 전체 파일을 다크 모드로 재작성
- 400줄 이상의 상세한 주석 추가
- 반응형 그리드 시스템 구현
- 호버 및 전환 효과 추가

---

## 🔑 5차 요청 핵심 성과

### 1. 명명 규칙 통일
- ✅ camelCase 적용 (JavaScript 표준)
- ✅ 일관성 있는 ID 명명
- ✅ 코드 가독성 향상

### 2. 다크 모드 디자인
- ✅ GitHub 스타일의 어두운 테마
- ✅ 반응형 그리드 (1열/2열/3열)
- ✅ 부드러운 호버 효과
- ✅ 깊이감 있는 그림자

### 3. 반응형 디자인
- ✅ 모바일 최적화 (1열)
- ✅ 태블릿 지원 (2열)
- ✅ 데스크톱 지원 (3열)
- ✅ 미디어 쿼리 활용

### 4. 문서화 강화
- ✅ CSS 전체에 상세한 한글 주석
- ✅ 섹션별 구분선 추가
- ✅ 초보자도 이해 가능한 설명

---

## 📊 최종 프로젝트 구조

```
task_4/
├── 📄 index.html                    # HTML 구조 (camelCase ID)
├── 🎨 style.css                     # 다크 모드 CSS (400+ 줄)
├── ⚙️ app.js                        # JavaScript 로직 (camelCase)
├── 📖 STRUCTURE.md                  # 구조 설명 (업데이트)
├── 📝 README.md                     # 초보자 가이드
├── 📚 API_URL_EXAMPLE.md            # API 문서
├── 🔧 github-api-url-builder.js     # API URL 예시
├── 🐙 GITHUB_SETUP.md               # GitHub 가이드
└── 📋 PROMPT.md                     # 진행 기록 (현재 파일)
```

---

## 💡 추가 학습 포인트

### camelCase vs kebab-case
```javascript
// camelCase (JavaScript 표준)
const searchInput = document.getElementById('searchInput');

// kebab-case (HTML/CSS 전통)
const searchInput = document.getElementById('search-input');
```

### CSS 변수 활용
```css
/* 변수 정의 */
:root {
  --bg-primary: #0d1117;
}

/* 변수 사용 */
body {
  background-color: var(--bg-primary);
}
```

### 반응형 그리드
```css
/* 기본: 1열 */
grid-template-columns: 1fr;

/* 태블릿: 2열 */
@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}

/* 데스크톱: 3열 */
@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);
}
```

---

---

## 🎯 6차 요청 (순수 JavaScript 입력값 검증 코드)

### 사용자 요청
```
순수 JavaScript로 검색 버튼 클릭 시 입력창의 값을 읽는 코드를 작성해 주세요.

조건:
1. input의 id는 searchInput입니다.
2. button의 id는 searchButton입니다.
3. 상태 메시지 영역의 id는 statusMessage입니다.
4. 입력값 앞뒤 공백을 제거합니다.
5. 입력값이 비어 있으면 상태 메시지에 "검색어를 입력해 주세요."라고 표시합니다.
6. 입력값이 있으면 console.log로 검색어를 출력합니다.
7. 초보자가 이해할 수 있도록 주석을 달아 주세요.
```

### 수행 작업

**simple-search.js 생성**
- 초보자를 위한 상세한 주석이 포함된 순수 JavaScript 코드
- 단계별로 명확하게 구분된 코드 구조
- 각 단계마다 상세한 설명 추가

### 핵심 코드 구조

#### 1단계: HTML 요소 선택
```javascript
// getElementById()를 사용하여 HTML 요소를 선택합니다.
const searchInput = document.getElementById('searchInput');       // 검색 입력창
const searchButton = document.getElementById('searchButton');     // 검색 버튼
const statusMessage = document.getElementById('statusMessage');   // 상태 메시지 영역
```

#### 2단계: 검색 버튼 클릭 이벤트 처리 함수
```javascript
function handleSearch() {
  // 2-1. 입력창의 값을 가져오기
  const inputValue = searchInput.value;
  
  // 2-2. 앞뒤 공백 제거하기
  // .trim()은 문자열 앞뒤의 공백을 제거합니다.
  const searchTerm = inputValue.trim();
  
  // 2-3. 입력값이 비어있는지 확인하기
  if (!searchTerm) {
    statusMessage.textContent = '검색어를 입력해 주세요.';
    return; // 함수 종료
  }
  
  // 2-4. 입력값이 있으면 콘솔에 출력하기
  console.log('검색어:', searchTerm);
  
  // 추가: 상태 메시지 업데이트
  statusMessage.textContent = `"${searchTerm}" 검색 중...`;
}
```

#### 3단계: 이벤트 리스너 등록
```javascript
// addEventListener()를 사용하여 버튼 클릭 이벤트를 감지합니다.
searchButton.addEventListener('click', handleSearch);

// 엔터키로도 검색할 수 있게 하기
searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    handleSearch();
  }
});
```

### 코드 설명 요약

1. **getElementById()**: HTML 요소를 선택
2. **.value**: 입력창의 값을 가져오기
3. **.trim()**: 앞뒤 공백 제거
4. **if (!searchTerm)**: 빈 값인지 확인
5. **console.log()**: 검색어를 콘솔에 출력
6. **addEventListener()**: 클릭 이벤트 감지

### 학습 포인트

#### DOM 요소 선택
```javascript
// ID로 선택 (가장 일반적)
const element = document.getElementById('searchInput');

// 다른 방법들
const element = document.querySelector('#searchInput');
const element = document.querySelectorAll('.class-name');
```

#### 문자열 메서드
```javascript
// .trim() - 앞뒤 공백 제거
"  hello  ".trim()  // "hello"

// .value - input 요소의 값 가져오기
searchInput.value

// .textContent - 텍스트 내용 설정/가져오기
statusMessage.textContent = '메시지';
```

#### 이벤트 처리
```javascript
// 클릭 이벤트
element.addEventListener('click', function() {
  // 실행할 코드
});

// 키보드 이벤트
element.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    // 엔터키를 눌렀을 때 실행할 코드
  }
});
```

---

## 🔑 6차 요청 핵심 성과

### 1. 초보자 친화적 코드
- ✅ 단계별로 명확하게 구분
- ✅ 각 줄마다 상세한 주석
- ✅ 이해하기 쉬운 변수명
- ✅ 간단하고 명확한 로직

### 2. 요구사항 완벽 충족
- ✅ searchInput ID 사용
- ✅ searchButton ID 사용
- ✅ statusMessage ID 사용
- ✅ .trim()으로 공백 제거
- ✅ 빈 값 검증
- ✅ console.log() 출력
- ✅ 상세한 주석

### 3. 추가 기능
- ✅ 엔터키 지원
- ✅ 상태 메시지 업데이트
- ✅ 사용 방법 안내
- ✅ 코드 설명 요약

---

## 📁 최종 파일 목록

### 전체 파일 구조
```
task_4/
├── 📄 index.html                    # HTML 구조 (camelCase ID)
├── 🎨 style.css                     # 다크 모드 CSS (400+ 줄)
├── ⚙️ app.js                        # JavaScript 로직 (GitHub API)
├── 🔰 simple-search.js              # 순수 JavaScript 입력 검증 (신규)
├── 📖 STRUCTURE.md                  # 구조 설명
├── 📝 README.md                     # 초보자 가이드
├── 📚 API_URL_EXAMPLE.md            # API 문서
├── 🔧 github-api-url-builder.js     # API URL 예시
├── 🐙 GITHUB_SETUP.md               # GitHub 가이드
└── 📋 PROMPT.md                     # 진행 기록 (현재 파일)
```

---

## 💡 JavaScript 기초 학습 포인트

### 변수 선택 (const vs let vs var)
```javascript
// const: 재할당 불가 (권장)
const searchInput = document.getElementById('searchInput');

// let: 재할당 가능
let count = 0;
count = 1;

// var: 구식 (사용 지양)
var oldStyle = 'avoid';
```

### 조건문 (if문)
```javascript
// 기본 if문
if (condition) {
  // 조건이 true일 때 실행
}

// if-else문
if (condition) {
  // 조건이 true일 때
} else {
  // 조건이 false일 때
}

// 부정 연산자 (!)
if (!searchTerm) {
  // searchTerm이 빈 문자열일 때
}
```

### 함수 정의
```javascript
// 함수 선언식
function handleSearch() {
  // 함수 내용
}

// 화살표 함수
const handleSearch = () => {
  // 함수 내용
};

// 익명 함수
element.addEventListener('click', function() {
  // 함수 내용
});
```

---

**작성일**: 2026년 5월 11일  
**프로젝트**: GitHub Repository Search Board  
**버전**: 3.1.0 (입력 검증 추가)
**최종 업데이트**: 2026년 5월 11일 21:21
