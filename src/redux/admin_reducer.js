import { CHANGETITLE } from "./constS"

export default function adminReduceer(pre = localStorage.getItem(CHANGETITLE), actiong) {
    const { type, date } = actiong
    switch (type) {

        case CHANGETITLE:
            localStorage.setItem(CHANGETITLE, date)
            return date

        default:
            return pre
    }
}
//长期存储数据还是他娘的localStorage靠谱