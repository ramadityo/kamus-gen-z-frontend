import { Outfit } from "next/font/google";

const OutfitReg = Outfit({
    weight: "400",
    subsets: ["latin"],
});
const OutfitMed = Outfit({
    weight: "500",
    subsets: ["latin"],
});
const OutfitSemBold = Outfit({
    weight: "600",
    subsets: ["latin"],
});
const OutfitBold = Outfit({
    weight: "700",
    subsets: ["latin"],
});

export { OutfitReg, OutfitMed, OutfitSemBold, OutfitBold };
