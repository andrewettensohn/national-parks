import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getParkById } from "../../data/RestService";
import { Park } from "../../interfaces/IPark";
import { ParkDetailsParams } from "../../interfaces/IParkDetailsParams";

export const ParkDetails = () => {
    //const { id } = useParams<{ id: string }>();
    const params = new URLSearchParams(document.location.search.substring(1));
    const id = params.get("id");
    const [park, setPark] = React.useState({} as Park);

    useEffect(() => {

        getParkById(id as string)
            .then((item) => setPark(item))
            .catch((err) => console.log(err));

    }, []);


    return (
        <div>Hello World!</div>
    );
}