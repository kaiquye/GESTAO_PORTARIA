import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


function Radios({ setAcesso, acesso }) {

    return (
        <main>
            <FormControl component="fieldset">
                <FormLabel component="legend">Acesso</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={acesso} onChange={(e) => setAcesso(e.target.value)}>
                    <FormControlLabel value={'1'} control={<Radio />} label="Operador" />
                    <FormControlLabel value={'2'} control={<Radio />} label="Administrador" />
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="Visitante" />
                </RadioGroup>
            </FormControl>
        </main >
    )
}

export default Radios;
