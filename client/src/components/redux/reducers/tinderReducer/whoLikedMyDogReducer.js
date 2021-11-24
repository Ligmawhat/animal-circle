import { WHO_LIKED_MY_DOG } from "../../types/tinderType";

const whoLikedMyDog = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case WHO_LIKED_MY_DOG:
      return payload;
    default: {
      return state;
    }
  }
};

export default whoLikedMyDog;
