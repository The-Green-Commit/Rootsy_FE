/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState } from "react";

function Plantcard () {

    const [plants, setPlants] = useState([]);
    
    useEffect(() => {
        setPlants();
    }, []);

    if (!plants) return (
        <section 
            css={css`
                label: cardNotFound-section;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family: 'Roboto';`}
        >
            <img src="src/assets/images/robot_NotFound.png"/>
            <p>No plants found</p>
        </section>
    )

    return (
    <>
        <section>
            {plants.map((plant) => (
                <div key={plant.id}>
                    <img src={plant.img} />
                    <div
                        css={css`
                        color: black;
                        background-color: ${theme.palette.mediumGreen.main};
                        opacity: 0.95;
                        font-size: 15px;
                        height: 3vh;
                        border-radius: 30px;
                        border-bottom: solid;`}
                    >
                        <h4 className="card_title">{plant.name}</h4>
                    </div>
                </div>
            ))}
        </section>
    </>
    )
}

export default Plantcard;