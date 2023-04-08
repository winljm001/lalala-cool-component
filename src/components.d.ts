/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
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
    interface ThreeModal {
    }
}
declare global {
    interface HTMLMouseFollowCircleElement extends Components.MouseFollowCircle, HTMLStencilElement {
    }
    var HTMLMouseFollowCircleElement: {
        prototype: HTMLMouseFollowCircleElement;
        new (): HTMLMouseFollowCircleElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLThreeModalElement extends Components.ThreeModal, HTMLStencilElement {
    }
    var HTMLThreeModalElement: {
        prototype: HTMLThreeModalElement;
        new (): HTMLThreeModalElement;
    };
    interface HTMLElementTagNameMap {
        "mouse-follow-circle": HTMLMouseFollowCircleElement;
        "my-component": HTMLMyComponentElement;
        "three-modal": HTMLThreeModalElement;
    }
}
declare namespace LocalJSX {
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
    interface ThreeModal {
    }
    interface IntrinsicElements {
        "mouse-follow-circle": MouseFollowCircle;
        "my-component": MyComponent;
        "three-modal": ThreeModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mouse-follow-circle": LocalJSX.MouseFollowCircle & JSXBase.HTMLAttributes<HTMLMouseFollowCircleElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "three-modal": LocalJSX.ThreeModal & JSXBase.HTMLAttributes<HTMLThreeModalElement>;
        }
    }
}
