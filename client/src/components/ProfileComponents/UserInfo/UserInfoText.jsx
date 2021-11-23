import { CardContent, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const UserInfoText = () => {
  const { userInfo } = useSelector((state) => state);
  return (
    <>
      <CardContent>
        <Typography color="text.secondary">Имя: </Typography>
        <Typography color="text.secondary">Фамилия: </Typography>
        <Typography color="text.secondary">пол: </Typography>
        <Typography color="text.secondary">порода: </Typography>
      </CardContent>
    </>
  );
};

export default UserInfoText;
