export default interface PurchaseCosts {
    /* standard bank rubber stamp */
    bankFees: number,
    /* additional/required repairs */
    renovations: number,
    /* NSW gov */
    stampDuty: number,
    /* lawyer purchase processing costs */
    conveyancing: number,
}