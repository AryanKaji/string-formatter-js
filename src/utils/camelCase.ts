import { words } from "./words"

export function camelCase(str: string): string {
    const parts = words(str)

    return parts
        .map((word, index) => {
            const lower = word.toLowerCase()

            return index === 0
                ? lower
                : lower.charAt(0).toUpperCase() + lower.slice(1)
        })
        .join("")
}
