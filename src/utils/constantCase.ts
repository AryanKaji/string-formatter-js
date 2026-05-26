import { words } from "./words"

export function constantCase(str: string): string {
    return words(str)
        .map(word => word.toUpperCase())
        .join("_")
}
