import { ReactNode } from "react";
declare type FunctionChildren = (params: {
    width: number;
}) => JSX.Element;
export declare function HorizontalWrapper(props: {
    children?: ReactNode | FunctionChildren;
}): JSX.Element;
export {};
