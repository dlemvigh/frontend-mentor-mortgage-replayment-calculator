import { useCallback } from "react";
import iconCalculatorUrl from "../../assets/images/icon-calculator.svg";
import { Button } from "../Form/Button";

import "./MortgageForm.css"

interface MortgageFormProps {
    onCalculateMortgage: (principal: number, interestRate: number, term: number, type: "repayment" | "interest-only") => void
    onClear: () => void
}

export function MortgageForm({ onCalculateMortgage, onClear }: MortgageFormProps) {

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.currentTarget
        const principal = Number(form.amount.value)
        const interestRate = Number(form.interest.value)
        const term = Number(form.years.value)
        const type = form.type.value as "repayment" | "interest-only"

        onCalculateMortgage(principal, interestRate, term, type)
    }, [onCalculateMortgage])

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-title-bar">
                <h1>Mortgage Calculator</h1>
                <button type="reset" className="reset-btn" onClick={onClear}>Clear All</button>
            </div>

            <div className="form-fields">
                <label className="form-label form-field-mortgage-amount">
                    <span>Mortgage Amount</span>
                    <div className="form-input-wrapper">
                        <div className="form-input-addon">£</div>
                        <input className="form-input" type="number" name="amount" min="0" required />
                    </div>
                </label>

                <label className="form-label">
                    Mortgate Term
                    <div className="form-input-wrapper">
                        <input className="form-input" type="number" name="years" min="1" max="30" required />
                        <div className="form-input-addon">years</div>
                    </div>
                </label>

                <label className="form-label">
                    Interest Rate
                    <div className="form-input-wrapper">
                        <input className="form-input" type="number" name="interest" min="0" max="100" step="0.01" required />
                        <div className="form-input-addon">%</div>
                    </div>
                </label>

                <fieldset className="form-fieldset">
                    <legend className="form-legend">Mortgage Type</legend>
                    <label className="form-radio-label">
                        <input className="form-radio" type="radio" name="type" value="repayment" required />
                        Repayment
                    </label>
                    <label className="form-radio-label">
                        <input className="form-radio" type="radio" name="type" value="interest-only" required />
                        Interest Only
                    </label>
                </fieldset>
            </div>

            <Button iconUrl={iconCalculatorUrl}>
                Calculate Repayments
            </Button>
        </form>
    )
}