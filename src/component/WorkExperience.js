import { Grid, TextField } from '@mui/material'
import React from 'react'
import Projects from './Projects'

function WorkExperience() {
    return (
        <>
            <Grid container>
                <Grid item lg={12} sx={12}>
                    <h2 style={{ border: "0.1px solid #239ce2", backgroundColor: '#239ce2', textAlign: 'center', color: '#fff' }}>Work Experience</h2>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={2}style={{display:'flex',alignItems:'start'}}>
                    <h3>Company:</h3>
                </Grid>
                <Grid item xs={10} >
                    <TextField
                        style={{width:'100%'}}
                        Company
                        id="outlined-required"
                        label="Company"
                        placeholder="Enter your Company Name"
                    />
                </Grid>

            </Grid> 
            <Grid container spacing={2}>
                <Grid item xs={2}style={{display:'flex',alignItems:'start'}}>
                    <h3>From:</h3>
                </Grid>
                <Grid item xs={5} >
                    <TextField
                        style={{width:'100%'}}
                        periodFrom
                        id="outlined-required"
                        label="Period From"
                        placeholder="Enter your Working Period in last  Company "
                    />
                </Grid>
                <Grid item xs={5} >
                    <TextField
                        style={{width:'100%'}}
                        periodFrom
                        id="outlined-required"
                        label="Period To"
                        placeholder="Enter your Working Period To "
                    />
                </Grid>
            </Grid> 
            <Grid container spacing={2}>
                <Grid item xs={2}style={{display:'flex',alignItems:'start'}}>
                    <h3>Designation:</h3>
                </Grid>
                <Grid item xs={10} >
                    <TextField
                        style={{width:'100%'}}
                        Company
                        id="outlined-required"
                        label="Company"
                        placeholder="Enter your Designation"
                    />
                </Grid>

            </Grid> 
           <Projects/>

          
            
           
        </>
    )
}

export default WorkExperience