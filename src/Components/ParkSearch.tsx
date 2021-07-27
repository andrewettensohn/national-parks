import { FormControl, InputLabel, MenuItem, Paper, Select } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import StateIdentifiers from '../data/StateIdentifiers.json';
import { getParksForStateIdentifier } from "../data/RestService";
import { Park } from "../interfaces/Models";

const useStyles = makeStyles({
    formSurface: {
        minHeight: 100,
        padding: 10
    },
    formControl: {
        marginTop: 5,
        minWidth: 120,
    },
});

export const ParkSearch = () => {
    const [parks, setParks] = React.useState([] as Park[]);
    const classes = useStyles();

    const handleChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
        setParks(await getParksForStateIdentifier(event.target.value as string));
    };

    return (
        <Paper className={classes.formSurface}>
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value="AL"
                    onChange={handleChange}
                    label="State"
                >
                    {StateIdentifiers.map(x => {
                        return (
                            <MenuItem key={x.identifier} value={x.identifier}>
                                {x.name}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </Paper>
    );
}