"use client" // Required by next-themes

import * as React from "react"
import {ThemeProvider as NextThemesProvider, ThemeProviderProps} from "next-themes" // Import the actual provider from next-themes

// Wrapper component that passes props to the NextThemesProvider
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
