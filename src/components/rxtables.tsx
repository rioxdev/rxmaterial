import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core"
import { useEffect } from "react";

const useStyles = makeStyles(

    {
        table: {
            minWidth: 640,
            marginTop: 20
        }
    }
);

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return {
        name: name, calories, fat, carbs, protein
    }
}

const rows = [
    createData('Frozen yoghurt', 150, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
]



export default function RxTables() {

    const classes = useStyles();

    useEffect(() => {
        // console.log('data :', rows);
    }, [])


    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell>Calories</TableCell>
                            <TableCell>Fat</TableCell>
                            <TableCell>Carbs</TableCell>
                            <TableCell>Protein</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row) => (
                                <TableRow key={row.name} >
                                    <TableCell scope="row" component={"th"}>{row.name}</TableCell>
                                    <TableCell>{row.calories}</TableCell>
                                    <TableCell>{row.fat}</TableCell>
                                    <TableCell>{row.carbs}</TableCell>
                                    <TableCell>{row.protein}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}