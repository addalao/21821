import { DEMO1, DEMO2, CHANGETITLE } from "./constS"
export const demo1 = (date) => ({ type: DEMO1, date })
export const demo2 = (date) => ({ type: DEMO2, date })
export const changetitle = (date) => ({ type: CHANGETITLE, date })