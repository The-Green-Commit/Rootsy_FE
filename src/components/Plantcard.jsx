import { useEffect, useState } from "react";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

function Plantcard () {

    const [plants, setPlants] = useState([]);
    
    useEffect(() => {
        setPlants();
    }, []);

    if (!plants) return (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="inherit" />
        </Stack>)

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