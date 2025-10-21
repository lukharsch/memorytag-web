<template>
  <button
    class="icon-button"
    :class="[variant, color, { 'has-text': text, disabled }]"
    :disabled="disabled || loading"
    @click.stop="$emit('click')"
  >
    <LoadingSpinner v-if="loading" size="small" />
    <template v-else>
      <img
        v-if="icon !== '' && icon"
        :src="`/icons/${icon}.svg`"
        :alt="icon"
        class="icon"
        :class="{ filled: variant === 'filled' }"
      />
      <span v-if="text" class="button-text">{{ text }}</span>
    </template>
  </button>
</template>

<script setup lang="ts">
import LoadingSpinner from "./LoadingSpinner.vue";

defineProps({
  icon: {
    type: String,
    required: false,
    default: "",
    validator: (value: string) => {
      return [
        "arrow-left",
        "arrow-right",
        "x",
        "edit",
        "trash",
        "check",
        "upload",
        "eye",
        "dots-vertical",
        "download",
        "filter",
        "photos",
        "logout",
        "text-caption",
        "mail",
        "",
      ].includes(value);
    },
  },
  color: {
    type: String,
    default: "blue",
    validator: (value: string) => {
      return [
        "red",
        "blue",
        "green",
        "yellow",
        "black",
        "white",
        "auto",
      ].includes(value);
    },
  },
  variant: {
    type: String,
    default: "filled",
    validator: (value: string) => {
      return ["outlined", "filled"].includes(value);
    },
  },
  text: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["click"]);
</script>

<style scoped>
.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  padding: 0;
  font-weight: 500;
}

/* Circular button (default) */
.icon-button:not(.has-text) {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

/* Text button */
.icon-button.has-text {
  height: 2rem;
  padding: 0 1rem;
  border-radius: 1.25rem;
  gap: 0.5rem;
}

.icon {
  width: 0.85rem;
  height: 0.85rem;
}

.button-text {
  font-size: 0.85rem;
}

.icon-button.filled {
  box-shadow: inset 0 0px 6px 4px rgb(0 0 0 / 20%);
}

/* Filled variant */
.filled.blue {
  background-color: var(--primary-color);
}

.filled.red {
  background-color: #dc3545;
}

.filled.green {
  background-color: #28a745;
}

.filled.yellow {
  background-color: #ffc107;
}

.filled.black {
  background-color: black;
}

.filled.white {
  background-color: white;
  color: black;
}

.filled.auto {
  background-color: var(--background-color);
  color: var(--text-color);
}

.filled.auto .icon,
.filled.auto .button-text {
  filter: var(--icon-filter) !important;
  color: var(--text-color-inverted) !important;
}

.filled:not(.white) .icon,
.filled:not(.white) .button-text {
  filter: brightness(0) invert(1);
  color: white;
}

/* Outlined variant */
.outlined {
  background-color: transparent;
  border: 1px solid black;
}

.outlined.blue {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.outlined.red {
  border-color: #dc3545;
  color: #dc3545;
}

.outlined.green {
  border-color: #28a745;
  color: #28a745;
}

.outlined.yellow {
  border-color: #ffc107;
  color: #ffc107;
}

.outlined.black {
  border-color: black;
  color: black;
}

.outlined.white {
  border-color: white;
  color: white;
}

.outlined.auto {
  border-color: var(--text-color);
  color: var(--text-color);
}

.outlined.blue .icon {
  filter: invert(22%) sepia(88%) saturate(4134%) hue-rotate(189deg)
    brightness(94%) contrast(94%);
}

.outlined.blue .button-text {
  color: var(--primary-color) !important;
}

.outlined.red .icon,
.outlined.red .button-text {
  filter: invert(40%) sepia(60%) saturate(2000%) hue-rotate(340deg)
    brightness(90%) contrast(90%);
  color: #dc3545 !important;
}

.outlined.green .icon,
.outlined.green .button-text {
  filter: invert(40%) sepia(60%) saturate(2000%) hue-rotate(90deg)
    brightness(90%) contrast(90%);
  color: #28a745 !important;
}

.outlined.yellow .icon,
.outlined.yellow .button-text {
  filter: invert(40%) sepia(60%) saturate(2000%) hue-rotate(45deg)
    brightness(90%) contrast(90%);
  color: #ffc107 !important;
}

.outlined.auto .icon,
.outlined.auto .button-text {
  filter: var(--icon-filter);
}

.icon-button:active {
  transform: scale(0.95);
}

.icon-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
