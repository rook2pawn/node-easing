// TypeScript Version: 2.1

declare namespace Easing {
  type EasingType =
    | 'linear'
    | 'quadratic'
    | 'cubic'
    | 'quartic'
    | 'quintic'
    | 'sigmoid'
    | 'sinusoidal'
    | 'sin'
    | 'exponential'
    | 'expo'
    | 'exp'
    | 'circular';

  interface EasingOptions {
    start?: number;
    end?: number;
    endToEnd?: boolean;
    invert?: number;
  }
}

declare function Easing(
  numberArg: number,
  type: Easing.EasingType,
  options?: Easing.EasingOptions
): number[];

export = Easing;
export as namespace Easing;
