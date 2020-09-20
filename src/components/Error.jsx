import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Error = (props) => (
    <Grid container direction="column" alignItems="center" justify="center" style={{ height: 300 }}>
        <Typography variant="h4" >Não foi possível realizar a busca.</Typography>
        <Typography variant="h6" style={{ color: '#ff0000' }}>{props.error}</Typography>
    </Grid>
)

export default Error