import React from 'react';
import NavBar from "../Navbar/Navbar";
import {Button, Input} from "@mui/material";

const Prodavito = () => {
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
        </div>
        </>
    );
};

export default Prodavito;