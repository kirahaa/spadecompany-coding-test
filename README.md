# 스페이드컴퍼니 면접 과제 React Sidebar Tree Navigation

## 프로젝트 개요
React와 Emotion을 사용해 구현한 사이드바 메뉴 트리 컴포넌트입니다.  
React Router와 연동해 현재 경로에 따라 활성 메뉴를 자동으로 감지하고, 사이드바 너비를 드래그로 조절할 수 있습니다.

## 주요 기능
- 계층적 트리 메뉴 구조 출력
- 현재 활성 메뉴 항목 표시 (active 상태)
- 메뉴 항목 클릭 시 활성 상태 변경 및 라우팅 반영
- 사이드바 너비 실시간 리사이징 (마우스 드래그)
- Fixed/Floating 모드 토글 기능 제공

## 사용 기술
- React (Functional Components, Hooks)
- Emotion (styled components)
- React Router (useLocation)

## 설치 및 실행 방법
```bash
git clone https://github.com/kirahaa/spadecompany-coding-test.git

cd spadecompany-coding-test

npm install

npm start
