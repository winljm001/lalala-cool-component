import { Component, h, State, Prop, Host } from '@stencil/core';
import { getObjectFitSize } from '../../../utils/utils';

@Component({
  tag: 'selector-seat',
  styleUrl: 'selector-seat.css',
  shadow: true,
})
export class SelectorSeat {
  /**
   *
   */
  @Prop() backgroundImg: string;
  @Prop() width: string = '100%';
  @Prop() height: string = '100%';

  @State() canvasWidth: number = 0;
  @State() canvasHeight: number = 0;

  canvas!: HTMLCanvasElement;
  wrapEle!: HTMLDivElement;

  ctx!: CanvasRenderingContext2D;
  componentDidLoad() {
    this.ctx = this.canvas.getContext('2d');
    const rectObj = this.wrapEle.getBoundingClientRect();
    this.canvasWidth = rectObj.width;
    this.canvasHeight = rectObj.height;
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasWidth);
    this.drawBackground();
  }
  drawBackground() {
    const bgImg = new Image();
    bgImg.src = this.backgroundImg;
    bgImg.onload = () => {
      const { sx, sy, swidth, sheight, x, y, width, height } = getObjectFitSize('cover', this.canvasWidth, this.canvasHeight, bgImg.width, bgImg.height);
      console.log(this.canvasWidth, this.canvasHeight, bgImg.width, bgImg.height);
      console.log(bgImg, sx, sy, swidth, sheight, x, y, width, height);

      this.ctx.drawImage(bgImg, sx, sy, swidth, sheight, x, y, width, height);
      // console.log(bgImg, this.ctx);
      // this.ctx.drawImage(bgImg, sx, sy, sw, sh, 0, 0, this.canvasWidth, this.canvasHeight);
      // this.ctx.drawImage(bgImg, 0, 0);
      // this.ctx.drawImage(bgImg, 0, 0, this.canvasWidth, this.canvasHeight, 0, 0, bgImg.width, bgImg.height);
    };
  }
  render() {
    return (
      <Host style={{ width: this.width, height: this.height }} ref={el => (this.wrapEle = el as HTMLDivElement)}>
        <div class="selector-seat-box">
          <canvas class="selector-seat-canvas" width={this.canvasWidth} height={this.canvasHeight} ref={el => (this.canvas = el as HTMLCanvasElement)}></canvas>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
