export type buttonProps = {
    label?: string;
    onClick: ()=> void;
    disabled?: boolean;
    visible?: boolean;
}

export type panelProps = {
    className?: string,
    children?: React.ReactNode;
    visible?: boolean;
}