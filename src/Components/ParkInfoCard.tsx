import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Park } from "../interfaces/Models";

const useStyles = makeStyles({
    root: {
        margin: 10
    },
    media: {
        height: 150,
    },
    header: {
        textAlign: 'left'
    },
    desc: {
        textAlign: 'left'
    }
});

export const ParkInfoCard = (props: { park: Park; }) => {
    const classes = useStyles();
    const park = props.park;

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={park.images[0].url}
                title={park.images[0].title}
            />
            <CardContent className={classes.header}>
                <Typography>{park.addresses[0].city}, {park.addresses[0].stateCode}</Typography>
            </CardContent>
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                    {park.fullName}
                </Typography>
                <Typography className={classes.desc} variant="body2" color="textSecondary" component="p">
                    {park.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                            </Button>
                <Button size="small" color="primary">
                    Learn More
                            </Button>
            </CardActions>
        </Card>
    );
};