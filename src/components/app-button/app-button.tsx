import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.scss',
  shadow: true,
})
export class AppButton {
  @Prop() type: string = 'default';

  render() {
    return (
      <button class={'button ' + this.type}>
        <slot></slot>
      </button>
    );
  }

}
