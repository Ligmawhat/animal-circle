import {TYPE_FROM_BACK} from "../components/redux/types/socketType";

export const createSocketMessage = (dispatch) => (event) => {
    const dataMessage = JSON.parse(event.data)
    switch (dataMessage.type) {
        case TYPE_FROM_BACK: dispatch(actionSocket(dataMessage.payload))
    }
}