/** @jsxImportSource @emotion/react */
import theme from '../themes/MainTheme';
import { css } from '@emotion/react'

function Footer() {
    return (
        <footer 
            css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${theme.palette.lime.main};
                position: fixed;
                width: -webkit-fill-available;
                height: 11vh;
                left: 0;
                bottom: 0;
                z-index: 100`}
            >
                <img src="src/assets/logos/commit-me_logo.png"
                    css={css`
                        width: auto;
                        height: 35px`}
                />
        </footer>
    )
}

export default Footer;

//hover:opacity-75 transition-opacity