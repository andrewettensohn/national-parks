import axios from "axios"
import { baseParkRoute, parksApiKey } from "../app/constants"

export const getParksForStateIdentifier = async (stateIdentifier: string) => {

    const response = await axios.get(`${baseParkRoute}?stateCode=${stateIdentifier}${parksApiKey}`);

    return response.data;
}