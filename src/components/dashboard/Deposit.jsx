import { Link, Typography } from '@mui/material'
import React from 'react'

export const Deposit = () => {

    const  preventDefault = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Typography component="p" variant="h4">
                $3,024.00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 15 March, 2019
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                View balance
                </Link>
            </div>
        </>

    )
}
