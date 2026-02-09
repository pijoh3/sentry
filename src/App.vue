<template>
  <div class="app">
    <header class="header">
      <h1>Team Sync - Sentry</h1>
    </header>

    <main class="main">
      <section class="section">
        <h2>에러 수집 확인 (유형별 테스트)</h2>
        <div class="buttons">
          <button type="button" class="btn" @click="throwSyncError">
            Sync Error (throw)
          </button>
          <button type="button" class="btn" @click="throwPromiseRejection">
            Unhandled Promise Rejection
          </button>
          <button type="button" class="btn" @click="throwReferenceError">
            ReferenceError
          </button>
          <button type="button" class="btn" @click="throwTypeError">
            TypeError
          </button>
          <button type="button" class="btn" @click="captureException">
            captureException (수동)
          </button>
          <button type="button" class="btn" @click="captureMessage">
            captureMessage (수동)
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import * as Sentry from '@sentry/vue'

function throwSyncError() {
  throw new Error('[Team Sync] Sync Error - throw new Error 테스트')
}

function throwPromiseRejection() {
  Promise.reject(new Error('[Team Sync] Unhandled Promise Rejection 테스트'))
}

function throwReferenceError() {
  // eslint-disable-next-line no-undef
  return undefinedVariable
}

function throwTypeError() {
  const o = null
  return o.foo
}

function captureException() {
  Sentry.captureException(new Error('[Team Sync] captureException 수동 전송 테스트'))
}

function captureMessage() {
  Sentry.captureMessage('[Team Sync] captureMessage 수동 전송 테스트', 'warning')
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  padding: 2rem;
  background: #1a1a2e;
  color: #eee;
}

.header h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.main {
  flex: 1;
  padding: 2rem;
  background: #16213e;
}

.section {
  max-width: 640px;
  margin: 0 auto;
}

.section h2 {
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: #94a3b8;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.btn {
  padding: 0.6rem 1rem;
  font-size: 0.875rem;
  border: 1px solid #334155;
  border-radius: 6px;
  background: #0f172a;
  color: #e2e8f0;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.btn:hover {
  background: #1e293b;
  border-color: #475569;
}
</style>
