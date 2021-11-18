import React from 'react';
import TinderSearch from "../TinderSearch/TinderSearch";
import TinderBox from "../TinderBox/TinderBox";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Tinder = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            TinderCard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Тиндер для собак
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
    );
};

export default Tinder;