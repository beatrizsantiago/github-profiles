import React from 'react'
import ReactLoading from 'react-loading'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Loading = () => (
    <Grid container direction="column" alignItems="center" justify="center" style={{ height: 300 }}>
        <ReactLoading type="spinningBubbles" color="#1c1c1c" height={70} width={70} />
        <Typography variant="h5" style={{ marginTop: 20 }}>Buscando...</Typography>
    </Grid>
)

export default Loading