import { useCallback, useState } from "react"

import { calculatePayment } from "../../lib/mortgage-payment-calculator"
import { MortgageForm } from "./MortgageForm"
import { MortgageResult } from "./MortgageResult"

import "./MortgageCalculator.css"

type CalculationState = {
    hasResult: boolean
    monthlyPayment?: number
    totalPayment?: number
}

export function MortgageCalculator() {

    const [calculation, setCalculation] = useState<CalculationState>({ hasResult: false })

    const handleCalculateMortgage = useCallback((principal: number, interestRate: number, term: number, type: "repayment" | "interest-only") => {
        const monthlyPayment = calculatePayment(principal, interestRate, term, type)
        const totalPayment = monthlyPayment * term * 12

        setCalculation({ hasResult: true, monthlyPayment, totalPayment })
    }, [])

    const handleClear = useCallback(() => {
        setCalculation({ hasResult: false })
    }, [])

    return (
        <div className="mortgage-calculator">
            <MortgageForm onCalculateMortgage={handleCalculateMortgage} onClear={handleClear} />
            <MortgageResult 
                hasResult={calculation.hasResult} 
                monthlyPayment={calculation?.monthlyPayment} 
                totalPayment={calculation?.totalPayment}
            />
        </div>
    )
}