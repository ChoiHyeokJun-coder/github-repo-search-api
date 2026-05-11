// GitHub Repository Search API 호출 함수
// 초보자를 위한 상세한 주석이 포함된 코드입니다.

/**
 * GitHub 저장소를 검색하는 함수
 * @param {string} keyword - 검색할 키워드 (예: 'react', 'vue', 'javascript')
 * @returns {Promise<Object>} - GitHub API 응답 데이터 (저장소 목록 포함)
 */
async function fetchRepos(keyword) {
  // ============================================
  // 1단계: API URL 생성하기
  // ============================================
  
  // 1-1. 검색어를 URL에 안전하게 사용할 수 있도록 인코딩
  // encodeURIComponent()는 특수문자와 공백을 URL 형식으로 변환합니다.
  // 예: "machine learning" → "machine%20learning"
  const encodedKeyword = encodeURIComponent(keyword);
  
  // 1-2. GitHub API URL 생성 (Template Literal 사용)
  // 백틱(`)과 ${}를 사용하여 변수를 문자열에 삽입합니다.
  const url = `https://api.github.com/search/repositories?q=${encodedKeyword}&sort=stars&order=desc&per_page=6`;
  
  // URL 파라미터 설명:
  // - q: 검색어 (query)
  // - sort=stars: 별점(stars) 기준으로 정렬
  // - order=desc: 내림차순(descending) 정렬 (높은 별점부터)
  // - per_page=6: 결과를 6개만 가져오기
  
  // ============================================
  // 2단계: API 호출하기 (fetch 사용)
  // ============================================
  
  // 2-1. fetch()로 API 요청 보내기
  // await는 비동기 작업이 완료될 때까지 기다립니다.
  const response = await fetch(url);
  
  // ============================================
  // 3단계: 응답 상태 확인하기
  // ============================================
  
  // 3-1. response.ok로 요청 성공 여부 확인
  // response.ok는 HTTP 상태 코드가 200-299 범위일 때 true입니다.
  if (!response.ok) {
    // 요청이 실패하면 에러를 발생시킵니다.
    // throw new Error()는 에러를 던져서 함수 실행을 중단합니다.
    throw new Error(`API 호출 실패: ${response.status} ${response.statusText}`);
  }
  
  // ============================================
  // 4단계: JSON 데이터 파싱하기
  // ============================================
  
  // 4-1. response.json()으로 JSON 데이터 추출
  // await를 사용하여 JSON 파싱이 완료될 때까지 기다립니다.
  const data = await response.json();
  
  // ============================================
  // 5단계: 데이터 반환하기
  // ============================================
  
  // 5-1. 파싱된 JSON 데이터를 반환
  // return으로 함수를 호출한 곳에 데이터를 전달합니다.
  return data;
}

// ============================================
// 사용 예시
// ============================================

/**
 * 예시 1: async/await 패턴으로 사용하기
 */
async function example1() {
  try {
    // fetchRepos 함수 호출
    const data = await fetchRepos('react');
    
    // 검색 결과 출력
    console.log('검색 결과:', data);
    console.log('저장소 개수:', data.items.length);
    console.log('첫 번째 저장소:', data.items[0].full_name);
  } catch (error) {
    // 에러 발생 시 처리
    console.error('에러 발생:', error.message);
  }
}

/**
 * 예시 2: Promise then/catch 패턴으로 사용하기
 */
function example2() {
  fetchRepos('vue')
    .then(data => {
      // 성공 시 실행
      console.log('검색 결과:', data);
    })
    .catch(error => {
      // 실패 시 실행
      console.error('에러 발생:', error.message);
    });
}

/**
 * 예시 3: 저장소 목록 출력하기
 */
async function example3() {
  try {
    const data = await fetchRepos('javascript');
    
    // items 배열을 순회하며 저장소 정보 출력
    data.items.forEach((repo, index) => {
      console.log(`${index + 1}. ${repo.full_name}`);
      console.log(`   ⭐ ${repo.stargazers_count.toLocaleString()}`);
      console.log(`   📝 ${repo.description || '설명 없음'}`);
      console.log('');
    });
  } catch (error) {
    console.error('에러 발생:', error.message);
  }
}

// ============================================
// 코드 설명 요약
// ============================================

/*
1. encodeURIComponent()로 검색어를 URL 인코딩합니다.
2. Template Literal로 API URL을 생성합니다.
3. fetch()로 API 요청을 보냅니다.
4. response.ok로 요청 성공 여부를 확인합니다.
5. 실패 시 throw new Error()로 에러를 발생시킵니다.
6. response.json()으로 JSON 데이터를 파싱합니다.
7. return으로 데이터를 반환합니다.
*/

// ============================================
// 응답 데이터 구조
// ============================================

/*
{
  "total_count": 123456,           // 전체 검색 결과 개수
  "incomplete_results": false,     // 결과가 불완전한지 여부
  "items": [                       // 저장소 목록 (최대 6개)
    {
      "id": 10270250,
      "name": "react",
      "full_name": "facebook/react",
      "description": "A declarative, efficient...",
      "html_url": "https://github.com/facebook/react",
      "stargazers_count": 200000,
      "forks_count": 40000,
      "language": "JavaScript",
      ...
    },
    ...
  ]
}
*/

// ============================================
// 에러 처리 방법
// ============================================

/*
try-catch 블록을 사용하여 에러를 처리합니다:

try {
  const data = await fetchRepos('keyword');
  // 성공 시 실행할 코드
} catch (error) {
  // 에러 발생 시 실행할 코드
  console.error('에러:', error.message);
}
*/

// ============================================
// 주의사항
// ============================================

/*
1. GitHub API는 인증 없이 시간당 60회 요청 제한이 있습니다.
2. 네트워크 연결이 필요합니다.
3. async 함수 내에서만 await를 사용할 수 있습니다.
4. 에러 처리를 위해 try-catch를 사용하세요.
*/
