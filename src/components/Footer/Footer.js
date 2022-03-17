import * as React from 'react'; 
import { Container, Box, Typography } from '@mui/material';



export default function BottomAppBar() {
    return (
        <React.Fragment>
            <Box sx={{ bgcolor: 'primary.main', py: 5 }}>
                <Container maxWidth="xl">
                    <Typography variant="subtitle1" gutterBottom component="div">
                        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div">
                        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom>
                        button text
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        caption text
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        overline text
                    </Typography>
                </Container>
            </Box>
        </React.Fragment>
    );
}
