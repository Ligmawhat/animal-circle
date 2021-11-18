import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, CardActionArea} from '@mui/material';

const Walk = () => {
    return (
        <div>
            <Box>
            <Card sx={{ width: 300 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            WalkCard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            API и Чат для совместной прогулки
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Box>
        </div>
    );
};

export default Walk;