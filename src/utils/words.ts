export function words(str: string): string[] {
    return str
        .trim()
        .match(/[A-Za-z0-9]+/g) ?? []
}
