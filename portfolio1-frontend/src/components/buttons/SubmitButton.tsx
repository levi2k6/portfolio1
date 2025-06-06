import type { buttonProps } from '../propTypes.ts';

const SubmitButton = (props: buttonProps) =>{
    const {
        label = "Button",
        onClick,
        disabled,
        visible = true
    } = props;

    return(
        <button onClick={onClick}
        style={{display: visible ? "block" : "none" }}
        > {label} </button>
    );
}

export default SubmitButton;



