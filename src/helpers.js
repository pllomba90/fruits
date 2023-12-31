
function choice(items) {
    const randIdx = Math.floor(Math.random() * items.length);

    return items[randIdx];
}

function remove(items, item) {
    const index = items.indexOf(item);
    if (index !== -1) {
        return items.splice(index, 1)[0];
    }
    return undefined;
}


export { choice, remove };