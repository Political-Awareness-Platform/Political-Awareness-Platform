<template>
  <footer class="my-4">
    <hr>
    <div class="flex flex-col text-center md:flex-row md:justify-center md:flex-wrap gap-4 p-4 my-4">
      <div>
        <LangSwitcher />
      </div>
      <div>
        <UButton label="Open Source Code on"
          to="https://github.com/Political-Awareness-Platform/Political-Awareness-Platform"
          aria-label="See our works on GitHub!" title="See our works on GitHub!" target="_blank"
          rel="noopener nofollow noreferrer" color="gray" variant="solid">
          <template #trailing>
            <UAvatar src="/logos/github-mark.png" size="2xs" />
          </template>
        </UButton>
      </div>
      <div>
        <UButton label="Donation on" to="https://opencollective.com/political-awareness-platform"
          aria-label="Donation for the project" title="Donation for the project" target="_blank" color="gray"
          variant="solid">
          <template #trailing>
            <UAvatar src="/logos/open-collective.svg" size="2xs" />
          </template>
        </UButton>
      </div>
      <div>
        <UButton label="Contact" to="/contact" color="gray" variant="solid">
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right-20-solid" />
          </template>
        </UButton>
      </div>
    </div>

    <div style="text-align: center;">&copy; 2018-present</div>

  </footer>
</template>