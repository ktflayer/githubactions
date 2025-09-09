// hello.spec.ts
    import { test, expect } from '@playwright/test';

    test('should navigate to Google and verify title', async ({ page }) => {
      await page.goto('https://www.google.com');
      await expect(page).toHaveTitle(/Google/);
      console.log('Successfully navigated to Google and verified title!');
    });