import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { estilos } from '../Styles';
import FormDialog from '../components/FormDialog';
import TextField from '@mui/material/TextField';

export function PerfilUser() {
    return (
        <>
            <div style={estilos.profile}>
                <h1 style={estilos.titulos}>Perfil</h1>
                <Avatar alt="Remy Sharp" src="/public/foto-cv.jpg" style={estilos.avatar} />
                <TextField
                    disabled
                    label="Usuario"
                    id="outlined-size-small"
                    defaultValue="Agustin Gonzalez"
                    size="small"
                    variant="filled"
                />
                <TextField
                    disabled
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    defaultValue="Agustin Gonzalez"
                    autoComplete="current-password"
                    variant="filled"
                />
                <FormDialog title="Editar perfil" />
            </div>
        </>
    )
}