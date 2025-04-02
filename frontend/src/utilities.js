export function addCSS(css) {
    document.head.appendChild(document.createElement('style')).innerHTML = css
}

export function createDataReducer(numItems) {
    return (acc, cur, index) => {
        const groupIndex = Math.floor(index / numItems)
        if (!acc[groupIndex]) acc[groupIndex] = []
        acc[groupIndex].push(cur)
        return acc
    }
}
