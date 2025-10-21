<template>
  <Transition name="dropdown-fade-slide">
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h2>{{ modalTitle }}</h2>
          <IconButton
            v-if="!noClose"
            icon="x"
            variant="outlined"
            color="auto"
            @click="closeModal"
          />
        </div>

        <div class="modal-content">
          <slot />
          <div class="modal-actions">
            <slot name="actions" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import IconButton from "./IconButton.vue";
import { watch } from "vue";

const props = withDefaults(
  defineProps<{
    isOpen: boolean;
    modalTitle: string;
    noClose?: boolean;
  }>(),
  {
    noClose: false,
  },
);

const globalStore = useGlobalStore();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeModal = () => {
  emit("close");
};

// Prevent background scrolling when modal is open
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  },
);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  overflow-y: auto;
}

.modal-container {
  background-color: var(--surface-color);
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  margin: 2rem auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.modal-header h2 {
  margin: 0;
  font-size: 1.25rem;
  color: var(--text-color);
}

.modal-content {
  padding: 1rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .modal-container {
    width: 95%;
  }
}

.dropdown-fade-slide-enter-active,
.dropdown-fade-slide-leave-active {
  transition:
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.dropdown-fade-slide-enter-from,
.dropdown-fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.dropdown-fade-slide-enter-to,
.dropdown-fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
