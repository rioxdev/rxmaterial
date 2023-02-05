import { makeStyles, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: any) => ({
    texfield: {
        margin: 5
    }
}));

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];
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
            <div>
                <form noValidate autoComplete="off">
                    <TextField className={classes.texfield} label="test erreur" error />

                    <TextField className={classes.texfield} label="Comment" multiline maxRows={5} />
                    <TextField className={classes.texfield}
                        select
                        label="Currency"
                        value={"BTC"}
                    >
                        {
                            currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>

                            ))
                        }
                    </TextField>
                </form>
            </div>
        </>

    )
}