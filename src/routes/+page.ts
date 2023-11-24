import { loadData } from "$lib/modules/sanity"

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
    const about = await loadData("*[_type == 'about'][0]", {})
    const contact = await loadData("*[_type == 'contact'][0]", {})
    const list = await loadData("*[_type == 'item']", {})

    return {
        about,
        contact,
        list
    };
}