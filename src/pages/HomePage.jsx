/** @jsxImportSource @emotion/react */
import theme from '../themes/MainTheme';
import { css } from '@emotion/react'
import RandomPlantModule from "../components/RandomPlantModule";

function HomePage() {
    return (
        <main
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 80vh;
                font-family: 'Roboto';`}
        >
            <div
                css={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    width: 37vh;`}
            >
                <img src="src/assets/icons/home_icon.png"
                    css={css`
                        width: auto;
                        height: 34px`}
                />
                <h2
                    css={css`
                    margin-left: 10px;`}
                >
                    Hello, Plantlover!
                </h2>
            </div>
            <RandomPlantModule />
        </main>
    )
}

export default HomePage;