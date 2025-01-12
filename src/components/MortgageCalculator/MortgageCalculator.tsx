import "./MortgageCalculator.css"
import { MortgageForm } from "./MortgageForm"
import { MortgageResult } from "./MortgageResult"

export function MortgageCalculator() {
    return (
        <div className="mortgage-calculator">
            <MortgageForm />
            <MortgageResult hasResult monthlyPayment={1797.74} totalPayment={539322.94}/>
        </div>
    )
}