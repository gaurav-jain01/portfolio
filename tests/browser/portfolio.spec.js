const { test, expect } = require('@playwright/test');

test('loads the portfolio and filters projects without runtime errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle('Gaurav Jain — Full-Stack Developer');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('.project-card')).toHaveCount(5);
  await page.getByRole('button', { name: 'Desktop', exact: true }).click();
  await expect(page.locator('.project-card')).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'CYE Compiler' })).toBeVisible();
  await page.getByRole('button', { name: 'Web & AI', exact: true }).click();
  await expect(page.locator('.project-card')).toHaveCount(4);
  await expect(page.getByRole('heading', { name: 'RepoGuardian AI' })).toBeVisible();
  await page.getByRole('button', { name: 'All projects' }).click();
  await expect(page.locator('.project-card')).toHaveCount(5);
  expect(errors).toEqual([]);
});

test('persists theme and supports pausing animations', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Switch to light theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.getByRole('button', { name: 'Pause animations' }).click();
  await expect(page.locator('[data-motion]')).toHaveAttribute('data-motion', 'off');
  await expect(page.locator('.ribbon-track')).toHaveCSS('animation-play-state', 'paused');
  await page.getByRole('button', { name: 'Resume animations' }).click();
  await expect(page.locator('[data-motion]')).toHaveAttribute('data-motion', 'on');
});

test('mobile navigation supports Escape, selection, and keyboard access', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  const menu = page.getByRole('button', { name: 'Open menu' });
  await menu.click();
  const nav = page.getByRole('navigation', { name: 'Mobile navigation' });
  await expect(nav).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(nav).toHaveCount(0);
  await expect(menu).toBeFocused();
  await menu.click();
  await nav.getByRole('link', { name: 'Projects' }).click();
  await expect(nav).toHaveCount(0);
  await expect(page).toHaveURL(/#work$/);
  await expect(page.getByRole('heading', { name: 'Ideas, made real.' })).toBeInViewport();
});

test('respects reduced motion and keeps narrow layouts within the viewport', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.locator('[data-motion]')).toHaveAttribute('data-motion', 'off');
    await expect(page.getByRole('button', { name: 'Pause animations' })).toHaveCount(0);
    await expect(page.locator('.ribbon-track')).toHaveCSS('animation-play-state', 'paused');
    const overflows = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflows, `horizontal overflow at ${width}px`).toBe(false);
    for (const id of ['work', 'skills', 'experience', 'services', 'about', 'education', 'contact']) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
      await expect(page.locator(`#${id} h2`)).toBeVisible();
    }
  }
});

test('contact actions copy the real address and offer an email fallback', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/');
  await page.getByRole('button', { name: 'Copy email address' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'Email copied!' })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('jaingau01@gmail.com');
  await expect(page.getByRole('link', { name: 'jaingau01@gmail.com', exact: true })).toHaveAttribute('href', 'mailto:jaingau01@gmail.com');
  await page.evaluate(() => { navigator.clipboard.writeText = () => Promise.reject(new Error('Permission denied')); });
  await page.getByRole('button', { name: 'Copy email address' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'Select the email address' })).toBeVisible();
});

test('education expands and the resume dialog previews and downloads the PDF', async ({ page, request }) => {
  await page.goto('/');
  const education = page.locator('.education-item').nth(1);
  await expect(education.locator('.education-detail')).toBeHidden();
  await education.locator('summary').click();
  await expect(education.locator('.education-detail')).toBeVisible();
  const trigger = page.getByRole('button', { name: 'View resume' });
  await trigger.click();
  const dialog = page.getByRole('dialog', { name: 'Gaurav Jain’s resume' });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('button', { name: 'Close resume preview' })).toBeFocused();
  await expect(page.getByTitle('Gaurav Jain resume PDF')).toBeVisible();
  await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');
  const resume = dialog.getByRole('link', { name: 'Download PDF' });
  await expect(resume).toHaveAttribute('download', 'Gaurav_Jain.pdf');
  const response = await request.get(await resume.getAttribute('href'));
  expect(response.ok()).toBeTruthy();
  expect(response.headers()['content-type']).toContain('application/pdf');
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await page.getByRole('button', { name: 'Resume', exact: true }).click();
  await expect(dialog).toBeVisible();
  await dialog.getByRole('button', { name: 'Close resume preview' }).click();
  await expect(dialog).toHaveCount(0);
});

test('captures desktop and mobile layouts for visual review', async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  for (const id of ['work', 'skills', 'experience', 'services', 'about', 'education', 'contact']) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: testInfo.outputPath('desktop-dark.png'), fullPage: true });
  await page.getByRole('button', { name: 'Switch to light theme' }).click();
  await page.screenshot({ path: testInfo.outputPath('desktop-light.png'), fullPage: true });
  await page.getByRole('button', { name: 'Switch to dark theme' }).click();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: testInfo.outputPath('mobile-dark.png'), fullPage: true });
});
