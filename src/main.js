import { createApp } from 'vue'
import * as Sentry from '@sentry/vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

Sentry.init({
  app, // Vue 앱 인스턴스 (에러 바운딩용)
  dsn: import.meta.env.VITE_SENTRY_DSN, // Sentry 프로젝트 전송 URL
  release: import.meta.env.VITE_SENTRY_RELEASE, // 소스맵 매칭용 (빌드 시 주입)
  environment: import.meta.env.MODE, // development / production 등
  integrations: [
    Sentry.browserTracingIntegration(), // 페이지 로드·네비게이션 성능 트레이싱
    Sentry.replayIntegration({
      maskAllText: false, // 입력 텍스트 가리기 여부
      blockAllMedia: false, // 미디어 요소 숨기기 여부
    }), // 세션 리플레이 (화면 녹화)
  ],
  tracesSampleRate: 1.0, // 성능 트랜잭션 수집 비율 (0~1)
  replaysSessionSampleRate: 0.1, // 전체 세션 중 리플레이 수집 비율 (0~1)
  replaysOnErrorSampleRate: 1.0, // 에러 발생 세션의 리플레이 수집 비율 (0~1)
})

app.mount('#app')
