import { Button, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


export default function RxGrids(){


    return(
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Paper style={{height : 200}}> 
                    <TextField variant="standard" label="nom"/>
                    <Button variant="outlined" >Action</Button>
                </Paper>

            </Grid>
            <Grid item xs={12} md={6}>
                <div style={{background : 'green'}}>
                    grid item2
                </div>
            </Grid>
        </Grid>
    )
}