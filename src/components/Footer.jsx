import { css } from '@emotion/react'
import theme from '../themes/MainTheme';

function Footer() {
    return (
        <footer 
            css={css`
                display: flex,
                justify-content: center,
                background-color: ${theme.palette.lime.main},
                left: 0,
                bottom: 0,
                z-index: 100`}
            >
            <div
            css={css`
                width: auto,
                length: 20px`}
            >
                <img src="src\assets\logos\commit-me.png"/>
            </div>
        </footer>
    )
}

export default Footer;

//hover:opacity-75 transition-opacity