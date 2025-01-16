import { HTMLAttributes, InputHTMLAttributes } from "react";
import classes from "./input.module.css"
import { cn } from "../../lib/classnames";

export function Label({ children, ...props }: HTMLAttributes<HTMLLabelElement>) {
    return (
        <label {...props} className={cn(classes.formLabel, props.className)}>
            {children}
        </label>
    )
}

export function Fieldset({ children, ...props }: HTMLAttributes<HTMLFieldSetElement>) {
    return (
        <fieldset {...props} className={cn(classes.formFieldset, props.className)}>
            {children}
        </fieldset>
    )
}

export function Legend({ children, ...props }: HTMLAttributes<HTMLLegendElement>) {
    return (
        <legend {...props} className={cn(classes.formLegend, props.className)}>
            {children}
        </legend>
    )
}

export function InputRadio({ children, ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className={classes.formRadioLabel}>
            <input className={classes.formRadio} type="radio" {...props} />
            {children}
        </label>
    )
}

export function InputWrapper({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className={cn(classes.formInputWrapper, props.className)}>
            {children}
        </div>
    )
}

export function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input {...props} className={cn(classes.formInput, props.className)} />
    )
}

export function InputAddon({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className={cn(classes.formInputAddon, props.className)}>
            {children}
        </div>
    )
}

export function InputError({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className={cn(classes.formError, props.className)}>
            {children}
        </div>
    )
}
