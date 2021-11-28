import { pxToRem } from "./sizing";

type Viewport = "xxs" | "xs" | "s" | "m" | "l";

type Breakpoints = {
  [key: string]: {
    min: number;
    max?: number;
  };
};

type MediaQueries = { [key in Viewport]: string };

export const breakpoints: Breakpoints = {
  xxs: { min: 0, max: 450 - 0.1 },
  xs: { min: 0, max: 768 - 0.1 },
  s: { min: 768, max: 1024 - 0.1 },
  m: { min: 1024, max: 1280 - 0.1 },
  l: { min: 1280 },
};

export const mediaQueries: MediaQueries = {
  xxs: `@media only screen and (max-width: ${pxToRem(breakpoints.xxs.max)})`,
  xs: `@media only screen and (max-width: ${pxToRem(breakpoints.xs.max)})`,
  s: `@media only screen and (min-width: ${pxToRem(breakpoints.s.min)})`,
  m: `@media only screen and (min-width: ${pxToRem(breakpoints.m.min)})`,
  l: `@media only screen and (min-width: ${pxToRem(breakpoints.l.min)})`,
};
