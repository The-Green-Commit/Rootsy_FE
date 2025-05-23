/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Plantcard from "./Plantcard";

function PlantsList() {

    const plantCards = Array.from;

    return (
        <ul
            css={css`
            paddin-left: initial;`}
        >
            <li
                css={css`
                label: foundPlants-list;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 32vh;
                font-family: 'Roboto';`}
            >
                {<Plantcard />}
            </li>
        </ul>
    )

}

export default PlantsList;