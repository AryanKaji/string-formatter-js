import { words } from "./words"

export function initials(str: string): string {
    return words(str)
        .map(word => word.charAt(0).toUpperCase())
        .join("")
}
