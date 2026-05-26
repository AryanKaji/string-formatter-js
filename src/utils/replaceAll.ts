export function replaceAll(str: string, search: string, replacement: string): string {
    if (search === "") return str

    return str.split(search).join(replacement)
}
