<template>
  <div class="h-screen">
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#app-wrapper {
  height: 100vh;
}
</style>
