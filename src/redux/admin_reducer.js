import { CHANGETITLE } from "./constS"

export default function adminReduceer(pre = "首页", actiong) {
    const { type, date } = actiong
    switch (type) {

        case CHANGETITLE:
            /*  localStorage */
            sessionStorage.setItem(CHANGETITLE, date)
            return (
                sessionStorage.getItem(CHANGETITLE) === null ? pre : sessionStorage.getItem(CHANGETITLE)
            )

        default:
            return sessionStorage.getItem(CHANGETITLE) === null ? pre : sessionStorage.getItem(CHANGETITLE)
    }
}
//长期存储数据还是他娘的localStorage靠谱