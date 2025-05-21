/** @jsxImportSource @emotion/react */
import theme from '../themes/MainTheme';
import { css } from '@emotion/react'

function Header() {
    return (
        <header 
                css={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: ${theme.palette.lime.main};
                    position: fixed;
                    width: -webkit-fill-available;
                    height: 11vh;
                    left: 0;
                    top: 0;
                    z-index: 100;
                    padding: 5px`}
                >
                {/* // css={css`
                //     width: auto;
                //     length: 20px`}
                    */}
            <img src="src/assets/logos/rootsy_logo.png"
                css={css`
                    width: auto;
                    height: 70px`}
            />
            <div>
                <img src="src/assets/icons/search_icon.png"
                    css={css`
                    width: auto;
                    height: 45px;
                    padding: 5px`}
                />
                <img src="src/assets/icons/home_icon.png"
                    css={css`
                    width: auto;
                    height: 45px;
                    padding: 5px`}
                />
            </div>
        </header>
    )
}

export default Header;