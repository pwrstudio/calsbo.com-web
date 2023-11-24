import { loadData } from "$lib/modules/sanity"

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
    const about = await loadData("*[_type == 'about'][0]", {})
    const contact = await loadData("*[_type == 'contact'][0]", {})
    const list = await loadData("*[_type == 'item']", {})
    const lastUpdatedPost = await loadData("*[] | order(_updatedAt desc)[0]", {})

    console.log(lastUpdatedPost)

    const siteLastUpdated = lastUpdatedPost._updatedAt

    return {
        siteLastUpdated,
        about,
        contact,
        list
    };
}