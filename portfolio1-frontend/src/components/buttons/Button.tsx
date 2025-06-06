import type { buttonProps } from '../propTypes.ts';

const Button = (props: buttonProps) =>{

    props.label = "Button";

    return(
        <button onClick={props.onClick}> {props.label} </button>
    );
}

export default Button;