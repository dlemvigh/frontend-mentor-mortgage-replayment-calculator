import "./MortgageForm.css"
import iconCalculatorUrl from "../../assets/images/icon-calculator.svg";
import { Button } from "../Form/Button";

export function MortgageForm() {
    return (
        <form className="form">
            <div className="form-title-bar">
                <h1>Mortgage Calculator</h1>
                <button type="reset" className="reset-btn">Clear All</button>
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