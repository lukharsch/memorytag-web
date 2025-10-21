<template>
  <div class="loading-spinner" :class="{ small: size === 'small' }"></div>
</template>

<script setup lang="ts">
defineProps<{
  size?: "small" | "default";
}>();
</script>

<style scoped>
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s ease-in-out infinite;
}

.loading-spinner.small {
  width: 1rem;
  height: 1rem;
  border-width: 2px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
