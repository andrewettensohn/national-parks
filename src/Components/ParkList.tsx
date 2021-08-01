import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Park } from "../interfaces/Models";
import { ParkInfoCard } from "./ParkInfoCard";

export const ParkList = (props: { parks: Park[]; }) => {

    if (props.parks.length > 0) {

        return (
            <Grid container justifyContent="center">
                {props.parks.map(park => {
                    return (
                        <Grid key={park.id} item xs={12}>
                            <ParkInfoCard park={park} />
                        </Grid>
                    )
                })}
            </Grid>
        );
    } else {
        return (<div></div>);
    }
}