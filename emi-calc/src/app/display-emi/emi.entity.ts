export interface IEmi{
    month: number, 
    dueDate: string, 
    emi: number, 
    interest: number, 
    principal: number, 
    pos:number,
    totalPrincipalAmount?: number,
    totalInterestAmount?: number,
    totalPayableAmount?: number
}