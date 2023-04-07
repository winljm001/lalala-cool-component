import { newSpecPage } from '@stencil/core/testing';
import { ThreeModal } from '../three-modal';

describe('three-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ThreeModal],
      html: `<three-modal></three-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <three-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </three-modal>
    `);
  });
});
