import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

function Projects() {

    const [projects, setProjects] = useState([ProjectTemplate()]);
    const [projectNo, setProjectNo] = useState(1);


    const handleOpenContainer = () => {
        setProjects([...projects, ProjectTemplate()])
    }
    return (
        <>
            {projects.map(project => {
                return project;
            })}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '10px' }}>
                <Button variant="contained" onClick={handleOpenContainer}>Add</Button>
            </Grid>
        </>
    )
}

export default Projects


const ProjectTemplate = () => {
    return <Grid container spacing={2}>

        <Grid item xs={2} style={{ display: 'flex', alignItems: 'start' }}>
            <h3>Projects: </h3>
        </Grid>
        <Grid item xs={5} >
            <TextField
                style={{ width: '100%' }}
                Project Name
                id="outlined-required"
                label="Project Name"
                placeholder="Enter your Project Name"
            />
        </Grid>
        <Grid item xs={5} >
            <TextField
                style={{ width: '100%' }}
                Project Technology
                id="outlined-required"
                label="Project Technology"
                placeholder="Enter your Project Technology"
            />
        </Grid>

        <Grid item xs={2} style={{ display: 'flex' }} >

        </Grid>

        <Grid item xs={10} >
            <TextField
                style={{ width: '100%' }}
                Description
                id="outlined-required"
                label="Project Description"
                placeholder="Enter your project description"
            />
        </Grid>

        <Grid item xs={2} style={{ display: 'flex', alignItems: 'start' }}>

        </Grid>

        <Grid item xs={10} >
            <TextField
                style={{ width: '100%' }}
                Responsibilities
                id="outlined-required"
                label="Project Responsibilities"
                placeholder="Enter your project responsibilities "
            />
        </Grid>
        {/* {Array.isArray(summaryList) && summaryList.length  ? <ul style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
    {summaryList.map((ele,index)=> <li>{ele.val}<Button onClick={() => removeItem(ele)}>x</Button></li>) } </ul> : " "} */}


    </Grid>
}