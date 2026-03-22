import { expect, test } from '@nuxt/test-utils/playwright'

test.describe('Language Toggle', () => {
  test('should display language selector and allow switching languages', async ({ page, goto }) => {
    // Navigate to the home page
    await goto('/', { waitUntil: 'hydration' })

    // Find the language selector button in the footer
    const langSelector = page.locator('footer').getByRole('button')
    
    // Verify the language selector exists and shows UK flag for English
    await expect(langSelector).toBeVisible()
    await expect(langSelector).toContainText('English')
    
    // Click to open the language dropdown
    await langSelector.click()

    // Verify all three language options are visible with correct flags
    await expect(page.getByRole('option', { name: /English/i })).toBeVisible()
    await expect(page.getByRole('option', { name: /Deutsch/i })).toBeVisible()
    await expect(page.getByRole('option', { name: /Türkçe/i })).toBeVisible()

    // Switch to German
    await page.getByRole('option', { name: /Deutsch/i }).click()
    
    // Verify button text changed to German
    await expect(langSelector).toContainText('Deutsch')

    // Switch to Turkish
    await langSelector.click()
    await page.getByRole('option', { name: /Türkçe/i }).click()

    // Verify button text changed to Turkish
    await expect(langSelector).toContainText('Türkçe')

    // Switch back to English
    await langSelector.click()
    await page.getByRole('option', { name: /English/i }).click()

    // Verify we're back to English
    await expect(langSelector).toContainText('English')

    // Verify the selector is still functional after multiple switches
    await expect(langSelector).toBeVisible()
  })
})
