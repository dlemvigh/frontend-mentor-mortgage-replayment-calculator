import { HTMLAttributes, ReactNode } from "react";

import "./Button.css"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    iconUrl?: string;
    children: ReactNode;
}

export function Button({ iconUrl, children, ...props }: ButtonProps) {
    return (
        <button className="button" {...props}>
            {iconUrl && <img src={iconUrl} />}
            {children}
        </button>
    )

}