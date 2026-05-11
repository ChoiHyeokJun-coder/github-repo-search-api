# GitHub 저장소 생성 가이드

## 🎯 목표
로컬 Git 저장소를 GitHub에 업로드하여 온라인에 기록 남기기

---

## 📋 현재 상태

✅ **완료된 작업:**
- Git 저장소 초기화 완료
- 모든 파일 커밋 완료 (커밋 해시: f895732)
- 총 5개 파일, 915줄 추가

❌ **필요한 작업:**
- GitHub 원격 저장소 생성
- 로컬 저장소를 GitHub에 푸시

---

## 🚀 방법 1: GitHub CLI 사용 (추천)

### 1단계: GitHub CLI 인증
```bash
gh auth login
```

인증 후 다음 명령어 실행:

### 2단계: 저장소 생성 및 푸시
```bash
gh repo create github-repo-search-api --public --source=. --remote=origin --push --description="GitHub REST API를 사용한 저장소 검색 URL 생성기 - Template Literal 방식, stars 기준 정렬, 6개 결과 제한"
```

---

## 🌐 방법 2: GitHub 웹사이트 사용

### 1단계: GitHub에서 새 저장소 생성

1. https://github.com/new 접속
2. 저장소 정보 입력:
   - **Repository name**: `github-repo-search-api`
   - **Description**: `GitHub REST API를 사용한 저장소 검색 URL 생성기`
   - **Visibility**: Public (공개) 또는 Private (비공개)
   - ⚠️ **중요**: "Initialize this repository with a README" 체크 해제
3. "Create repository" 클릭

### 2단계: 로컬 저장소와 연결

GitHub에서 생성된 저장소 페이지에 표시되는 명령어 중 다음을 실행:

```bash
# 원격 저장소 추가
git remote add origin https://github.com/YOUR_USERNAME/github-repo-search-api.git

# 기본 브랜치 이름 설정 (필요시)
git branch -M main

# GitHub에 푸시
git push -u origin main
```

**YOUR_USERNAME**을 본인의 GitHub 사용자명으로 변경하세요.

---

## 🔧 방법 3: SSH 사용 (고급)

### 1단계: SSH 키 설정 (처음 한 번만)

```bash
# SSH 키 생성
ssh-keygen -t ed25519 -C "your_email@example.com"

# SSH 에이전트 시작
eval "$(ssh-agent -s)"

# SSH 키 추가
ssh-add ~/.ssh/id_ed25519

# 공개 키 복사
cat ~/.ssh/id_ed25519.pub
```

복사한 공개 키를 GitHub 설정에 추가:
- https://github.com/settings/keys
- "New SSH key" 클릭
- 공개 키 붙여넣기

### 2단계: 저장소 연결 및 푸시

```bash
# 원격 저장소 추가 (SSH)
git remote add origin git@github.com:YOUR_USERNAME/github-repo-search-api.git

# 기본 브랜치 이름 설정
git branch -M main

# GitHub에 푸시
git push -u origin main
```

---

## 📝 푸시 후 확인사항

GitHub 저장소에서 다음을 확인하세요:

✅ **파일 목록:**
- index.html
- github-api-url-builder.js
- README.md
- API_URL_EXAMPLE.md
- PROMPT.md

✅ **커밋 히스토리:**
- "feat: GitHub 저장소 검색 API URL 생성기 구현" 커밋 확인

✅ **README.md 표시:**
- GitHub 저장소 메인 페이지에 README.md 내용이 자동으로 표시됨

---

## 🎨 추가 설정 (선택사항)

### GitHub Pages 활성화 (웹사이트 호스팅)

1. 저장소 Settings 탭 이동
2. 왼쪽 메뉴에서 "Pages" 선택
3. Source: "Deploy from a branch" 선택
4. Branch: "main" 선택, 폴더: "/ (root)" 선택
5. "Save" 클릭

몇 분 후 다음 URL에서 웹사이트 확인 가능:
```
https://YOUR_USERNAME.github.io/github-repo-search-api/
```

### Topics 추가 (검색 최적화)

저장소 메인 페이지에서 "Add topics" 클릭 후 추가:
- `github-api`
- `javascript`
- `rest-api`
- `repository-search`
- `template-literals`
- `fetch-api`

---

## 🔍 문제 해결

### 문제 1: "gh: command not found"
**해결책**: GitHub CLI 설치 필요
```bash
# Windows (winget)
winget install --id GitHub.cli

# 또는 Chocolatey
choco install gh
```

### 문제 2: "Permission denied (publickey)"
**해결책**: SSH 키 설정 필요 (방법 3 참조) 또는 HTTPS 사용

### 문제 3: "remote origin already exists"
**해결책**: 기존 원격 저장소 제거 후 재추가
```bash
git remote remove origin
git remote add origin YOUR_REPOSITORY_URL
```

### 문제 4: "failed to push some refs"
**해결책**: 강제 푸시 (주의: 원격 저장소 내용 덮어씀)
```bash
git push -u origin main --force
```

---

## 📚 참고 자료

- [GitHub CLI 공식 문서](https://cli.github.com/manual/)
- [GitHub 저장소 생성 가이드](https://docs.github.com/en/get-started/quickstart/create-a-repo)
- [Git 원격 저장소 관리](https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EB%A6%AC%EB%AA%A8%ED%8A%B8-%EC%A0%80%EC%9E%A5%EC%86%8C)
- [GitHub Pages 설정](https://docs.github.com/en/pages/getting-started-with-github-pages)

---

## ✅ 체크리스트

완료 후 체크하세요:

- [ ] GitHub CLI 인증 완료 또는 웹사이트에서 저장소 생성
- [ ] 원격 저장소 연결 (`git remote add origin`)
- [ ] GitHub에 푸시 (`git push -u origin main`)
- [ ] GitHub 저장소에서 파일 확인
- [ ] README.md가 제대로 표시되는지 확인
- [ ] (선택) GitHub Pages 활성화
- [ ] (선택) Topics 추가

---

**작성일**: 2026년 5월 11일  
**프로젝트**: GitHub 저장소 검색 URL 생성기  
**로컬 커밋**: f895732
