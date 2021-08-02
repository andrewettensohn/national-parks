import { Button, FormControl, Grid, InputLabel, MenuItem, NativeSelect, Paper, Select, TextField, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import StateIdentifiers from '../../data/StateIdentifiers.json';
import { getParks } from "../../data/RestService";
import { Park } from "../../interfaces/IPark";
import { ParkList } from "./ParkList";

const useStyles = makeStyles({
    formSurface: {
        minHeight: 100,
        padding: 10
    },
    stateFormControl: {
        minWidth: 150,
    },
    searchTextFormControl: {
        minWidth: 300,
    },
    pos: {
        marginBottom: 50,
        marginTop: 25
    },
});

export const ParkSearch = () => {
    const [parks, setParks] = React.useState([] as Park[]);
    const [selectedState, setSelectedState] = React.useState("");
    const [searchText, setSearchText] = React.useState("");
    const classes = useStyles();

    const onStateIdentifierChanged = async (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedState(event.target.value as string);
        setParks(await getParks(event.target.value as string, searchText));
    };

    const onSearchTextChanged = async (event: React.ChangeEvent<{ value: unknown }>) => {
        setSearchText(event.target.value as string);
        setParks(await getParks(selectedState, event.target.value as string));
    };

    const onResetButtonClicked = () => {
        setSearchText("");
        setSelectedState("");
        setParks([]);
    };

    return (
        <div>
            <Paper className={classes.formSurface}>
                <Grid justifyContent="center" container>
                    <Grid item>
                        <Typography variant="h6" color="textSecondary" component="h2">
                            National Park Search
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            Search for national parks using a state or your own search keyword.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid justifyContent="center" container className={classes.pos}>
                    <Grid item>
                        <FormControl className={classes.stateFormControl}>
                            <NativeSelect
                                value={selectedState}
                                onChange={onStateIdentifierChanged}
                            >
                                <option>State</option>
                                {StateIdentifiers.map(x => {
                                    return (
                                        <option key={x.identifier} value={x.identifier}>
                                            {x.name}
                                        </option>
                                    );
                                })}
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid justifyContent="center" container className={classes.pos}>
                    <Grid item>
                        <FormControl className={classes.searchTextFormControl} variant="outlined">
                            <TextField id="outlined-basic" label="Search..." value={searchText} variant="outlined" onChange={onSearchTextChanged} />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid justifyContent="flex-end" container>
                    <Grid item>
                        <Button variant="contained" onClick={onResetButtonClicked}>Reset</Button>
                    </Grid>
                </Grid>
            </Paper>
            <ParkList parks={parks} />
        </div>
    );
}