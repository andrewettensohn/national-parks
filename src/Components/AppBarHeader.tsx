import { Container, Toolbar, Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bar: {
        backgroundImage: `url(https://i.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4)`,
        display: 'flex',
        maxHeight: 100,
        fontSize: 'calc(10px + 2vmin)'
    },
});

export const AppBarHeader = () => {

    const classes = useStyles();

    return (
        <AppBar className={classes.bar}>
            <Toolbar>
                <Typography variant="h6">My National Parks</Typography>
            </Toolbar>
        </AppBar>
    );
}