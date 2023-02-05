
import { makeStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createTheme";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";


const useStyles = makeStyles((theme : Theme)=>({
    rioxa : {
        margin : 1
    }})
)

export default function RxTextboxes() {

    const classes = useStyles();

    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked2(event.target.checked)
    }

    useEffect(() => {
        console.log(checked)
        console.log(checked2)
    }, [checked, checked2])

    return (
        <>
            <div>
                <Checkbox
                    color="secondary"
                    checked={checked}
                    onChange={handleChange}
                />
                {
                    checked && <span>Checkbox checked</span>
                }
            </div>
            <div>
                <FormControlLabel className={classes.rioxa}
                    control={
                        <Checkbox
                            color="primary"
                            checked={checked2}
                            onChange={handleChange2} />
                    }
                    label="Check me"

                />
                {
                    checked2 && <span>you checked me</span>
                }

            </div>
        </>
    )
}