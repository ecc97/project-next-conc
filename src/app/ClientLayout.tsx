"use client"
import React from "react"
import { GlobalStyle } from "@/app/GlobalStyles"

const ClientLayout: React.FC<{children: React.ReactNode}> =({ children }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    )
}

export default ClientLayout