/** @jsxImportSource @emotion/react */
import theme from '../themes/MainTheme';
import { css } from '@emotion/react'
import { Link } from 'react-router';

function Button (props) {
    return (
        <>
            {/* <Link> */}
                <button onClick={props.onClick} disabled={props.disabled}
                    css={css`
                    color: black;
                    background-color: ${theme.palette.orange.main};
                    opacity: 0.75;
                    font-size: 18px;
                    padding: 18px;
                    height: 8vh;
                    border-radius: 30px;
                    font-weight: bold;
                    border-bottom: solid;`}
                >
                    {props.text}
                </button>
            {/* </Link> */}
        </>
    )
}

export default Button;