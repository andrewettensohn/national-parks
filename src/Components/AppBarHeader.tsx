import { Toolbar, Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bar: {
        backgroundColor: '#213d24',
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