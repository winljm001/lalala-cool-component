import { Component, Prop, State, Method, h } from '@stencil/core';
import throttle from 'lodash/throttle';
@Component({
  tag: 'mouse-follow-circle',
  styleUrl: 'mouse-follow-circle.css',
  shadow: true,
})
export class MouseFollowCircle {
  @State() isShowChild: boolean = false;
  @State() circleX: number = 0;
  @State() circleY: number = 0;
  /**
   *  圆圈的颜色
   */
  @Prop() color: string = '#3df1db';
  /**
   * 显示child的时候的大小
   */
  @Prop() maxSize: string = '64px';
  /**
   * 平时的大小
   */
  @Prop() minSize: string = '24px';
  /**
   *  圆圈是否显示内容
   */
  @Method()
  async setIsShowChild(isShow?: boolean) {
    if (typeof isShow === 'undefined') {
      this.isShowChild = !this.isShowChild;
    } else {
      this.isShowChild = isShow;
    }
    return this.isShowChild;
  }
  mousemoveHandle = throttle((params: WindowEventMap['mousemove']) => {
    this.circleX = params.clientX;
    this.circleY = params.clientY;
  }, 16);
  connectedCallback() {
    window.addEventListener('mousemove', this.mousemoveHandle);
  }

  disconnectedCallback() {
    window.removeEventListener('mousemove', this.mousemoveHandle);
  }

  render() {
    return (
      <div class="follow-circle-wrap">
        <div class="follow-circle" style={{ transform: `translate(${this.circleX}px,${this.circleY}px)` }}>
          <div class="follow-circle-body" style={{ 'background-color': this.color, '--size': this.isShowChild ? this.maxSize : this.minSize }}>
            <div class="follow-circle-child" style={{ transform: this.isShowChild ? 'scale(1)' : 'scale(0)' }}>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
