declare module 'lenis' {
  export interface LenisOptions {
    wrapper?: HTMLElement | Window;
    content?: HTMLElement;
    duration?: number;
    easing?: (t: number) => number;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    syncTouch?: boolean;
    syncTouchLerp?: number;
    touchInertiaMultiplier?: number;
    wheelMultiplier?: number;
    touchMultiplier?: number;
    infinite?: boolean;
    autoResize?: boolean;
    normalizeWheel?: boolean;
    lerp?: number;
    orientation?: 'vertical' | 'horizontal';
    gestureOrientation?: 'vertical' | 'horizontal' | 'both';
    smooth?: boolean;
    direction?: 'vertical' | 'horizontal';
    smoothMobile?: boolean;
    smoothDesktop?: boolean;
    syncTouchOnWheel?: boolean;
    forceSync?: boolean;
    autoStart?: boolean;
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    raf(time: number): void;
    on(event: string, callback: (e: any) => void): () => void;
    off(event: string, callback: (e: any) => void): void;
    start(): void;
    stop(): void;
    destroy(): void;
    onScroll: (e: any) => void;
    scrollTo(
      target: Element | number | string, 
      options?: { 
        offset?: number; 
        immediate?: boolean; 
        lock?: boolean; 
        duration?: number; 
        easing?: (t: number) => number 
      }
    ): void;
    setScroll(position: number): void;
    get scroll(): number;
    get limit(): number;
    get velocity(): number;
    get isScrolling(): boolean;
    get isStopped(): boolean;
    get targetScroll(): number;
    get rootElement(): HTMLElement | Window;
    get rootElementScroll(): HTMLElement | Window;
    get options(): LenosOptions;
    get direction(): number;
    get isHorizontal(): boolean;
    get isVertical(): boolean;
  }
}

declare global {
  interface Window {
    Lenis: typeof import('lenis').default;
  }
}
