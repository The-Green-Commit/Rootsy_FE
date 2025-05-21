/** @jsxImportSource @emotion/react */
import theme from '../themes/MainTheme';
import { css } from '@emotion/react'
import { Button } from "@mui/material";

function RandomPlantModule() {
    return (
        <section 
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 50vh;
                margin-bottom: 1vh;`}
        >
            <div
                css={css`
                font-family: 'Roboto';
                margin: 2px 0 2px 0;
                padding: 0 15px 4px 15px;
                background-color: ${theme.palette.orange.main};
                opacity: 0.75;
                align-items: center;
                height: 6vh;`}
            >
                <h4
                    css={css`
                    opacity: 1;`}
                >
                    Your favorite random plant
                </h4>
            </div>
            <div>
                <img src="src/assets/images/default_plant.JPG" />
            </div>
            <div
                css={css`
                display: flex;
                flex-direction: row-reverse;`}
            >
                <Button variant="contained"
                    css={css`
                        color: black;
                        background-color: ${theme.palette.mediumGreen.main};
                        opacity: 0.95;
                        font-size: 15px;
                        height: 3vh;
                        border-radius: 30px;
                        border-bottom: solid;`}
                >
                    Read More
                </Button>
            </div>
        </section>
    )
}

export default RandomPlantModule;

