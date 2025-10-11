<template>
  <div class="cookie" v-if="ready && !accepted">
    <div class="cookie-banner">
      <p class="banner-text p1">
        We use cookies to make this site work and to understand how it’s used.
        You can manage your preferences anytime.
      </p>
      <div class="banner-actions">
        <button @click="acceptAll">
          <CommonButtonTemplate text="Accept all" dark />
        </button>
        <button @click="rejectNonEssential">
          <CommonButtonTemplate text="Reject non-essential" dark />
        </button>
        <button @click="openPreferences">
          <CommonButtonTemplate text="Manage preferences" dark />
        </button>
      </div>
    </div>

    <div v-if="showModal" class="modal">
      <div class="modal-inner">
        <h3 class="h5">Cookie Preferences</h3>

        <div class="pref">
          <label>Essential cookies – always active</label>
          <input type="checkbox" checked disabled />
        </div>

        <div class="pref" v-for="(value, key) in prefs" :key="key">
          <label>{{ key }} cookies</label>
          <input type="checkbox" v-model="prefs[key]" />
        </div>

        <button @click="savePreferences" class="btn save">
					<CommonButtonTemplate text="Save preferences" dark />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const ready = ref(false)
const accepted = ref(false)
const showModal = ref(false)
const prefs = ref({
  Analytics: false,
  Functional: false,
  Marketing: false,
})


onMounted(() => {
  accepted.value = localStorage.getItem("cookieAccepted") === "true"
  const saved = localStorage.getItem("cookiePrefs")
  if (saved) prefs.value = JSON.parse(saved)
  ready.value = true // показуємо тільки після ініціалізації
})

watch(
  prefs,
  (v) => {
    if (process.client) localStorage.setItem("cookiePrefs", JSON.stringify(v));
  },
  { deep: true }
);

function finalize() {
  accepted.value = true;
  if (process.client) {
    localStorage.setItem("cookieAccepted", "true");
    localStorage.setItem("cookiePrefs", JSON.stringify(prefs.value));
  }
}

function acceptAll() {
  prefs.value = { Analytics: true, Functional: true, Marketing: true };
  finalize();
}

function rejectNonEssential() {
  prefs.value = { Analytics: false, Functional: false, Marketing: false };
  finalize();
}

function openPreferences() {
  showModal.value = true;
}

function savePreferences() {
  finalize();
  showModal.value = false;
}
</script>

<style scoped lang="scss">

.cookie {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: var(--c-accent);
  color: var(--c-dark);
  padding: 1rem;
  z-index: var(--z-cookie);
  width: 31.3125rem;

	@include mobile {
		width: 100%;
		right: 0;
		bottom: 0;
	}
}

.banner-text {
  margin-bottom: 1rem;
}

.banner-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
}
.modal-inner {
  background: var(--c-accent);
  color: var(--c-dark);
  padding: 1rem;
  width: 90%;
  max-width: 25rem;
}

.pref {
  display: flex;
  justify-content: space-between;
  margin: 0.75rem 0;
}

.save {
  width: 100%;
  margin-top: 1rem;
}

input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 1rem;
  height: 1rem;
  border: 1px solid var(--c-dark);
  cursor: pointer;
  position: relative;
  transition: background 0.2s ease;

  &:checked {
    background: var(--c-dark);
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
}
</style>
