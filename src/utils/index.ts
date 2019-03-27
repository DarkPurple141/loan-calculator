export function addBrackets(str: string) {
    return `(${str})`
}

export function formatCurrency(money: number): string {
    const returnString = new Intl.NumberFormat().format(money)

    return money >= 0 ? returnString : addBrackets(returnString)
}

/**
 * Turns a string into a comma seperated number
 * 
 * eg. '123456' => '123,456'
 * 
 * @param   {string} str Any string, but ideally a number-like string eg currency
 * @returns {string}
 */
export const commify = (str: string): string => {
    if (!str) return ''

    const [beforeDecimal, afterDecimal] = str.split('.')
    console.info(beforeDecimal, afterDecimal)

    const asArray = [...beforeDecimal]
        .reverse()
        .join('')
    
    const withCommas = (asArray
        .match(/.{1,3}/g) || [])
        .join(',')
    
    return [...withCommas]
        .reverse()
        .join('') + ('' && afterDecimal)
}

