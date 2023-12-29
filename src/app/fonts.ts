import { Outfit as googleFontBody } from "next/font/google";
import { Courier_Prime as googleFontCode } from "next/font/google";
import { Prompt as googleFontHead } from "next/font/google";

export const fontBody = googleFontBody({
  subsets: ["latin"],
  weight: "200",
  variable: "--font-body",
});

export const fontCode = googleFontCode({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-code",
});

export const fontHead = googleFontHead({
  subsets: ["latin"],
  weight: ["600", "900"],
  variable: "--font-head",
});
