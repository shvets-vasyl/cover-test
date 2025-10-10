<template>
  <Form :validation-schema="schema" class="form" @submit="onSubmit">
    <div class="field">
      <FormInput name="name" type="text" placeholder="Your Name" required />
    </div>

    <div class="field">
      <FormInput name="email" type="email" placeholder="Email" required />
    </div>

    <div class="field field-phone">
      <FormInput name="phone" type="tel" placeholder="Phone Number" required />
    </div>

		<div class="area">
    	<FormTextarea placeholder="Message" name="message" />
		</div>

    <p class="descr p2">
      To reach DOGADOGA AGENCY or request a custom proposal for your project,
      please fill out the form below — our team will get back to you within 24
      hours.
    </p>

    <FormButton :text="sended ? 'Sended! Thank you!' : 'Send'" />
  </Form>
</template>
<script setup lang="ts">
import { Form } from "vee-validate";
import type { SubmissionHandler } from "vee-validate";
import * as yup from "yup";

definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
});

const sended = ref(false)

type TypeValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// ----- FORM SCHEMA
const schema = yup.object({
  name: yup
    .string()
    .required("Is a required field")
    .min(2, "Must be at least 2 characters")
    .matches(/^[^\d]*$/, "Invalid format"),
  email: yup
    .string()
    .required("Is a required field")
    .matches(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
      "Enter a valid e-mail (e.g. test@gmail.com)"
    ),

  phone: yup
    .string()
    .required("Is a required field")
    .min(8, "Must be at least 8 characters")
    .max(15, "Must be less than 15 characters"),

  message: yup.string(),
});

// ----- FORM SUBMIT
const onSubmit: SubmissionHandler<any> = async (values: TypeValues, { resetForm }) => {
	sended.value = true
	const gmRes = await $fetch("/api/form", {
    method: "POST",
    body: JSON.stringify(values),
  })

  console.log("gmail", gmRes);
	resetForm()

	setTimeout(() => {
		sended.value = false
	}, 5000)
};
</script>
<style scoped lang="scss">
.descr {
  margin: 1.5rem auto;
  width: 25.5625rem;
  text-align: center;
  opacity: 0.5;
	@include mobile {
		width: 100%;
	}
}
.field {
  margin-bottom: 2rem;
	@include mobile {
		margin-bottom: 0;
	}
}
.field-phone {
	margin-bottom: 3.375rem;
	@include mobile {
		margin-bottom: 1.5rem;
	}
}
</style>
