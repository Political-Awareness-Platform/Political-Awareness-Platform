<template>
  <UFooter>
    <template #left>
      <LangSwitcher />
    </template>

    <div class="flex items-center gap-3">
      <UButton
        label="Open Source Code"
        to="https://github.com/Political-Awareness-Platform/Political-Awareness-Platform"
        aria-label="See our works on GitHub!"
        title="See our works on GitHub!"
        target="_blank"
        rel="noopener nofollow noreferrer"
        color="neutral"
        variant="ghost"
        size="md"
      >
        <template #leading>
          <UIcon name="i-simple-icons-github" class="w-5 h-5" />
        </template>
      </UButton>

      <UButton
        label="Donate"
        to="https://opencollective.com/political-awareness-platform"
        aria-label="Donation for the project"
        title="Donation for the project"
        target="_blank"
        color="neutral"
        variant="ghost"
        size="md"
      >
        <template #leading>
          <UIcon name="i-heroicons-heart" class="w-5 h-5" />
        </template>
      </UButton>

      <UButton 
        label="Contact" 
        to="/contact" 
        color="neutral" 
        variant="ghost"
        size="md"
      >
        <template #leading>
          <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
        </template>
      </UButton>
    </div>

    <template #right>
      <span class="text-sm text-muted">&copy; 2018-present</span>
    </template>
  </UFooter>
</template>