import { newE2EPage } from '@stencil/core/testing';

describe('three-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<three-modal></three-modal>');

    const element = await page.find('three-modal');
    expect(element).toHaveClass('hydrated');
  });
});
