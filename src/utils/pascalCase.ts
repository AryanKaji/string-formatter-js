import { words } from "./words"

export function pascalCase(str: string): string {
    return words(str)
        .map(word => {
            const lower = word.toLowerCase()

            return lower.charAt(0).toUpperCase() + lower.slice(1)
        })
        .join("")
}
