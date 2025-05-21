/** @jsxImportSource @emotion/react */
import React from 'react';
import { IconButton } from '@mui/material';
import theme from '../themes/MainTheme';
import { css } from '@emotion/react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header() {
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };

    
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
            <img src="src/assets/logos/rootsy_logo.png"
                css={css`
                    width: auto;
                    height: 70px`}
            />
        <IconButton 
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <img src="src/assets/icons/menu_icon.png"
                css={css`
                    width: auto;
                    height: 50px`}
            />
        </IconButton>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
                    css={css`
                    font-family:""`}
            >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>Find a Plant!</MenuItem>
            <MenuItem onClick={handleClose}>Add a plant!</MenuItem>
            </Menu>
            </header>
    )
}

export default Header;