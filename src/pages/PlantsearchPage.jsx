/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';

function PlantsearchPage() {
    return (
        <>
        <main
            css={css`
                label: plantsearchpage-main;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 56vh;
                font-family: 'Roboto';`}
        >
            <section
                css={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    width: 37vh;`}
            >
                <img src="src/assets/icons/search_icon.png"
                    css={css`
                        width: auto;
                        height: 34px`}
                />
                <h2
                    css={css`
                        margin-left: 10px;`}
                >
                    Search
                </h2>
            </section>

            <section>

                <div
                    css={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    width: 37vh;
                    margin-bottom: 1vh;`}>
                    <Box sx={{ minWidth: 120 }}
                        css={css`
                        margin-right: 20px;`}>
                        <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Family
                        </InputLabel>
                        <NativeSelect
                        defaultValue={30}
                        inputProps={{
                        name: 'family',
                        id: 'uncontrolled-native',
                        }}
                        >
                        <option value={10}>null</option>
                        <option value={20}>null</option>
                        <option value={30}>null</option>
                                </NativeSelect>
                        </FormControl>
                    </Box>

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Type
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'type',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>null</option>
                            <option value={20}>null</option>
                            <option value={30}>null</option>
                        </NativeSelect>
                        </FormControl>
                    </Box>


                </div>

                <div
                    css={css`
                        display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    width: 37vh;
                    margin-bottom: 1vh;`}>
                    <Box sx={{ minWidth: 120 }}
                        css={css`
                        margin-right: 1vh;`}
                    >
                        <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Genus
                        </InputLabel>
                        <NativeSelect
                            defaultValue={10}
                            inputProps={{
                            name: 'genus',
                            id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>null</option>
                            <option value={20}>null</option>
                            <option value={30}>null</option>
                        </NativeSelect>
                        </FormControl>
                    </Box>

                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="outlined-basic" label="By Keyword" variant="outlined" />

                    </Box>

                </div>
            </section>

            <section
                css={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                width: 37vh;`}
            >
                <h2
                    css={css`
                    margin-left: 10px;`}
                >
                    Results:
                </h2>

                

            </section>
        </main>
        </>
    )
}

export default PlantsearchPage;