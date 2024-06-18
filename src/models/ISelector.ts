import { FilledInputProps, InputProps, OutlinedInputProps } from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from "react";

export interface ISelector {
    id: string,
    select?: boolean,
    disabled?: boolean,
    type?: HTMLInputTypeAttribute,
    label?: ReactNode,
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    InputProps?: Partial<OutlinedInputProps> | Partial<FilledInputProps> | Partial<InputProps> | undefined,
    children?: ReactNode
}