import { capitalize } from "./utils/capitalize"
import { reverse } from "./utils/reverse"
import { slugify } from "./utils/slugify"

export function str(input: string) {
    let value = input

    const api = {
        capitalize() {
            value = capitalize(value)
            return api
        },

        reverse() {
            value = reverse(value)
            return api
        },

        slugify() {
            value = slugify(value)
            return api
        },

        value() {
            return value
        }
    }

    return api
}
