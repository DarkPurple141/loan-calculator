export function toFixed(num: number) {
    return num.toFixed(2)
}

export function formatCurrency(money: number): string {
    return `${money >= 0 ? toFixed(money) : `(${toFixed(money)})`}`
}