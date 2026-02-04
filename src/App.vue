<template>
  <div class="app">
    <header class="header">
      <h1>🚀 Sentry Sample 프로젝트</h1>
      <p class="subtitle">Vue 3 + Vite로 구축된 모던 웹 애플리케이션</p>
    </header>
    
    <main class="main">
      <div class="card">
        <h2>환영합니다! 👋</h2>
        <p>이 프로젝트는 Vue 3와 Vite를 사용하여 만들어졌습니다.</p>
        
        <div class="counter-section">
          <button @click="decrement" class="btn btn-secondary">-</button>
          <span class="counter">{{ count }}</span>
          <button @click="increment" class="btn btn-primary">+</button>
        </div>
        
        <div class="info-section">
          <h3>프로젝트 정보</h3>
          <ul>
            <li>✅ Vue 3 Composition API</li>
            <li>⚡ Vite 빌드 도구</li>
            <li>🎨 모던 UI 디자인</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
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
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.header h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  font-weight: 700;
}

.subtitle {
  margin: 0;
  font-size: 1.2rem;
  opacity: 0.9;
}

.main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #f5f7fa;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  text-align: center;
}

.card h2 {
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 2rem;
}

.card > p {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.counter-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
}

.counter {
  font-size: 3rem;
  font-weight: bold;
  color: #667eea;
  min-width: 80px;
}

.btn {
  padding: 0.75rem 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5568d3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: #e2e8f0;
  color: #333;
}

.btn-secondary:hover {
  background: #cbd5e0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.info-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
  text-align: left;
}

.info-section h3 {
  margin: 0 0 1rem 0;
  color: #333;
}

.info-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-section li {
  padding: 0.5rem 0;
  color: #666;
  font-size: 1rem;
}
</style>
