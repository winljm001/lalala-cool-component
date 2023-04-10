import { Component, h, State, Prop } from '@stencil/core';
import cs from 'classnames';
@Component({
  tag: 'adjunction-cyberpunk',
  styleUrl: 'adjunction-cyberpunk.css',
  shadow: true,
})
export class AdjunctionCyberpunk {
  /**
   * 显示child的时候的大小
   */
  @Prop() mode: 'hover' | 'auto' = 'auto';
  @State() isHover: boolean = false;

  render() {
    return (
      <div
        class="cyberpunk-box"
        onMouseEnter={() => {
          this.isHover = true;
        }}
        onMouseLeave={() => {
          this.isHover = false;
        }}
      >
        <slot></slot>
        <div class={cs('copy', this.mode === 'auto' || this.isHover ? 'active' : null)}>
          <slot name="copy"></slot>
        </div>
      </div>
    );
  }
}
