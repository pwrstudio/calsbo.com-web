export function arrayToString(input: string[] | string | undefined): string {
    if (typeof input === "undefined") {
        return "";
    }

    if (typeof input === "string") {
        return input;
    }

    const filtered = input.filter((str): str is string => str !== undefined);
    
    if (filtered.length <= 1) {
        return filtered.join("");
    }

    const lastItem = filtered.pop();
    return `${filtered.join(", ")} and ${lastItem}`;
}