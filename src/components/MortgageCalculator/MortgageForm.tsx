import { useCallback } from "react";
import iconCalculatorUrl from "../../assets/images/icon-calculator.svg";
import { Button, ResetButton } from "../Form/Button";

import { useForm } from "react-hook-form";
import { 
    Label, 
    Fieldset, 
    Legend,
    InputWrapper,
    Input,
    InputRadio,
    InputAddon,
    InputError 
} from "../Form/Input";

import classes from "./MortgageForm.module.css"

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

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
        mode: "onBlur"
    })

    const onSubmit = handleSubmit((data: FormValues) => {
        console.log(data)
        const principal = Number(data.amount)
        const interestRate = Number(data.interest)
        const term = Number(data.years)
        const type = data.type as "repayment" | "interest-only"

        onCalculateMortgage(principal, interestRate, term, type)
    })
    
    const handleClear = useCallback(() => {
        reset()
        onClear()
    }, [onClear, reset])

    return (
        <form className={classes.form} onSubmit={onSubmit}>
            <div className={classes.formTitleBar}>
                <h1>Mortgage Calculator</h1>
                <ResetButton onClick={handleClear}>Clear All</ResetButton>
            </div>

            <div className={classes.formFields}>
                <Label className={classes.formWideOnDesktop}>
                    Mortgage Amount
                    <InputWrapper>
                        <InputAddon>£</InputAddon>
                        <Input
                            {...register("amount", {
                                required: "This field is required",
                                min: { value: 0, message: "The amount must be greater than 0" }
                            })}
                            type="number"
                            aria-invalid={errors.amount ? "true" : "false"}
                        />
                    </InputWrapper>
                    {errors.amount && <InputError>{errors.amount.message}</InputError>}
                </Label>

                <Label>
                    Mortgate Term
                    <InputWrapper>
                        <Input
                            {...register("years", {
                                required: "This field is required",
                                min: { value: 1, message: "The term must be at least 1 year" },
                                max: { value: 30, message: "The term must be at most 30 years" }
                            })}
                            type="number"
                            aria-invalid={errors.years ? "true" : "false"}
                        />
                        <InputAddon>years</InputAddon>
                    </InputWrapper>
                    {errors.years && <InputError>{errors.years.message}</InputError>}
                </Label>

                <Label>
                    Interest Rate
                    <InputWrapper>
                        <Input
                            {...register("interest", {
                                required: "This field is required",
                                min: { value: 0, message: "The interest rate must be greater than 0" },
                            })}
                            type="number"
                            aria-invalid={errors.interest ? "true" : "false"}
                            step="0.01"
                        />
                        <InputAddon>%</InputAddon>
                    </InputWrapper>
                    {errors.interest && <InputError>{errors.interest.message}</InputError>}
                </Label>

                <Fieldset className={classes.formWideOnDesktop}>
                    <Legend>Mortgage Type</Legend>
                    <InputRadio
                        {...register("type", {
                            required: "This field is required"
                        })}
                        type="radio"
                        value="repayment"
                    >
                        Repayment
                    </InputRadio>
                    <InputRadio
                            {...register("type")}
                            type="radio"
                            value="interest-only"
                    >
                        Interest Only
                    </InputRadio>
                    {errors.type && <InputError>{errors.type.message}</InputError>}
                </Fieldset>
            </div>

            <Button iconUrl={iconCalculatorUrl}>
                Calculate Repayments
            </Button>
        </form>
    )
}