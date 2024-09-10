import { createGlobalStyle } from "styled-components";
import { Inter, Roboto } from "next/font/google";

export const colors = {
    primary: "#4A90E2",
    secondary: "#003C71",
    tertiary: "#E5E5E5",
    quaternary: "#F2F2F2",
    bluegray: "#355773",
    white: "#FFFFFF",
    black: "#1C1C1C",
}

const InterFont = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
})

const RobotoFont = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
})

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${InterFont.style.fontFamily}, Arial, sans-serif;
    }

    input, textarea, button {
        font-family: ${RobotoFont.style.fontFamily}, Arial, sans-serif;
    }
`