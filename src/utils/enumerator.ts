import { EnumType } from "json-to-graphql-query"
import { isPlainObject, isArray } from "@thi.ng/checks"

/**
 * Recursive object entry walker that takes a target object
 * some keys to look for within its arbitrary depth and a
 * replacer function that is used on values of matched keys
 * returns an Object
 *
 * Defaults to replacing values keyed in `find_keys` with
 * json-to-graphql EnumTypes
 */
export const replaceEnums = (
    target = {},
    find_keys = ["type", "sortDirection", "status"],
    replacer = (k, v) => (find_keys.includes(k) ? new EnumType(v) : v)
) => {
    // @ts-ignore
    const replaced = (obj) =>
        Object.entries(obj).reduce((a, c, i, d) => {
            const [k, v] = c
            if (isArray(v)) {
                a[k] = v.map((_v) => replaced(_v))
                return a
            }
            if (isPlainObject(v)) {
                a[k] = replaced(v)
                return a
            }
            if (!isPlainObject(v)) {
                a[k] = replacer(k, v)
                //console.log(a)
                return a
            }
            console.warn("no dice:", [k, v])
        }, {})
    return replaced(target)
}
