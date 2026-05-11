# GitHub Repository Card Fields

## 📋 저장소 카드에 표시할 필드 정리

GitHub API 응답의 `items` 배열에서 각 저장소 객체가 가진 필드 중, 카드에 표시할 정보를 정리합니다.

---

## 🎯 표시할 정보 (6가지)

### 1. 저장소 이름
- **필드명**: `full_name`
- **타입**: `string`
- **설명**: 소유자/저장소명 형식 (예: "facebook/react")
- **예시**: `"facebook/react"`, `"vuejs/vue"`, `"microsoft/vscode"`

```javascript
repo.full_name
// 출력: "facebook/react"
```

---

### 2. 저장소 설명
- **필드명**: `description`
- **타입**: `string` 또는 `null`
- **설명**: 저장소에 대한 간단한 설명
- **주의**: `null`일 수 있으므로 기본값 처리 필요
- **예시**: `"A declarative, efficient, and flexible JavaScript library for building user interfaces."`

```javascript
repo.description || '설명이 없습니다.'
// 출력: 설명 또는 "설명이 없습니다."
```

---

### 3. 사용 언어
- **필드명**: `language`
- **타입**: `string` 또는 `null`
- **설명**: 저장소의 주요 프로그래밍 언어
- **주의**: `null`일 수 있으므로 기본값 처리 필요
- **예시**: `"JavaScript"`, `"Python"`, `"TypeScript"`

```javascript
repo.language || '언어 정보 없음'
// 출력: "JavaScript" 또는 "언어 정보 없음"
```

---

### 4. Star 수
- **필드명**: `stargazers_count`
- **타입**: `number`
- **설명**: 저장소에 부여된 별(star)의 개수
- **예시**: `200000`, `50000`, `1234`

```javascript
repo.stargazers_count
// 출력: 200000

// 천 단위 구분 기호 추가
repo.stargazers_count.toLocaleString()
// 출력: "200,000"
```

---

### 5. Fork 수
- **필드명**: `forks_count`
- **타입**: `number`
- **설명**: 저장소가 포크(복사)된 횟수
- **예시**: `40000`, `10000`, `567`

```javascript
repo.forks_count
// 출력: 40000

// 천 단위 구분 기호 추가
repo.forks_count.toLocaleString()
// 출력: "40,000"
```

---

### 6. GitHub 저장소 링크
- **필드명**: `html_url`
- **타입**: `string`
- **설명**: 저장소의 GitHub 웹 페이지 URL
- **예시**: `"https://github.com/facebook/react"`

```javascript
repo.html_url
// 출력: "https://github.com/facebook/react"
```

---

## 📦 실제 API 응답 예시

```json
{
  "total_count": 123456,
  "incomplete_results": false,
  "items": [
    {
      "id": 10270250,
      "name": "react",
      "full_name": "facebook/react",
      "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      "html_url": "https://github.com/facebook/react",
      "stargazers_count": 200000,
      "forks_count": 40000,
      "language": "JavaScript",
      "owner": {
        "login": "facebook",
        "avatar_url": "https://avatars.githubusercontent.com/u/69631?v=4"
      },
      ...
    },
    ...
  ]
}
```

---

## 💻 JavaScript 코드 예시

### 기본 사용법
```javascript
// API 응답 데이터
const data = await fetchRepos('react');

// 첫 번째 저장소 정보 추출
const repo = data.items[0];

// 1. 저장소 이름
const repoName = repo.full_name;
console.log('저장소 이름:', repoName);
// 출력: "facebook/react"

// 2. 저장소 설명
const repoDescription = repo.description || '설명이 없습니다.';
console.log('설명:', repoDescription);

// 3. 사용 언어
const repoLanguage = repo.language || '언어 정보 없음';
console.log('언어:', repoLanguage);

// 4. Star 수
const repoStars = repo.stargazers_count.toLocaleString();
console.log('Star 수:', repoStars);

// 5. Fork 수
const repoForks = repo.forks_count.toLocaleString();
console.log('Fork 수:', repoForks);

// 6. GitHub 링크
const repoUrl = repo.html_url;
console.log('링크:', repoUrl);
```

---

### 카드 HTML 생성 예시
```javascript
// 저장소 카드 HTML 생성
function createRepoCard(repo) {
  return `
    <div class="repo-card">
      <h3>${repo.full_name}</h3>
      <p>${repo.description || '설명이 없습니다.'}</p>
      <div class="repo-language">
        <span>💻 ${repo.language || '언어 정보 없음'}</span>
      </div>
      <div class="repo-stats">
        <span>⭐ ${repo.stargazers_count.toLocaleString()}</span>
        <span>🍴 ${repo.forks_count.toLocaleString()}</span>
      </div>
      <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-link">
        GitHub에서 보기
      </a>
    </div>
  `;
}

// 사용 예시
const data = await fetchRepos('react');
data.items.forEach(repo => {
  const cardHTML = createRepoCard(repo);
  document.getElementById('repoList').innerHTML += cardHTML;
});
```

---

### forEach로 모든 저장소 출력
```javascript
async function displayRepos(keyword) {
  try {
    const data = await fetchRepos(keyword);
    
    data.items.forEach((repo, index) => {
      console.log(`\n${index + 1}. ${repo.full_name}`);
      console.log(`   📝 ${repo.description || '설명 없음'}`);
      console.log(`   💻 ${repo.language || '언어 정보 없음'}`);
      console.log(`   ⭐ ${repo.stargazers_count.toLocaleString()}`);
      console.log(`   🍴 ${repo.forks_count.toLocaleString()}`);
      console.log(`   🔗 ${repo.html_url}`);
    });
  } catch (error) {
    console.error('에러 발생:', error.message);
  }
}

// 실행
displayRepos('javascript');
```

---

## 📊 필드 요약 표

| 번호 | 표시 정보 | 필드명 | 타입 | null 가능 | 기본값 처리 |
|------|----------|--------|------|-----------|-------------|
| 1 | 저장소 이름 | `full_name` | string | ❌ | 불필요 |
| 2 | 저장소 설명 | `description` | string | ✅ | `'설명이 없습니다.'` |
| 3 | 사용 언어 | `language` | string | ✅ | `'언어 정보 없음'` |
| 4 | Star 수 | `stargazers_count` | number | ❌ | 불필요 |
| 5 | Fork 수 | `forks_count` | number | ❌ | 불필요 |
| 6 | GitHub 링크 | `html_url` | string | ❌ | 불필요 |

---

## ⚠️ 주의사항

### 1. null 값 처리
```javascript
// ❌ 잘못된 방법 (null이면 에러 발생 가능)
const description = repo.description;

// ✅ 올바른 방법 (기본값 제공)
const description = repo.description || '설명이 없습니다.';
```

### 2. 숫자 포맷팅
```javascript
// ❌ 가독성 낮음
console.log(repo.stargazers_count);  // 200000

// ✅ 천 단위 구분 기호 추가
console.log(repo.stargazers_count.toLocaleString());  // 200,000
```

### 3. 외부 링크 보안
```html
<!-- ✅ target="_blank"와 rel="noopener noreferrer" 함께 사용 -->
<a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
  GitHub에서 보기
</a>
```

---

## 🎨 카드 디자인 예시

```
┌─────────────────────────────────────┐
│ facebook/react                      │
│                                     │
│ A declarative, efficient, and       │
│ flexible JavaScript library for     │
│ building user interfaces.           │
│                                     │
│ 💻 JavaScript                       │
│                                     │
│ ⭐ 200,000    🍴 40,000            │
│                                     │
│ [GitHub에서 보기]                   │
└─────────────────────────────────────┘
```

---

## 🔗 관련 파일

- `fetch-repos.js` - API 호출 함수
- `app.js` - 카드 생성 및 렌더링 로직
- `style.css` - 카드 스타일
- `index.html` - 카드 표시 영역

---

**작성일**: 2026년 5월 11일  
**프로젝트**: GitHub Repository Search Board  
**목적**: 저장소 카드 필드 정리 및 사용법 안내
