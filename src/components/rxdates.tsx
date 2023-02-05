import 'date-fns'
import { makeStyles } from "@material-ui/core"

import { useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";


const useStyles = makeStyles((theme) => (
    {
        spacing: {
            margin: 1
        }
    }
))

export default function RxDates() {

    const classes = useStyles();

    const [theDate, setTheDate] = useState(new Date('2014-08-18T21:11:54'))

    const changeHandler = (date: any) => {
        setTheDate(date);
    }

    return (
        <>
         
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='dd/MM/yyyy'
                    margin='normal'
                        onChange={changeHandler}
                        value={theDate}
                    />
                </MuiPickersUtilsProvider>

     
        </>
    )
}