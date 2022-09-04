import { newE2EPage } from '@stencil/core/testing';

describe('app-profile-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-profile-image></app-profile-image>');

    const element = await page.find('app-profile-image');
    expect(element).toHaveClass('hydrated');
  });
});
