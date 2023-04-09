import { Component, State, h, Prop } from '@stencil/core';
import throttle from 'lodash/throttle';
import cs from 'classnames';
@Component({
  tag: 'mouse-follow-cross',
  styleUrl: 'mouse-follow-cross.css',
  shadow: true,
})
export class MouseFollowcross {
  @State() crossX: number = 0;
  @State() crossY: number = 0;
  @State() mouseCursor: CSSStyleDeclaration['cursor'] = 'auto';
  /**
   * 显示child的时候的大小
   */
  @Prop() maxSize: string = '64px';
  /**
   * 平时的大小
   */
  @Prop() minSize: string = '32px';
  mousemoveHandle = throttle((params: WindowEventMap['mousemove']) => {
    this.crossX = params.clientX;
    this.crossY = params.clientY;
    this.mouseCursor = getComputedStyle(params.target as any).cursor;
  }, 16);
  connectedCallback() {
    window.addEventListener('mousemove', this.mousemoveHandle);
  }

  disconnectedCallback() {
    window.removeEventListener('mousemove', this.mousemoveHandle);
  }

  render() {
    return (
      <div class={cs('follow-cross-wrap', this.mouseCursor === 'pointer' ? 'active' : null)}>
        <div class="follow-cross-box" style={{ '--maxSize': this.maxSize, '--minSize': this.minSize, 'top': `${this.crossY}px`, 'left': `${this.crossX}px` }}>
          {[...Array(8)]?.map((_, i) => {
            return <div class="sub" key={i} />;
          })}
          <div class="bg" />
        </div>
        <div class="follow-cross-icon" style={{ '--maxSize': this.maxSize, '--minSize': this.minSize, 'top': `${this.crossY}px`, 'left': `${this.crossX}px` }}>
          {[...Array(2)]?.map((_, i) => {
            return <div class="sub" key={i} />;
          })}
        </div>
      </div>
    );
  }
}
