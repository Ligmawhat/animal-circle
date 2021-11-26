import React, { useEffect } from "react";

import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, setUserInfo } from "../../redux/ac/userInfoAc";


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    borderRadius: 20,
  },
  content: {
    padding: 24,
  },
}));

export const ProjectCardDemo = React.memo(function ProjectCard() {

  const { currUser } = useSelector((state) => state);
  const { userInfo } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo(currUser.id));
    // return () => {
    //   dispatch(setUserInfo([]));
    // };
  }, []);


  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  return (
    <>


    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <BrandCardHeader
        // extra={'7 minutes'}
      />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
        image={`http://localhost:3001/useravatars/${userInfo?.avatar}`
        }
          classes={styles}
          // overline={'FACEBOOK INC.'}
          heading={`${userInfo?.first_name}\n
          ${userInfo?.last_name}`}
          body={
          `Почта: ${userInfo?.email}\n 
          \n Телефон:${userInfo?.mobile_phone}`
          }
        />
      </CardContent>
    </Card>

    </>
  );
});

export default ProjectCardDemo
