<template>
  <UHeader title="Political Awareness Platform" to="/">
    <template #title>
      <span class="text-xl font-bold bg-gradient-to-r from-[#0099ff] to-[#41b300] bg-clip-text text-transparent md:text-2xl">
        Political Awareness Platform
      </span>
    </template>


    <template #body>
      <div class="flex flex-col gap-4">
        <UButton to="/" variant="ghost" size="lg" class="justify-start">
          Home
        </UButton>
        <UButton to="/contact" variant="ghost" size="lg" class="justify-start">
          Contact
        </UButton>
        <UColorModeButton />
      </div>
    </template>
  </UHeader>
</template>