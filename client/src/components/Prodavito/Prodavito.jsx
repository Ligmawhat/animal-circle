import React, {useEffect} from 'react';
import NavBar from "../Navbar/Navbar";
import {Button, Input} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getAllCardItems} from "../redux/ac/itemsProdavitoAc";
import ProdavitoItem from "../ProdavitoItem/ProdavitoItem";
import ProdavitoCategory from "../ProdavitoCategory/ProdavitoCategory";

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
            <div>
                {allAGoodsFromBack?.map(el => <ProdavitoItem el={el}/>)}
            </div>
            <div>
                {allCategoryFromBack?.map(el => <ProdavitoCategory el={el}/>)}
            </div>
        </div>
        </>
    );
};

export default Prodavito;