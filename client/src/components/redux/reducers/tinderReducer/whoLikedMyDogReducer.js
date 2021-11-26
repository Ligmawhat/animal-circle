import { WHO_LIKED_MY_DOG, APPROVE_DOG } from '../../types/tinderType'

const whoLikedMyDog = (state = [], action) => {
  const { type, payload } = action
  console.log(payload, 'PAYLOAD ID')
  switch (type) {
    case WHO_LIKED_MY_DOG:
      return payload
    case APPROVE_DOG:
      // state.find((el) => el.id === payload ? el.status = !el.status : el)
      return state.map((el) => {
        if (el.id === payload) {
          el.status = !el.status
          return el
        }
        return el
      })
    default: {
      return state
    }
  }
}

export default whoLikedMyDog
