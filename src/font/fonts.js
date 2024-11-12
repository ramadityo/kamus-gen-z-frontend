import { Noto_Sans } from "next/font/google";

const NotoSansReg = Noto_Sans({
    weight: "400",
    subsets: ["latin"],
});
const NotoSansMed = Noto_Sans({
    weight: "500",
    subsets: ["latin"],
});
const NotoSansSemBold = Noto_Sans({
    weight: "600",
    subsets: ["latin"],
});
const NotoSansBold = Noto_Sans({
    weight: "700",
    subsets: ["latin"],
});

export default { NotoSansReg, NotoSansMed, NotoSansSemBold, NotoSansBold };
