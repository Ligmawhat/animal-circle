import React, {useEffect} from 'react';
import NavBar from "../Navbar/Navbar";
import {Button, Input} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getAllCardItems} from "../redux/ac/itemsProdavitoAc";
import ProdavitoItem from "../ProdavitoItem/ProdavitoItem";
import ProdavitoCategory from "../ProdavitoCategory/ProdavitoCategory";
import { Box, Grid } from '@material-ui/core';


const Prodavito = () => {

    const dispatch = useDispatch()

    const {allCategoryFromBack, allAGoodsFromBack} = useSelector((state) => state.items)

    useEffect(() => {
        dispatch(getAllCardItems())
    },[])


    return (
        <>
            <NavBar />
        <div>
            <div style={{ display:'flex', justifyContent:'flex-start'}}>
                <Input />
                <Button>
                    Search
                </Button>
            </div>
            <hr />
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                {allAGoodsFromBack?.map(el => <ProdavitoItem key={el.id} el={el}/>)}
                </Grid>
                </Grid>
            <Box sx={{ display: 'flex',
            flexDirection:'row',
            flexWrap: 'wrap'
             }} >
                {allCategoryFromBack?.map(el => <ProdavitoCategory el={el}/>)}
            </Box>
        </div>
        </>
    );
};


export default Prodavito;