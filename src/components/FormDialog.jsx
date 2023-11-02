import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="contained" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent className='flex-direction: column'>
                    <TextField 
                        id="standard-basic"
                        label="Usuario"
                        defaultValue="Agustin Gonzalez"
                        variant="filled"
                    />
                    <br></br>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        defaultValue="Agustin Gonzalez"
                        autoComplete="current-password"
                        variant="filled"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleClose}>Aceptar</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}