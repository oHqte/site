import { create } from "./create"
import { fetch } from "./fetch"
import { list } from "./list"
import { remove } from "./remove"
import { update } from "./update"

const posts = {
    create: create,
    fetch: fetch,
    list: list,
    remove: remove,
    update: update
}

export default posts
