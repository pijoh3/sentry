# Sentry Sample 프로젝트

Vue 3 + Vite로 구축된 모던 웹 애플리케이션입니다.

## 기술 스택

- **Vue 3** - Composition API를 사용한 반응형 프레임워크
- **Vite** - 빠른 개발 서버와 빌드 도구

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:5173`으로 접속할 수 있습니다.

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 디렉토리에 생성됩니다.

### 빌드 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
sentry/
├── src/
│   ├── App.vue      # 메인 컴포넌트
│   ├── main.js      # 애플리케이션 진입점
│   └── style.css    # 전역 스타일
├── index.html       # HTML 템플릿
├── vite.config.js   # Vite 설정
└── package.json     # 프로젝트 의존성
```
