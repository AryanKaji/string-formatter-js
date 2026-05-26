export function mask(str: string, count: number, maskChar = "*"): string {
    const safeCount = Math.max(0, Math.min(count, str.length))

    return `${maskChar.repeat(safeCount)}${str.slice(safeCount)}`
}
