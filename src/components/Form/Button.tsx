import { HTMLAttributes, ReactNode } from "react";

import classes from "./Button.module.css"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    iconUrl?: string;
    children: ReactNode;
}

export function Button({ iconUrl, children, ...props }: ButtonProps) {
    return (
        <button className={classes.button} {...props}>
            {iconUrl && <img src={iconUrl} />}
            {children}
        </button>
    )

}