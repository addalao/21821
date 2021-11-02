import { DEMO1, DEMO2 } from "./constS"
export default function appReduceer(pre = "首页", actiong) {
    const { type, date } = actiong
    switch (type) {
        case DEMO1:
            return date
        case DEMO2:
            return date + "2"


        default:
            return pre
    }
}