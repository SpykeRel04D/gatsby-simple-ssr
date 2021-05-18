import { css } from "styled-components"
import styled from "styled-components"
import { BREAKPOINTS, FONT_BASE_SIZE, SPACE } from "./settings"

const getRatio = (
  originalWidth: number,
  originalHeight: number,
  expectedWidth: number = 0,
  expectedHeight: number = 0
) => {
  let height
  let width

  if (expectedWidth > 0) {
    height = Math.ceil((expectedWidth / originalWidth) * originalHeight)
    width = expectedWidth
  } else {
    height = expectedHeight
    width = Math.ceil((expectedHeight / originalHeight) * originalWidth)
  }
  return {
    height,
    width,
    styled: `
      height: ${height}px;
      width: ${width}px;
    `,
  }
}

/**
 * Rems
 * Transforms pixels into rems based in the base-font-size set in the theme
 * file
 *
 * @param {integer|string} n — Number to transform
 */
const rems = (n: any) => `${parseInt(n, 10) / FONT_BASE_SIZE}rem`

/**
 * Space
 * Vertical and Horizontal Rhythm generator based on the base-line-height set in
 * the theme file
 *
 * @param {float} n — Multiplier, can accept decimal numbers
 */
const space = (n: number = 1) => rems(SPACE * n)

const getSizeFromBreakpoint = (value: any, max: boolean = false) => {
  let mq
  if (BREAKPOINTS[value]) {
    mq = max ? BREAKPOINTS[value] - 1 : BREAKPOINTS[value]
    // tslint:disable-next-line:radix
  } else if (parseInt(value)) {
    mq = max ? value - 1 : value
  } else {
    // tslint:disable-next-line:no-console
    console.error(
      `${value} is not a valid breakpoint or size specified for media.`
    )
  }
  return mq ? `${mq / FONT_BASE_SIZE}em` : 0
}

const generateMedia = () => {
  const max = (breakpoint: any) => (...args: any[]) => css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint, true)}) {
      ${css.call(null, ...args)};
    }
  `

  const min = (breakpoint: any) => (...args: any[]) => css`
    @media (min-width: ${getSizeFromBreakpoint(breakpoint)}) {
      ${css.call(null, ...args)};
    }
  `

  const between = (firstBreakpoint: any, secondBreakpoint: any) => (
    ...args: any[]
  ) => css`
    @media (min-width: ${getSizeFromBreakpoint(
        firstBreakpoint
      )}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint, true)}) {
      ${css.call(null, ...args)};
    }
  `

  return {
    between,
    max,
    min,
  }
}

const media = generateMedia()

const getSrcset = (data: any, selection?: string[]) => {
  let srcset: string = ""
  for (let key in data) {
    if (selection) {
      if (selection.includes(key))
        srcset += `${data[key].href} ${BREAKPOINTS[key]}w, `
    } else if (key in BREAKPOINTS)
      srcset += `${data[key].href} ${BREAKPOINTS[key]}w, `
  }
  return srcset.slice(0, srcset.length - 2)
}

export { getRatio, getSizeFromBreakpoint, media, rems, getSrcset, space }
