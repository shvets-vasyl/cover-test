<template>
  <Field v-slot="{ field, meta }" :name="name">
    <div class="field" :class="{ error: meta.touched && !meta.valid }">
      <input
        v-bind="field"
        :id="name"
        :type="type"
				:placeholder="placeholder"
        class="input"
        @input="onInput($event, field)"
      />
      <FormError :name="name" />
    </div>
  </Field>
</template>

<script setup lang="ts">
import { Field } from "vee-validate"

const props = defineProps<{
  name: string
  type: string
	placeholder: string
  required?: boolean
}>()

function onInput(e: Event, field: any) {
  const input = e.target as HTMLInputElement

  if (props.type === "tel") {
    let format = input.value.replace(/\D/g, "")

    if (!format) {
      field.onChange("")
      return
    }

    field.onChange(format)
  }
}
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  flex-direction: column;
  position: relative;
}
.input {
  height: 3.5rem;
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
.input::placeholder {
  opacity: 1;
	font-family: var(--font-semibold);
	color: var(--c-accent);
}

// error
.field.error .input {
  border-width: .1875rem;
}
</style>
