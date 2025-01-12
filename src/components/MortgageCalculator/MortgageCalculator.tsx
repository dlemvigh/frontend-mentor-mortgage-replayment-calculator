import "./MortgageCalculator.css"
import { MortgageForm } from "./MortgageForm"
import { MortgageResult } from "./MortgageResult"

export function MortgageCalculator() {
    return (
        <div className="mortgage-calculator">
            <MortgageForm />
            <MortgageResult />
        </div>
    )
}