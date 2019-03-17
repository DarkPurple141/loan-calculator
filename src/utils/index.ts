export function formatCurrency(money: number): string {
    return `$${money >= 0 ? money : `(${money})`}`
}