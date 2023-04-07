import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'three-modal',
  styleUrl: 'three-modal.css',
  shadow: true,
})
export class ThreeModal {
  render() {
    return (
      <Host>
        <div> three-modal</div>
        <slot></slot>
      </Host>
    );
  }
}
