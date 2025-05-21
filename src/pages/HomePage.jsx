/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import RandomPlantModule from "../components/RandomPlantModule";
import Button from '../components/Button';

function HomePage() {
    return (
        <main
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 97vh;
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
            <section
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family: 'Roboto';`}
            >
                <h2>
                What do you want to do?
                </h2>
                <div
                    css={css`
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        widht: 38vh;`}
                >
                    <Button 
                        text="FIND A PLANT"
                    />
                    <Button 
                        text="ADD A PLANT"
                    />
                </div>
            </section>
        </main>
    )
}

export default HomePage;