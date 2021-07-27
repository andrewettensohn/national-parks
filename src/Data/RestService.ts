import axios from "axios"
import { baseParkRoute, parksApiKey } from "../app/constants"
import { Park } from "../interfaces/Models";

export const getParksForStateIdentifier = async (stateIdentifier: string): Promise<Park[]> => {

    const response = await axios.get(`${baseParkRoute}?stateCode=${stateIdentifier}${parksApiKey}`);
    const parks = response.data as Park[];

    return parks;
}