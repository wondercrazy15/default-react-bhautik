import * as React from 'react';
import { styled } from '@mui/material/styles'; 
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Container, Box } from '@mui/material';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

export default function BottomAppBar() {
    return (
        <React.Fragment>
            <Box sx={{ bgcolor: 'primary.main' }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer">
                            <MenuIcon />
                        </IconButton>
                        <StyledFab color="secondary" aria-label="add">
                            <AddIcon />
                        </StyledFab>
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </Box>
        </React.Fragment>
    );
}
