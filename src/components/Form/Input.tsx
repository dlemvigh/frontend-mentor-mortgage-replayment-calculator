import { InputHTMLAttributes } from "react";
import "./input.css"

export function InputWrapper({ children }: { children: React.ReactNode }) { 
    return (
        <div className="form-input-wrapper">
            {children}
        </div>
    )
}

export function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>)  {
    return (
        <input className="form-input" {...props} />
    )
}

export function InputAddon({ children }: { children: React.ReactNode }) {
    return (
        <div className="form-input-addon">
            {children}
        </div>
    )
}

export function InputError({ children }: { children: React.ReactNode }) {
    return (
        <div className="form-error">
            {children}
        </div>
    )
}
