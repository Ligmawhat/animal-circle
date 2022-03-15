import { CardMedia } from "@material-ui/core";
import { CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/ac/userInfoAc";

const UserInfoText = () => {
  const { currUser } = useSelector((state) => state);
  const { userInfo } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo(currUser.id));
  }, []);
  return (
    <>
      {userInfo ? (
        <CardContent>
          <Typography color="text.secondary">Имя: {userInfo?.first_name}</Typography>
          <Typography color="text.secondary">Фамилия: {userInfo?.last_name}</Typography>
          <Typography color="text.secondary">email: {userInfo?.email}</Typography>
          <Typography color="text.secondary">мобила: {userInfo?.mobile_phone}</Typography>{" "}
          <Typography color="text.secondary">аватар: {userInfo?.avatar}</Typography>
          <CardMedia
            component="img"
        height="194"
        image= {`http://localhost:3001/useravatars/${userInfo?.avatar}`}>
          </CardMedia>
        </CardContent>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserInfoText;
