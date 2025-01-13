export function calculateAnnuityPayment(principal: number, interestRate: number, term: number) {
    const monthlyInterestRate = interestRate / 12 / 100
    const numberOfPayments = term * 12
    const annuityCoefficient = monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
    return principal * annuityCoefficient
}

export function calculateInterestOnlyPayment(principal: number, interestRate: number) {
    return principal * interestRate / 12 / 100
}

export function calculatePayment(principal: number, interestRate: number, term: number, type: "repayment" | "interest-only") {
    switch (type) {
        case "repayment":
            return calculateAnnuityPayment(principal, interestRate, term)
        case "interest-only":
            return calculateInterestOnlyPayment(principal, interestRate)
        default:
            throw new Error("Invalid mortgage type")
    }
}
