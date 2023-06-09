/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AdjunctionCyberpunk {
        /**
          * 显示child的时候的大小
         */
        "mode": 'hover' | 'auto';
    }
    interface MouseFollowCircle {
        /**
          * 圆圈的颜色
         */
        "color": string;
        /**
          * 显示child的时候的大小
         */
        "maxSize": string;
        /**
          * 平时的大小
         */
        "minSize": string;
        /**
          * 圆圈是否显示内容
         */
        "setIsShowChild": (isShow?: boolean) => Promise<boolean>;
    }
    interface MouseFollowCross {
        /**
          * 显示child的时候的大小
         */
        "maxSize": string;
        /**
          * 平时的大小
         */
        "minSize": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SelectorSeat {
        "backgroundImg": string;
        "height": string;
        "width": string;
    }
    interface ThreeModal {
    }
}
declare global {
    interface HTMLAdjunctionCyberpunkElement extends Components.AdjunctionCyberpunk, HTMLStencilElement {
    }
    var HTMLAdjunctionCyberpunkElement: {
        prototype: HTMLAdjunctionCyberpunkElement;
        new (): HTMLAdjunctionCyberpunkElement;
    };
    interface HTMLMouseFollowCircleElement extends Components.MouseFollowCircle, HTMLStencilElement {
    }
    var HTMLMouseFollowCircleElement: {
        prototype: HTMLMouseFollowCircleElement;
        new (): HTMLMouseFollowCircleElement;
    };
    interface HTMLMouseFollowCrossElement extends Components.MouseFollowCross, HTMLStencilElement {
    }
    var HTMLMouseFollowCrossElement: {
        prototype: HTMLMouseFollowCrossElement;
        new (): HTMLMouseFollowCrossElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSelectorSeatElement extends Components.SelectorSeat, HTMLStencilElement {
    }
    var HTMLSelectorSeatElement: {
        prototype: HTMLSelectorSeatElement;
        new (): HTMLSelectorSeatElement;
    };
    interface HTMLThreeModalElement extends Components.ThreeModal, HTMLStencilElement {
    }
    var HTMLThreeModalElement: {
        prototype: HTMLThreeModalElement;
        new (): HTMLThreeModalElement;
    };
    interface HTMLElementTagNameMap {
        "adjunction-cyberpunk": HTMLAdjunctionCyberpunkElement;
        "mouse-follow-circle": HTMLMouseFollowCircleElement;
        "mouse-follow-cross": HTMLMouseFollowCrossElement;
        "my-component": HTMLMyComponentElement;
        "selector-seat": HTMLSelectorSeatElement;
        "three-modal": HTMLThreeModalElement;
    }
}
declare namespace LocalJSX {
    interface AdjunctionCyberpunk {
        /**
          * 显示child的时候的大小
         */
        "mode"?: 'hover' | 'auto';
    }
    interface MouseFollowCircle {
        /**
          * 圆圈的颜色
         */
        "color"?: string;
        /**
          * 显示child的时候的大小
         */
        "maxSize"?: string;
        /**
          * 平时的大小
         */
        "minSize"?: string;
    }
    interface MouseFollowCross {
        /**
          * 显示child的时候的大小
         */
        "maxSize"?: string;
        /**
          * 平时的大小
         */
        "minSize"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SelectorSeat {
        "backgroundImg"?: string;
        "height"?: string;
        "width"?: string;
    }
    interface ThreeModal {
    }
    interface IntrinsicElements {
        "adjunction-cyberpunk": AdjunctionCyberpunk;
        "mouse-follow-circle": MouseFollowCircle;
        "mouse-follow-cross": MouseFollowCross;
        "my-component": MyComponent;
        "selector-seat": SelectorSeat;
        "three-modal": ThreeModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "adjunction-cyberpunk": LocalJSX.AdjunctionCyberpunk & JSXBase.HTMLAttributes<HTMLAdjunctionCyberpunkElement>;
            "mouse-follow-circle": LocalJSX.MouseFollowCircle & JSXBase.HTMLAttributes<HTMLMouseFollowCircleElement>;
            "mouse-follow-cross": LocalJSX.MouseFollowCross & JSXBase.HTMLAttributes<HTMLMouseFollowCrossElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "selector-seat": LocalJSX.SelectorSeat & JSXBase.HTMLAttributes<HTMLSelectorSeatElement>;
            "three-modal": LocalJSX.ThreeModal & JSXBase.HTMLAttributes<HTMLThreeModalElement>;
        }
    }
}
