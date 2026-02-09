import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { sentryVitePlugin } from '@sentry/vite-plugin'

// 소스맵 업로드: .env에 SENTRY_ORG, SENTRY_PROJECT, SENTRY_AUTH_TOKEN 설정
// https://docs.sentry.io/platforms/javascript/sourcemaps/uploading/vite/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const release = env.SENTRY_RELEASE || `sentry@${Date.now()}`

  return {
    build: {
      sourcemap: "hidden",
    },
    define: {
      'import.meta.env.VITE_SENTRY_RELEASE': JSON.stringify(release),
    },
    plugins: [
      vue(),
      sentryVitePlugin({
        org: env.SENTRY_ORG,
        project: env.SENTRY_PROJECT,
        authToken: env.SENTRY_AUTH_TOKEN,
        release: { name: release },
        sourcemaps: {
          assets: './dist/**',
          filesToDeleteAfterUpload: ['./dist/**/*.map'],
        },
      }),
    ],
  }
})
