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

**작성일**: 2026년 5월 11일  
**프로젝트**: GitHub Repository Search Board  
**버전**: 2.0.0 (파일 분리 버전)
**최종 업데이트**: 2026년 5월 11일 20:44
