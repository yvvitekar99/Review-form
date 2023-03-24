import { Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import resume from "../style/resume.css"
import Education from "./Education";
import ProfessionalSummary from "./ProfessionalSummary";
import Skillset from "./Skillset";
import SkillSets from "./SkillSets";
import WorkExperience from "./WorkExperience";

function Resume() {
    const [summary, setSummary] = useState('');
    const [summaryList, setSummaryList] = useState([]); 
    const [married, setMarried] = useState('')

    const handleSummary = () => {
    setSummaryList([...summaryList,{val:summary}])
    }

    const handleChange = (event) => {
      setMarried(event.target.value);
    };


    const removeItem = (ele) => {
      if (window.confirm(`Are you sure you want to remove ${summaryList}?`)) {
        console.log("first",ele)
        const newItems = summaryList.filter((i) => i !== ele);
        setSummaryList(newItems);
        console.log(newItems)
  
      }
      
    };
  
   
return (
    <>
    <div className="container">
    <div className="main">
    <h3>Resume</h3>
      <div className="detail">
      <div className="row">
      <TextField
          Name
          id="outlined-required"
          label="Name"
          placeholder="Enter your Name"
        />
          <TextField
          Email
          id="outlined-required"
          label="Email"
          placeholder="Enter your email"
        />
      </div>
    
      <div className="row">
      <TextField
          Title
          id="outlined-required"
          label="Title"
          placeholder="Enter your Designation"
        />
         <TextField
          Enter Phone
          id="outlined-required"
          label="Enter Phone"
          placeholder="Enter Your phone Number"
        />
      </div>
      <div className="row">
      <TextField
          Address
          id="outlined-required"
          label="Address"
          placeholder="Enter your Address"
        />
          <TextField
          gender
          id="outlined-required"
          label="gender"
          placeholder="Enter your gender"
        />
      </div>
      <div style={{textAlign:'left'}}>

      <Select
          sx={{width:'49%'}}
          value={married}
          label="MaritalStatus"
          onChange={handleChange}
        >
          <MenuItem value={10}>Married</MenuItem>
          <MenuItem value={20}>Unmarried</MenuItem>
          <MenuItem value={30}>Divorce</MenuItem>
        </Select>
      {/* <TextField 
          Marital Status
          id="outlined-required"
          label="Marital Status"
          placeholder="Enter your Marital Status"
        />  */}
      </div>
    </div>
    <div>
    <h2 style={{border:"0.1px solid #239ce2",backgroundColor:'#239ce2',textAlign:'center',color:'#fff'}}>Professional Summary</h2>
    </div>
    <div className="detail">
    {Array.isArray(summaryList) && summaryList.length  ? <ul style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>{summaryList.map((ele,index)=> <li>{ele.val}<Button onClick={() => removeItem(ele)}>x</Button></li>) } </ul> : " "}
    <div className="row">
      <TextField
          Summary
          id="outlined-required"
          value={summary}
          label="Summary"
          placeholder="Enter your summary"
          onChange={(e)=> setSummary(e.target.value)}
        />
        <Button onClick={handleSummary} variant="contained">Add</Button>
        </div>
    </div>
   {/* <Skillset/> */}
   <SkillSets/>
   <ProfessionalSummary/>
   <Education/>
   <WorkExperience/>
     </div>
    </div>
    </>
)
}
export default Resume

 