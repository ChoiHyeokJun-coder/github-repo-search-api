// GitHub REST API 저장소 검색 URL 생성 함수
// 사용자가 입력한 검색어로 GitHub 저장소를 검색하는 URL을 만듭니다.

/**
 * GitHub 저장소 검색 URL을 생성하는 함수
 * @param {string} keyword - 검색할 키워드 (예: 'react', 'vue', 'javascript')
 * @returns {string} - 완성된 GitHub API URL
 */
function buildGitHubSearchURL(keyword) {
  // 기본 URL: GitHub 저장소 검색 API 엔드포인트
  const baseURL = 'https://api.github.com/search/repositories';
  
  // 검색어를 URL에 안전하게 사용할 수 있도록 인코딩
  // 예: 'machine learning' -> 'machine%20learning'
  const encodedKeyword = encodeURIComponent(keyword);
  
  // Template Literal을 사용하여 완성된 URL 생성
  const url = `${baseURL}?q=${encodedKeyword}&sort=stars&order=desc&per_page=6`;
  
  // 파라미터 설명:
  // - q: 검색어 (query)
  // - sort=stars: 별점(stars) 기준으로 정렬
  // - order=desc: 내림차순(descending) 정렬 (높은 별점부터)
  // - per_page=6: 결과를 6개만 가져오기
  
  return url;
}

// ============================================
// 사용 예시
// ============================================

// 예시 1: 'react' 검색
const keyword1 = 'react';
const url1 = buildGitHubSearchURL(keyword1);
console.log('검색어: react');
console.log('URL:', url1);
console.log('');

// 예시 2: 'vue.js' 검색
const keyword2 = 'vue.js';
const url2 = buildGitHubSearchURL(keyword2);
console.log('검색어: vue.js');
console.log('URL:', url2);
console.log('');

// 예시 3: 'machine learning' 검색 (공백 포함)
const keyword3 = 'machine learning';
const url3 = buildGitHubSearchURL(keyword3);
console.log('검색어: machine learning');
console.log('URL:', url3);
console.log('');

// ============================================
// fetch를 사용한 실제 API 호출 예시
// ============================================

/**
 * GitHub 저장소를 검색하고 결과를 반환하는 함수
 * @param {string} keyword - 검색할 키워드
 * @returns {Promise<Array>} - 검색된 저장소 목록 (최대 6개)
 */
async function searchGitHubRepositories(keyword) {
  // 1. URL 생성
  // GitHub API 검색 URL을 만듭니다
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;
  
  try {
    // 2. API 호출
    // fetch를 사용하여 GitHub API에 요청을 보냅니다
    const response = await fetch(url);
    
    // 3. 응답 확인
    // API 호출이 성공했는지 확인합니다
    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.status}`);
    }
    
    // 4. JSON 데이터 파싱
    // 응답 데이터를 JSON 형식으로 변환합니다
    const data = await response.json();
    
    // 5. 결과 반환
    // items 배열에 검색된 저장소 목록이 들어있습니다 (최대 6개)
    return data.items;
    
  } catch (error) {
    // 에러 처리
    console.error('검색 중 오류 발생:', error);
    return [];
  }
}

// ============================================
// 간단한 사용 예시 (한 줄로 URL 생성)
// ============================================

// 방법 1: 변수에 저장하여 사용
const keyword = 'javascript';
const searchURL = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;

// 방법 2: fetch에서 직접 사용
fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`)
  .then(response => response.json())
  .then(data => {
    console.log('검색 결과:', data.items);
  });

// 방법 3: async/await와 함께 사용
async function example() {
  const keyword = 'python';
  
  // URL 생성 (template literal 사용)
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;
  
  // API 호출
  const response = await fetch(url);
  const data = await response.json();
  
  // 결과 출력
  console.log(`"${keyword}" 검색 결과:`, data.items);
}
