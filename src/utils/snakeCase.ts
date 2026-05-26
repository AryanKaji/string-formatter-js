import { words } from "./words"

export function snakeCase(str: string): string {
    return words(str)
        .map(word => word.toLowerCase())
        .join("_")
}
