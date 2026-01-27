<template>
  <div class="mt-12" id="contact">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ $t('ContactPage.Title') }}</h2>
      <p class="mt-2 text-lg leading-8 text-muted">{{ $t('ContactPage.SubHeader') }}</p>
    </div>

    <UForm id="contactForm" :state="formState" class="mx-auto max-w-xl mt-12" @submit="handleSubmit">
      <input type="hidden" name="access_key" value="26b059f4-eedb-47a7-a6ca-32c8df7497a6">
      <input type="hidden" name="subject" value="New Submission via Web3Forms">
      <input type="checkbox" name="botcheck" id="" style="display: none;">

      <UFormField :label="$t('ContactPage.Name')" name="name" class="mb-4">
        <UInput v-model="formState.name" size="lg" class="w-full" required />
      </UFormField>

      <UFormField :label="$t('ContactPage.Email')" name="email" class="mb-4">
        <UInput v-model="formState.email" type="email" size="lg" class="w-full" required />
      </UFormField>

      <UFormField :label="$t('ContactPage.Message')" name="message" class="mb-4">
        <UTextarea v-model="formState.message" :rows="4" size="lg" class="w-full" required />
      </UFormField>

      <div class="mt-8 text-center">
        <UButton type="submit" color="primary" size="lg" :class="{ 'bg-red-600': sendingError }">
          {{ $t('ContactPage.SubmitButtonText') }}
        </UButton>
        <div class="my-6 tracking-wider text-muted" id="result"></div>
      </div>
    </UForm>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const sendingError = ref(false);

const formState = reactive({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  const object = {
    access_key: "26b059f4-eedb-47a7-a6ca-32c8df7497a6",
    subject: "New Submission via Web3Forms",
    ...formState,
  };
  const json = JSON.stringify(object);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      const json = await response.json();
      const result = document.getElementById("result");
      if (response.status === 200) {
        if (result) result.innerHTML = json.message;
      } else {
        console.log(response);
        if (result) result.innerHTML = json.message;
      }
    })
    .then(() => {
      formState.name = "";
      formState.email = "";
      formState.message = "";
      const result = document.getElementById("result");
      setTimeout(() => {
        if (result) result.style.display = "none";
      }, 3000);
    })
    .catch((error) => {
      console.log(error);
      const result = document.getElementById("result");
      if (result) result.innerHTML = "Something went wrong!";
      sendingError.value = true;
      setTimeout(() => {
        sendingError.value = false;
      }, 2000);
    });
};
</script> 