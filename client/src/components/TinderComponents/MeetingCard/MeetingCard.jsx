import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ClearIcon from '@mui/icons-material/Clear'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeDog,
  changeDogAndGetId,
  getOneDog,
} from '../../redux/ac/tinderAc'
import { useSprings, animated, to as interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import './MeetingCard.css'

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`

const MeetingCard = () => {
  const { oneDog } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOneDog())
  }, [])

  const onDeleteHandler = (id) => {
    setTimeout(() => {
      dispatch(changeDog(id))
    }, 1000)
  }

  const onDeleteHandlerOnLike = (id) => {
    setTimeout(() => {
      dispatch(changeDogAndGetId(id))
    }, 1000)
  }

  let isGone
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(oneDog.length, (i) => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
      if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return // We're only interested in changing spring-data for the current spring
        isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1 // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })
      if (!down && gone.size === oneDog.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600)
    },
  )

  const tinderDisLike = (position, idDog, isLeft) => {
    if (isLeft) {
      position > 0 ? onDeleteHandlerOnLike(idDog) : onDeleteHandler(idDog)
    }
  }
  console.log(oneDog, 'ONEDOG')
  return (
    <div id="tindercard">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          onClick={(e) =>
            tinderDisLike(x.animation.fromValues[0], oneDog[i].id, isGone)
          }
          key={i}
          style={{ x, y }}
        >
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            id={oneDog[i].id}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(http://localhost:3001/dogs/${oneDog[i].url})`,
              //   backgroundImage: `url(${oneDog[i].url})`
            }}
          >
            <div className="insideCard">
              <p>{oneDog[i].name}</p>
              <p>{oneDog[i].desc}</p>
            </div>
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default MeetingCard
