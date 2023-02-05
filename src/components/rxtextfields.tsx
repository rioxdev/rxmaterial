import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: any) => ({
    texfield: {
        margin: 5
    }
}));

export default function RxTextfields() {
    const classes = useStyles();

    return (
        <>
            <div>
                <form noValidate autoComplete="off">
                    <TextField className={classes.texfield} label="Standard" />
                    <TextField className={classes.texfield} label="Filled" variant="filled" />
                    <TextField className={classes.texfield} label="Outlined" variant="outlined" />
                    <TextField className={classes.texfield} label="Standard" variant="standard" />
                </form>
            </div>
            <div>
                <form noValidate autoComplete="off">
                    <TextField className={classes.texfield} label="Password" type={'password'} />
                    <TextField className={classes.texfield} label="Default value" defaultValue={"Entrer le nom"} />
                    <TextField className={classes.texfield} label="Number" type={"number"} />
                    <TextField className={classes.texfield} label="Disabled" type={"text"} disabled />
                    <TextField className={classes.texfield} label="Search" type="search" />
                </form>
            </div>
        </>

    )
}