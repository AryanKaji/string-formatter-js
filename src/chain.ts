import { capitalize } from "./utils/capitalize"
import { camelCase } from "./utils/camelCase"
import { constantCase } from "./utils/constantCase"
import { initials } from "./utils/initials"
import { isAlpha } from "./utils/isAlpha"
import { isEmail } from "./utils/isEmail"
import { isNumeric } from "./utils/isNumeric"
import { isPalindrome } from "./utils/isPalindrome"
import { isURL } from "./utils/isURL"
import { isUUID } from "./utils/isUUID"
import { mask } from "./utils/mask"
import { pascalCase } from "./utils/pascalCase"
import { removeSpecialChars } from "./utils/removeSpecialChars"
import { removeWhitespace } from "./utils/removeWhitespace"
import { repeat } from "./utils/repeat"
import { replaceAll } from "./utils/replaceAll"
import { reverse } from "./utils/reverse"
import { snakeCase } from "./utils/snakeCase"
import { slugify } from "./utils/slugify"
import { titleCase } from "./utils/titleCase"
import { truncate } from "./utils/truncate"
import { wordCount } from "./utils/wordCount"

export function str(input: string) {
    let value = input

    const api = {
        capitalize() {
            value = capitalize(value)
            return api
        },

        camelCase() {
            value = camelCase(value)
            return api
        },

        constantCase() {
            value = constantCase(value)
            return api
        },

        initials() {
            value = initials(value)
            return api
        },

        isAlpha() {
            return isAlpha(value)
        },

        isEmail() {
            return isEmail(value)
        },

        isNumeric() {
            return isNumeric(value)
        },

        isPalindrome() {
            return isPalindrome(value)
        },

        isURL() {
            return isURL(value)
        },

        isUUID() {
            return isUUID(value)
        },

        mask(count: number, maskChar?: string) {
            value = mask(value, count, maskChar)
            return api
        },

        pascalCase() {
            value = pascalCase(value)
            return api
        },

        removeSpecialChars() {
            value = removeSpecialChars(value)
            return api
        },

        removeWhitespace() {
            value = removeWhitespace(value)
            return api
        },

        repeat(count: number) {
            value = repeat(value, count)
            return api
        },

        replaceAll(search: string, replacement: string) {
            value = replaceAll(value, search, replacement)
            return api
        },

        reverse() {
            value = reverse(value)
            return api
        },

        snakeCase() {
            value = snakeCase(value)
            return api
        },

        slugify() {
            value = slugify(value)
            return api
        },

        titleCase() {
            value = titleCase(value)
            return api
        },

        truncate(length: number) {
            value = truncate(value, length)
            return api
        },

        wordCount() {
            return wordCount(value)
        },

        value() {
            return value
        }
    }

    return api
}
