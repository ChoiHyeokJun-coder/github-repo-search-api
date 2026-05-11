# GitHub REST API - 저장소 검색 URL 예시

## 요구사항
1. 검색어는 사용자가 입력한 keyword를 사용
2. 저장소 검색 API를 사용
3. stars 기준으로 정렬
4. 내림차순으로 정렬
5. 결과는 6개만 가져오기

## URL 구조

```
https://api.github.com/search/repositories?q={keyword}&sort=stars&order=desc&per_page=6
```

## 파라미터 설명

| 파라미터 | 값 | 설명 |
|---------|-----|------|
| `q` | `{keyword}` | 검색어 (URL 인코딩 필요) |
| `sort` | `stars` | 정렬 기준 (별점) |
| `order` | `desc` | 정렬 순서 (내림차순) |
| `per_page` | `6` | 페이지당 결과 개수 |

## JavaScript fetch 사용 예시

### 예시 1: 기본 사용법
```javascript
const keyword = 'react';
const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.items); // 상위 6개 저장소
  });
```

### 예시 2: async/await 사용
```javascript
async function searchRepositories(keyword) {
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  return data.items; // 상위 6개 저장소 반환
}

// 사용
searchRepositories('vue').then(repos => console.log(repos));
```

### 예시 3: 다양한 검색어
```javascript
// 'javascript' 검색
const url1 = `https://api.github.com/search/repositories?q=${encodeURIComponent('javascript')}&sort=stars&order=desc&per_page=6`;

// 'machine learning' 검색 (공백 포함)
const url2 = `https://api.github.com/search/repositories?q=${encodeURIComponent('machine learning')}&sort=stars&order=desc&per_page=6`;

// 'node.js' 검색 (특수문자 포함)
const url3 = `https://api.github.com/search/repositories?q=${encodeURIComponent('node.js')}&sort=stars&order=desc&per_page=6`;
```

## 실제 URL 예시

### 검색어: "react"
```
https://api.github.com/search/repositories?q=react&sort=stars&order=desc&per_page=6
```

### 검색어: "machine learning"
```
https://api.github.com/search/repositories?q=machine%20learning&sort=stars&order=desc&per_page=6
```

### 검색어: "vue.js"
```
https://api.github.com/search/repositories?q=vue.js&sort=stars&order=desc&per_page=6
```

## 응답 데이터 구조

```json
{
  "total_count": 123456,
  "incomplete_results": false,
  "items": [
    {
      "id": 10270250,
      "name": "react",
      "full_name": "facebook/react",
      "description": "A declarative, efficient, and flexible JavaScript library...",
      "html_url": "https://github.com/facebook/react",
      "stargazers_count": 200000,
      "forks_count": 40000,
      ...
    },
    // ... 최대 6개의 저장소
  ]
}
```

## 주의사항

1. **URL 인코딩**: `encodeURIComponent()`를 사용하여 검색어를 인코딩해야 합니다.
2. **Rate Limit**: GitHub API는 인증 없이 시간당 60회 요청 제한이 있습니다.
3. **CORS**: 브라우저에서 직접 호출 시 CORS 정책에 따라 제한될 수 있습니다.

## 프로젝트 적용

현재 `index.html` 파일의 167-169번째 줄에 이 URL 구조가 적용되어 있습니다:

```javascript
const keyword = query;
const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;

const response = await fetch(url);
```
