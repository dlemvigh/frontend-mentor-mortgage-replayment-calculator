import { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    label: string;
}

export function Input({ ...props }: InputProps)  {
    return (
        <input {...props} />
    )
}