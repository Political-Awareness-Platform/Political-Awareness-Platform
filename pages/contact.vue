<template>
  <div class="px-6 mt-12 lg:px-8" id="contact">

    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">{{ $t('ContactPage.Title') }}</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">{{ $t('ContactPage.SubHeader') }}</p>
    </div>

    <form id="contactForm" method="POST" @submit.prevent="handleSubmit" class="mx-auto max-w-xl sm:mt-12">
      <input type="hidden" name="access_key" value="26b059f4-eedb-47a7-a6ca-32c8df7497a6">
      <input type="hidden" name="subject" value="New Submission via Web3Forms">
      <input type="checkbox" name="botcheck" id="" style="display: none;">

      <div class="grid grid-cols-1 gap-x-8 gap-y-6 p-2 sm:grid-cols-2">

        <div class="sm:col-span-2">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-700">{{ $t('ContactPage.Name') }}</label>
          <input type="text" name="name" id="name" autocomplete="given-name"
            class="block w-full p-3 text-sm rounded-lg text-gray-900 bg-gray-50 border border-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            required />
        </div>

        <div class="sm:col-span-2">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-700">{{ $t('ContactPage.Email') }}</label>
          <input type="email" name="email" id="email" autocomplete="email"
            class="block w-full p-3 text-sm rounded-lg text-gray-900 bg-gray-50 border border-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            required />
        </div>

        <div class="sm:col-span-2">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-700">{{ $t('ContactPage.Message') }}</label>
          <textarea name="message" id="message" rows="4"
            class="block w-full p-3 text-sm rounded-lg text-gray-900 bg-gray-50 border border-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            required />
        </div>

      </div>
      <div class="mt-8 text-center">
        <button type="submit" id="formSendButton"
          class="btn btn-primary py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          :class="{ 'bg-red-600 focus:ring-red-400 hover:bg-red-800 border-red-600': sendingError }">{{
            $t('ContactPage.SubmitButtonText')
          }}</button>

        <div class="my-6 tracking-wider text-gray-600" id="result"></div>

      </div>
    </form>

  </div>
</template>

<script setup>
const { locale } = useI18n()
// const sendButtonText = ref("Send message");
const sendingError = ref(false);

const handleSubmit = (event) => {
  const contactForm = event.target;
  const formData = new FormData(contactForm);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        // window.location.href = "success.html"
        result.innerHTML = json.message;
        if (locale.value == "en-GB") {
          document.getElementById('formSendButton').innerHTML = "Thank You!!"
        } else if (locale.value == "tr-TR") {
          document.getElementById('formSendButton').innerHTML = "Tesekkürler!!"
        } else if (locale.value == "de-DE") {
          document.getElementById('formSendButton').innerHTML = "Vielen Dank!!"
        };
        setTimeout(() => {
          if (locale.value == "en-GB") {
            document.getElementById('formSendButton').innerHTML = "Send Another Message"
          } else if (locale.value == "tr-TR") {
            document.getElementById('formSendButton').innerHTML = "Yeni Mesaj Gönder"
          } else if (locale.value == "de-DE") {
            document.getElementById('formSendButton').innerHTML = "Weitere Nachricht senden"
          };
        }, 2000)
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .then(function () {
      document.getElementById("contactForm").reset();
      setTimeout(() => result.style.display = "none", 3000);
    })
    .catch(error => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
      sendingError.value = true;
      setTimeout(() => sendingError.value = false, 2000)
    })


};
</script> 