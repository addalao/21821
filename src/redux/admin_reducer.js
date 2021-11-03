import { CHANGETITLE } from "./constS"
export default function adminReduceer(pre = "首页", actiong) {
    const { type, date } = actiong
    switch (type) {

        case CHANGETITLE:
            return date

        default:
            return pre
    }
}