import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Input, Button, Paper } from "@mui/material";
import { useHistory } from "react-router";
import {useSelector} from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ProfileNav = () => {
  const history = useHistory();

  const {currUser} = useSelector((state) => state)

  return (
    <>
      {currUser.usertype === "user" ? (
        <nav>
          <ul>
            <li onClick={() => history.push(`/user/profile/info`)}>
              <span>Личная Информация</span>
            </li>

            <li onClick={() => history.push(`/user/profile/myGoods`)}>
              <span>Добавить Товар</span>
            </li>

            <li onClick={() => history.push(`/user/profile/likes`)}>
              <span>Избранное</span>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li onClick={() => history.push(`/user/profile/info`)}>
              <span>Личная Информация</span>
            </li>

            <li onClick={() => history.push(`/user/profile/myDogs`)}>
              <span>Добавить Собаку</span>{" "}
            </li>

            <li onClick={() => history.push(`/user/profile/likes`)}> <span>Потенциальные опекуны</span> </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default ProfileNav;
