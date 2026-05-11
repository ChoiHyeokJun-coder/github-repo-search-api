// GitHub Repository Search Board - JavaScript

// DOM 요소 선택
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const statusMessage = document.getElementById('statusMessage');
const repoList = document.getElementById('repoList');

/**
 * GitHub 저장소 검색 함수
 * 사용자가 입력한 검색어로 GitHub API를 호출하여 저장소를 검색합니다.
 */
async function searchRepositories() {
  const query = searchInput.value.trim();
  
  // 검색어가 비어있을 경우 예외 처리
  if (!query) {
    statusMessage.textContent = '검색어를 입력해주세요.';
    return;
  }

  // 1. 상태 업데이트: 검색 중
  statusMessage.textContent = `'${query}' 저장소를 검색 중입니다...`;
  repoList.innerHTML = ''; // 이전 결과 초기화

  try {
    // 2. GitHub REST API 호출
    // GitHub 저장소 검색 API URL 생성
    // - q: 검색어 (keyword)
    // - sort: stars (별점 기준 정렬)
    // - order: desc (내림차순)
    // - per_page: 6 (결과 6개만 가져오기)
    const keyword = query;
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(keyword)}&sort=stars&order=desc&per_page=6`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('API 호출에 실패했습니다.');
    }

    const data = await response.json();

    // 3. 상태 업데이트: 결과 유무 확인
    if (data.items.length === 0) {
      statusMessage.textContent = '검색 결과가 없습니다.';
      return;
    }
    
    statusMessage.textContent = `총 ${data.total_count.toLocaleString()}개의 저장소가 발견되었습니다. (상위 6개 표시)`;

    // 4. 저장소 카드 생성 및 화면에 렌더링
    data.items.forEach(repo => {
      const card = document.createElement('div');
      card.className = 'repo-card';

      card.innerHTML = `
        <h3>${repo.full_name}</h3>
        <p>${repo.description ? repo.description : '설명이 없습니다.'}</p>
        <div class="repo-stats">
          <span>⭐ ${repo.stargazers_count.toLocaleString()}</span>
          <span>🍴 ${repo.forks_count.toLocaleString()}</span>
        </div>
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-link">
          GitHub에서 보기
        </a>
      `;
      
      repoList.appendChild(card);
    });

  } catch (error) {
    // 에러 발생 시 상태 메시지 업데이트
    statusMessage.textContent = `에러가 발생했습니다: ${error.message}`;
  }
}

// 이벤트 리스너 등록
searchButton.addEventListener('click', searchRepositories);

// 엔터키를 눌러도 검색되도록 지원
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchRepositories();
  }
});
