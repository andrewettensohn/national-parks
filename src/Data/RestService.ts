import axios from "axios"
import { baseParkRoute, parksApiKey } from "../app/constants"
import { Park } from "../interfaces/IPark";

export const getParkById = async (id: string): Promise<Park> => {

    if (!id) return {} as Park;

    const action = `?id=${id}`;
    const response = await axios.get(`${baseParkRoute}${action}${parksApiKey}`);
    const park = response.data.data[0] as Park;

    return park;
}

export const getParks = async (stateIdentifier: string, searchText: string): Promise<Park[]> => {

    const isStateIdentifierPresent = stateIdentifier && stateIdentifier.trim() && stateIdentifier !== "State";
    const isSearchTextPresent = searchText && searchText.trim();

    let action = "";

    if (isSearchTextPresent && isStateIdentifierPresent) {

        action += `?stateCode=${stateIdentifier}&q=${searchText}`

    } else if (isSearchTextPresent) {

        action += `?q=${searchText}`

    } else if (isStateIdentifierPresent) {

        action += `?stateCode=${stateIdentifier}`

    } else {

        return [];
    }

    const response = await axios.get(`${baseParkRoute}${action}${parksApiKey}`);
    const parks = response.data.data as Park[];
    return parks;
}