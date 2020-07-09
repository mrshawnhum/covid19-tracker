import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import Countup from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

export const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading...'
    }
    return (
    <div className={styles.container}>
        <Grid container spacing={3} justify='center'>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>Infected</Typography>
                    <Typography variant="h5">Real Data</Typography>
                    <Typography color="textSecondary">Reale Date</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
    )
}