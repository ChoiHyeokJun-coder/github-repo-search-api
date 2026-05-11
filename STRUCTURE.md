# GitHub Repository Search Board - 구조 설명

## 📁 파일 구조

```
task_4/
├── index.html              # HTML 구조 (메인 파일)
├── style.css               # CSS 스타일
├── app.js                  # JavaScript 로직
├── README.md               # 프로젝트 가이드
├── API_URL_EXAMPLE.md      # API 문서
├── PROMPT.md               # 프롬프트 진행 기록
├── GITHUB_SETUP.md         # GitHub 설정 가이드
└── github-api-url-builder.js  # API URL 생성 예시
```

---

## 🏗️ HTML 구조 (index.html)

### 주요 구성 요소

#### 1. 검색 입력창
```html
<input 
  type="text" 
  id="searchInput" 
  placeholder="저장소 키워드를 입력하세요 (예: react, ai)" 
/>
```
- **ID**: `searchInput`
- **용도**: 사용자가 검색할 키워드 입력
- **JavaScript 선택**: `document.getElementById('searchInput')`

#### 2. 검색 버튼
```html
<button id="searchButton">검색</button>
```
- **ID**: `searchButton`
- **용도**: 검색 실행 트리거
- **JavaScript 선택**: `document.getElementById('searchButton')`

#### 3. 상태 메시지 영역
```html
<div id="statusMessage">검색어를 입력하고 검색 버튼을 눌러주세요.</div>
```
- **ID**: `statusMessage`
- **용도**: 검색 상태 및 결과 메시지 표시
- **JavaScript 선택**: `document.getElementById('statusMessage')`
- **표시 내용**:
  - 초기: "검색어를 입력하고 검색 버튼을 눌러주세요."
  - 검색 중: "'react' 저장소를 검색 중입니다..."
  - 결과: "총 123,456개의 저장소가 발견되었습니다. (상위 6개 표시)"
  - 에러: "에러가 발생했습니다: ..."

#### 4. 저장소 카드 목록 영역
```html
<div id="repoList" class="repo-list"></div>
```
- **ID**: `repoList`
- **Class**: `repo-list`
- **용도**: 검색된 저장소 카드를 동적으로 표시
- **JavaScript 선택**: `document.getElementById('repoList')`

---

## 🎨 CSS 구조 (style.css)

### CSS 변수
```css
:root {
  --primary-color: #2da44e;    /* 주요 색상 (녹색) */
  --bg-color: #f6f8fa;         /* 배경 색상 */
  --border-color: #d0d7de;     /* 테두리 색상 */
  --text-color: #24292f;       /* 텍스트 색상 */
  --text-muted: #57606a;       /* 보조 텍스트 색상 */
}
```

### 주요 스타일 클래스

1. **`.container`** - 전체 컨테이너 (최대 너비 800px)
2. **`.search-box`** - 검색 입력창과 버튼을 감싸는 컨테이너
3. **`#status-message`** - 상태 메시지 스타일
4. **`.repo-list`** - 그리드 레이아웃 (카드 목록)
5. **`.repo-card`** - 개별 저장소 카드
6. **`.repo-stats`** - 별점, 포크 수 표시
7. **`.repo-link`** - GitHub 링크 버튼

---

## 💻 JavaScript 구조 (app.js)

### DOM 요소 선택
```javascript
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const statusMessage = document.getElementById('statusMessage');
const repoList = document.getElementById('repoList');
```

### 주요 함수

#### `searchRepositories()`
검색 실행 함수 - 비동기(async) 함수

**동작 순서:**
1. 검색어 유효성 검사
2. 상태 메시지 업데이트 ("검색 중...")
3. GitHub API 호출
4. 응답 데이터 처리
5. 카드 생성 및 렌더링
6. 에러 처리

**API URL 생성:**
```javascript
const keyword = query;
const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;
```

### 이벤트 리스너

1. **클릭 이벤트**
```javascript
searchButton.addEventListener('click', searchRepositories);
```

2. **엔터키 이벤트**
```javascript
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchRepositories();
  }
});
```

---

## 🔑 ID 및 선택자 정리

| 요소 | ID | 용도 | JavaScript 선택 |
|------|-----|------|------------------|
| 검색 입력창 | `searchInput` | 키워드 입력 | `getElementById('searchInput')` |
| 검색 버튼 | `searchButton` | 검색 실행 | `getElementById('searchButton')` |
| 상태 메시지 | `statusMessage` | 상태 표시 | `getElementById('statusMessage')` |
| 카드 목록 | `repoList` | 결과 표시 | `getElementById('repoList')` |

---

## 🎯 데이터 흐름

```
1. 사용자 입력
   ↓
2. 검색 버튼 클릭 또는 엔터키
   ↓
3. searchRepositories() 함수 실행
   ↓
4. GitHub API 호출
   ↓
5. 응답 데이터 수신
   ↓
6. 카드 생성 (forEach)
   ↓
7. DOM에 추가 (appendChild)
   ↓
8. 화면에 표시
```

---

## 📦 동적 생성되는 카드 구조

```html
<div class="repo-card">
  <h3>저장소명</h3>
  <p>설명</p>
  <div class="repo-stats">
    <span>⭐ 별점 수</span>
    <span>🍴 포크 수</span>
  </div>
  <a href="GitHub URL" class="repo-link">
    GitHub에서 보기
  </a>
</div>
```

---

## ✅ 요구사항 충족 확인

- ✅ **검색어 입력창**: `<input id="searchInput">`
- ✅ **검색 버튼**: `<button id="searchButton">`
- ✅ **상태 메시지 영역**: `<div id="statusMessage">`
- ✅ **저장소 카드 목록 영역**: `<div id="repoList">`
- ✅ **명확한 ID 부여**: 모든 주요 요소에 ID 설정
- ✅ **CSS 분리**: `style.css` 파일로 분리
- ✅ **JavaScript 분리**: `app.js` 파일로 분리

---

## 🚀 실행 방법

1. **파일 열기**
   ```bash
   start index.html
   ```
   또는 브라우저에서 `index.html` 파일 열기

2. **검색어 입력**
   - 예: "react", "vue", "javascript"

3. **검색 실행**
   - 검색 버튼 클릭 또는 엔터키

4. **결과 확인**
   - 상위 6개 저장소가 카드 형태로 표시됨

---

## 🎨 커스터마이징 가이드

### 색상 변경
`style.css`의 CSS 변수 수정:
```css
:root {
  --primary-color: #2da44e;  /* 원하는 색상으로 변경 */
}
```

### 결과 개수 변경
`app.js`의 `per_page` 값 수정:
```javascript
const url = `...&per_page=6`;  /* 6을 원하는 숫자로 변경 */
```

### 정렬 기준 변경
`app.js`의 `sort` 값 수정:
```javascript
const url = `...&sort=stars`;  /* stars, forks, updated 등 */
```

---

**작성일**: 2026년 5월 11일  
**프로젝트**: GitHub Repository Search Board  
**버전**: 2.0.0 (파일 분리 버전)
