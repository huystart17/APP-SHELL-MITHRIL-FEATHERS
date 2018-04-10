import m from "mithril";
import stream from "mithril-stream";
const menu = [
    {
        text: "Trang chủ",
        url: "/home",
        title: "",
        icon: "icon-home"
    },
    {
        text: "Khám phá",
        url: "/kham-pha",
        title: "",
        icon: ""
    },
    {
        text: "Đặt chỗ",
        url: "/dat-cho",
        title: "",
        icon: ""
    },
    {
        text: "Tin tức",
        url: "tin-tuc",
        title: "",
        icon: ""
    },
    {
        text: "Khuyến mãi",
        url: "khuyen-mai",
        title: "",
        icon: ""
    }
];

const Header = {
    oninit: v => {
        v.state.text = stream("Header");
        v.state.menu = stream(menu);
    },
    view: v =>
        m(
            "",
            m(
                "ul.tab.tab-block",
                v.state.menu().map(item =>
                    m(
                        "li.tab-item",
                        {
                            key: item.url
                        },
                        item.text
                    )
                )
            )
        )
};
export default Header;
