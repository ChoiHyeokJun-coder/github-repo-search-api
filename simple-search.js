// 순수 JavaScript로 검색 버튼 클릭 시 입력값 읽기
// 초보자를 위한 상세한 주석이 포함된 코드입니다.

// ============================================
// 1단계: HTML 요소 선택하기
// ============================================

// getElementById()를 사용하여 HTML 요소를 선택합니다.
// 이렇게 선택한 요소를 변수에 저장하면 나중에 쉽게 사용할 수 있습니다.

const searchInput = document.getElementById('searchInput');       // 검색 입력창
const searchButton = document.getElementById('searchButton');     // 검색 버튼
const statusMessage = document.getElementById('statusMessage');   // 상태 메시지 영역

// ============================================
// 2단계: 검색 버튼 클릭 이벤트 처리 함수
// ============================================

/**
 * 검색 버튼을 클릭했을 때 실행되는 함수
 * 입력창의 값을 읽고 유효성을 검사합니다.
 */
function handleSearch() {
  // 2-1. 입력창의 값을 가져오기
  // .value는 input 요소의 현재 값을 가져옵니다.
  const inputValue = searchInput.value;
  
  // 2-2. 앞뒤 공백 제거하기
  // .trim()은 문자열 앞뒤의 공백을 제거합니다.
  // 예: "  react  " → "react"
  const searchTerm = inputValue.trim();
  
  // 2-3. 입력값이 비어있는지 확인하기
  // !searchTerm은 searchTerm이 빈 문자열("")일 때 true가 됩니다.
  if (!searchTerm) {
    // 입력값이 비어있으면 상태 메시지에 안내 문구 표시
    statusMessage.textContent = '검색어를 입력해 주세요.';
    return; // 함수 종료 (더 이상 진행하지 않음)
  }
  
  // 2-4. 입력값이 있으면 콘솔에 출력하기
  // console.log()는 브라우저 개발자 도구의 콘솔에 메시지를 출력합니다.
  console.log('검색어:', searchTerm);
  
  // 추가: 상태 메시지 업데이트 (선택사항)
  statusMessage.textContent = `"${searchTerm}" 검색 중...`;
}

// ============================================
// 3단계: 이벤트 리스너 등록하기
// ============================================

// addEventListener()를 사용하여 버튼 클릭 이벤트를 감지합니다.
// 'click'은 이벤트 타입이고, handleSearch는 클릭 시 실행할 함수입니다.
searchButton.addEventListener('click', handleSearch);

// ============================================
// 추가: 엔터키로도 검색할 수 있게 하기 (선택사항)
// ============================================

// 입력창에서 키를 눌렀을 때 실행되는 이벤트 리스너
searchInput.addEventListener('keypress', function(event) {
  // event.key는 눌린 키의 이름을 나타냅니다.
  // 'Enter' 키를 눌렀을 때만 검색 함수를 실행합니다.
  if (event.key === 'Enter') {
    handleSearch(); // 검색 함수 호출
  }
});

// ============================================
// 코드 설명 요약
// ============================================

/*
1. getElementById()로 HTML 요소를 선택합니다.
2. .value로 입력창의 값을 가져옵니다.
3. .trim()으로 앞뒤 공백을 제거합니다.
4. if (!searchTerm)으로 빈 값인지 확인합니다.
5. console.log()로 검색어를 콘솔에 출력합니다.
6. addEventListener()로 클릭 이벤트를 감지합니다.
*/

// ============================================
// 사용 방법
// ============================================

/*
1. HTML 파일에 이 JavaScript 파일을 연결합니다:
   <script src="simple-search.js"></script>

2. 브라우저에서 HTML 파일을 엽니다.

3. 검색창에 텍스트를 입력하고 검색 버튼을 클릭합니다.

4. F12 키를 눌러 개발자 도구를 열고 Console 탭에서 결과를 확인합니다.
*/
