import { ThemeProvider as NextThemeProvider } from "next-themes"

type ThemeProviderProps = {
    children: React.ReactNode;
    attribute: string,
    defaultTheme: string,
}

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <NextThemeProvider {...props}>{children}</NextThemeProvider>
    )
}

export default ThemeProvider