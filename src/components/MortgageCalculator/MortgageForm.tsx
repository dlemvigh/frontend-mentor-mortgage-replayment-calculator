import { useCallback } from "react";
import iconCalculatorUrl from "../../assets/images/icon-calculator.svg";
import { Button } from "../Form/Button";

import "./MortgageForm.css"
import { useForm } from "react-hook-form";

type FormValues = {
    amount: string
    years: string
    interest: string
    type: "repayment" | "interest-only"
}

interface MortgageFormProps {
    onCalculateMortgage: (principal: number, interestRate: number, term: number, type: "repayment" | "interest-only") => void
    onClear: () => void
}

export function MortgageForm({ onCalculateMortgage, onClear }: MortgageFormProps) {

    const { register, handleSubmit, reset, formState: { errors }} = useForm<FormValues>({
        mode: "onBlur"
    })

    const onSubmit = useCallback(handleSubmit((data) => {
        console.log(data)
        const principal = Number(data.amount)
        const interestRate = Number(data.interest)
        const term = Number(data.years)
        const type = data.type as "repayment" | "interest-only"

        onCalculateMortgage(principal, interestRate, term, type)
    }), [])
    const handleClear = useCallback(() => {
        reset()
        onClear()
    }, [onClear, reset])

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-title-bar">
                <h1>Mortgage Calculator</h1>
                <button type="reset" className="reset-btn" onClick={handleClear}>Clear All</button>
            </div>

            <div className="form-fields">
                <label className="form-label form-field-mortgage-amount">
                    <span>Mortgage Amount</span>
                    <div className="form-input-wrapper">
                        <div className="form-input-addon">£</div>
                        <input 
                            {...register("amount", {
                                required: "This field is required",
                                min: { value: 0, message: "The amount must be greater than 0" } 
                            })}
                            className="form-input" 
                            type="number"
                            aria-invalid={errors.amount ? "true" : "false"} 
                        />
                    </div>
                    {errors.amount && <div className="form-error">{errors.amount.message}</div>}
                    </label>

                <label className="form-label">
                    Mortgate Term
                    <div className="form-input-wrapper">
                        <input 
                            {...register("years", {
                                required: "This field is required",
                                min: { value: 1, message: "The term must be at least 1 year" },
                                max: { value: 30, message: "The term must be at most 30 years" }
                            })}
                            className="form-input" 
                            type="number" 
                            aria-invalid={errors.years ? "true" : "false"} 
                        />
                        <div className="form-input-addon">years</div>
                    </div>
                    {errors.years && <div className="form-error">{errors.years.message}</div>}
                </label>

                <label className="form-label">
                    Interest Rate
                    <div className="form-input-wrapper">
                        <input 
                            {...register("interest",{
                                required: "This field is required",
                                min: { value: 0, message: "The interest rate must be greater than 0" },
                            })}
                            className="form-input" 
                            type="number" 
                            aria-invalid={errors.interest ? "true" : "false"} 
                            step="0.01"
                        />
                        <div className="form-input-addon">%</div>
                    </div>
                    {errors.interest && <div className="form-error">{errors.interest.message}</div>}
                </label>

                <fieldset className="form-fieldset">
                    <legend className="form-legend">Mortgage Type</legend>
                    <label className="form-radio-label">
                        <input 
                            {...register("type", {
                                required: "This field is required"
                            })}
                            className="form-radio" 
                            type="radio" 
                            value="repayment" 
                        />
                        Repayment
                    </label>
                    <label className="form-radio-label">
                        <input 
                            {...register("type")}
                            className="form-radio" 
                            type="radio" 
                            value="interest-only" 
                        />
                        Interest Only
                    </label>
                    {errors.type && <div className="form-error">{errors.type.message}</div>}
                </fieldset>
            </div>

            <Button iconUrl={iconCalculatorUrl}>
                Calculate Repayments
            </Button>
        </form>
    )
}