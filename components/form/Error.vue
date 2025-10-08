<template>
  <ErrorMessage v-slot="{ message }" :name="name" >
    <div v-if="message" class="error">{{ message }}</div>
  </ErrorMessage>
</template>

<script setup lang="ts">
import { ErrorMessage } from "vee-validate"

defineProps<{
  name: string
}>()
</script>

<style scoped lang="scss">
.error {
  color: var(--c-accent);
  font-size: .625rem;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
}
</style>
