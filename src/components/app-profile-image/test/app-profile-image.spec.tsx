import { newSpecPage } from '@stencil/core/testing';
import { AppProfileImage } from '../app-profile-image';

describe('app-profile-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppProfileImage],
      html: `<app-profile-image></app-profile-image>`,
    });
    expect(page.root).toEqualHtml(`
      <app-profile-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-profile-image>
    `);
  });
});
