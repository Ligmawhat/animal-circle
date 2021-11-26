// import { Input, Button, Grid, CardMedia } from '@mui/material'
// import React, { useEffect } from 'react'
// import { Card } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import NavBar from '../../Navbar/Navbar'
// import {
//   approveSelectedDogs,
//   getWhoLikedMyDog,
//   setWhoLikedMyDog,
// } from '../../redux/ac/tinderAc'
// import ProfileNav from '../ProfileNav/ProfileNav'

// const Likes = () => {
//   const { whoLikedMyDog, currUser } = useSelector((state) => state)

//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(getWhoLikedMyDog(currUser.id))
//     return () => {
//       dispatch(setWhoLikedMyDog([]))
//     }
//   }, [])

//   console.log(whoLikedMyDog, 'WHO')
//   const deleteHandler = () => {
//     //logika udaenia
//   }

//   const sendHandler = (id) => {
//     dispatch(approveSelectedDogs(id))
//   }

//   return (
//     <>
//       <NavBar />
//       <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
//         <Input />
//         <Button>Search</Button>
//       </div>
//       <hr />
//       <Grid item xs={12} md={9}>
//         <ProfileNav />
//       </Grid>
//       {currUser.usertype === 'user' ? (
//         <Grid container spacing={2} sx={{ mt: 5 }}>
//           <Grid item xs={12} md={9} sx={{ ml: 40 }}>
//             {whoLikedMyDog.length > 0 &&
//               whoLikedMyDog.map((el) => (
//                 <Card
//                   sx={{ maxWidth: 300, height: 500 }}
//                   style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-around',
//                   }}
//                 >
//                   <p>
//                     Вы {el.whoLiked} лайкнули собаку по имени {el.name}, её
//                     порода: {el.breed}. Она содержится в приюте:{' '}
//                     {el.authorAnimal}
//                   </p>
//                   <CardMedia
//                     component="img"
//                     height="194"
//                     image={`http://localhost:3001/dogs/${el.url}`}
//                     alt="Paella dish"
//                   />
//                   <Button onClick={() => deleteHandler()}> Delete </Button>
//                   {el?.status ? (
//                     <Button disabled> Send </Button>
//                   ) : (
//                     <Button onClick={() => sendHandler(el.id)}> Send </Button>
//                   )}
//                 </Card>
//               ))}
//           </Grid>
//         </Grid>
//       ) : (
//         <Grid container spacing={2} sx={{ mt: 5 }}>
//           <Grid item xs={12} md={9} sx={{ ml: 40 }}>
//             {whoLikedMyDog.length > 0 &&
//               whoLikedMyDog.map((el) =>
//                 el.status === true ? (
//                   <Card
//                     sx={{ maxWidth: 300, height: 500 }}
//                     style={{
//                       display: 'flex',
//                       flexDirection: 'column',
//                       justifyContent: 'space-around',
//                     }}
//                   >
//                     <ul>
//                       <li>Потенциальный опекун: {el.whoLiked}</li>
//                       <li>Потенциальный выбор: {el.name}</li>
//                       <li>Электронная почта пользователя: {el.user_email}</li>
//                       <li>Контактный номер пользователя: {el.user_mobile_phone}</li>

//                       <li>
//                         <CardMedia
//                           component="img"
//                           height="95"
//                           image={`http://localhost:3001/dogs/${el.url}`}
//                         />
//                       </li>
//                     </ul>
//                   </Card>
//                 ) : (
//                   ''
//                 ),
//               )}
//           </Grid>
//         </Grid>
//       )}
//     </>
//   )
// }

// export default Likes