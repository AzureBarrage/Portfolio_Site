import { test, expect } from '@playwright/test';

test('portfolio primary flows', async ({ page }) => {
  await page.route('**/', async (route, request) => {
    if (request.method() === 'POST') {
      await route.fulfill({
        status: 200,
        contentType: 'text/plain',
        body: 'ok',
      });
      return;
    }

    await route.continue();
  });

  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Julian MacLeod' })).toBeVisible();

  await page.getByRole('link', { name: 'Work' }).click();
  await expect(page.getByRole('heading', { name: 'Featured projects' })).toBeVisible();

  await page.getByRole('button', { name: 'View case study' }).first().click();
  await expect(page.getByRole('dialog')).toBeVisible();

  await page.getByRole('button', { name: 'Close details' }).click();
  await expect(page.getByRole('dialog')).toBeHidden();

  await page.getByRole('link', { name: 'Contact' }).click();

  await page
    .locator('#contact')
    .getByRole('button', { name: "Let's Collaborate", exact: true })
    .click();
  await expect(page.getByText('Please enter your name.')).toBeVisible();

  await page.getByLabel('Name').fill('Julian Tester');
  await page.getByLabel('Email').fill('tester@example.com');
  await page
    .getByLabel('Message')
    .fill('Testing contact form submission with a sufficient length message for validation.');

  await page
    .locator('#contact')
    .getByRole('button', { name: "Let's Collaborate", exact: true })
    .click();
  await expect(page.getByText('Message sent')).toBeVisible();
});
