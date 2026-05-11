# GitHub 저장소 검색 URL 생성 가이드

## 📌 핵심 코드 (Template Literal 방식)

```javascript
// 검색어 변수 (keyword로 고정)
const keyword = 'react';

// GitHub API URL 생성 (template literal 사용)
const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;
```

## 🔍 각 부분 설명

### 1. 기본 URL
```javascript
https://api.github.com/search/repositories
```
- GitHub의 저장소 검색 API 엔드포인트입니다.

### 2. 검색어 (q 파라미터)
```javascript
?q=${encodeURIComponent(keyword)}
```
- `q`: 검색어를 전달하는 파라미터
- `encodeURIComponent(keyword)`: 검색어를 URL에 안전하게 사용할 수 있도록 인코딩
  - 예: `'machine learning'` → `'machine%20learning'`
  - 예: `'vue.js'` → `'vue.js'`

### 3. 정렬 기준 (sort 파라미터)
```javascript
&sort=stars
```
- `stars`: 별점(스타) 개수를 기준으로 정렬합니다.

### 4. 정렬 순서 (order 파라미터)
```javascript
&order=desc
```
- `desc`: 내림차순(descending) 정렬
- 별점이 높은 저장소부터 보여줍니다.

### 5. 결과 개수 (per_page 파라미터)
```javascript
&per_page=6
```
- `6`: 결과를 6개만 가져옵니다.

## 💡 실제 사용 예시

### 예시 1: 기본 사용법
```javascript
const keyword = 'react';
const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;

console.log(url);
// 출력: https://api.github.com/search/repositories?q=react&sort=stars&order=desc&per_page=6
```

### 예시 2: fetch와 함께 사용
```javascript
const keyword = 'vue';

// URL 생성
const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;

// API 호출
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('검색 결과:', data.items); // 상위 6개 저장소
  });
```

### 예시 3: async/await 사용
```javascript
async function searchRepositories() {
  const keyword = 'javascript';
  
  // URL 생성 (template literal)
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;
  
  // API 호출
  const response = await fetch(url);
  const data = await response.json();
  
  // 결과 사용
  console.log('검색 결과:', data.items);
}
```

### 예시 4: 공백이 포함된 검색어
```javascript
const keyword = 'machine learning';

// encodeURIComponent가 공백을 %20으로 변환합니다
const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;

console.log(url);
// 출력: https://api.github.com/search/repositories?q=machine%20learning&sort=stars&order=desc&per_page=6
```

## 📋 완성된 함수 예시

```javascript
/**
 * GitHub 저장소를 검색하는 함수
 * @param {string} keyword - 검색할 키워드
 * @returns {Promise<Array>} - 검색된 저장소 목록 (최대 6개)
 */
async function searchGitHubRepositories(keyword) {
  // 1. URL 생성 (template literal 사용)
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;
  
  try {
    // 2. API 호출
    const response = await fetch(url);
    
    // 3. 응답 확인
    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.status}`);
    }
    
    // 4. JSON 데이터 파싱
    const data = await response.json();
    
    // 5. 결과 반환 (최대 6개)
    return data.items;
    
  } catch (error) {
    console.error('검색 중 오류 발생:', error);
    return [];
  }
}

// 사용 예시
searchGitHubRepositories('react').then(repos => {
  console.log('검색된 저장소:', repos);
});
```

## 🎯 핵심 포인트

1. **변수 이름**: `keyword`로 고정
2. **URL 인코딩**: `encodeURIComponent(keyword)` 필수
3. **결과 개수**: `per_page=6`으로 6개 제한
4. **Template Literal**: 백틱(`)과 `${}` 사용
5. **정렬**: `sort=stars&order=desc`로 별점 높은 순

## 📁 프로젝트 파일

- `index.html`: 실제 동작하는 웹 애플리케이션
- `github-api-url-builder.js`: 다양한 사용 예시가 포함된 JavaScript 파일
- `API_URL_EXAMPLE.md`: 상세한 API 문서

## 🚀 테스트 방법

1. `index.html` 파일을 브라우저에서 열기
2. 검색어 입력 (예: 'react', 'vue', 'javascript')
3. 검색 버튼 클릭
4. 상위 6개의 저장소가 별점 순으로 표시됨
