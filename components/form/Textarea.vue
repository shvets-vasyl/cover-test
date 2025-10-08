<template>
	<Field v-slot="{ field, meta }" :name="name">
    <div class="field" :class="{ error: meta.touched && !meta.valid }">

			<textarea
        v-bind="field"
        :id="name"
				:placeholder="placeholder"
        class="textarea"
      />
      <FormError :name="name" />
    </div>
  </Field>
</template>

<script setup lang="ts">
import { Field } from "vee-validate"

defineProps<{
  name: string
  placeholder: string
}>()
</script>

<style scoped lang="scss">
.field {
  display: flex;
  flex-direction: column;
  position: relative;
}
.textarea {
  min-height: 4.5rem;
  resize: none;
  border: none;

  border: none;
  border-radius: 0;
  outline: none;
  display: block;
  background: none;
  border-bottom: 1px solid var(--c-accent);

  font-family: var(--font-semibold);
  font-size: 0.875rem;
	line-height: 120%;
	letter-spacing: -0.07em;
	color: var(--c-accent);
	text-align: center;
}

.textarea::placeholder {
  opacity: 1;
	font-family: var(--font-semibold);
	color: var(--c-accent);
}

// error
.field.error .textarea {
  border-width: .1875rem;
}
</style>
