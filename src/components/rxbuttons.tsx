import { Button, IconButton, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1)
    }
}))

export default function RxButtons() {

    const clickHandler = () => {
        alert('material-ui buttons in action');
    }

    const classes = useStyles();

    return (
        <>
            <div>
                <Button className={classes.button} variant='outlined' size='small' color='default' onClick={clickHandler}  > smalll </Button>
                <Button className={classes.button} variant='contained' size='medium' color='secondary' onClick={clickHandler} > medium </Button>
                <Button className={classes.button} variant='text' size='large' color='primary' onClick={clickHandler} > large </Button>
                <Button>Text button</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                >Delete
                </Button>
            </div>
            <div>
                <IconButton className={classes.button} color="primary" onClick={clickHandler}>
                    <AddShoppingCartIcon />
                </IconButton>
            </div>
        </>


    )
}