import {clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export const ClassNameCN = (...inputs) => {
    return twMerge(clsx(inputs))
} 