import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Mainpage.css'; 
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@progress/kendo-theme-default/dist/all.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Mainpage.css'; 

export default function InnerTabs() {
    return (
        <div>
                <Tabs style={{  marginRight: "213px",marginLeft : "213px",}}>
                <div class="flex-container" style={{  marginTop : "13px",marginBottom : "13px",}}>
  <div class="flex-item-heading flex-item-1">
  <div> <span>Edit </span> </div>


  </div>
  <div class="flex-item-heading flex-item-heading2 flex-item-2">
  <div><button style={{  padding : "8px", border: "none"}}> Dark </button> - <button  style={{ border: "none", padding : "8px",}}>  Light</button> </div>
     


  </div>

</div>
    <TabList  className="row-container" style={{  marginTop : "3px",}}>
      <Tab style={{  marginLeft:"0px",marginRight:"200px",  border: "none"}} >Appearance</Tab>
      |  <Tab style={{     marginLeft:"150px",marginRight:"150px", border: "none" , }}>Conditional </Tab>
    |  <Tab style={{   marginLeft:"150px",marginRight:"150px", border: "none" ,}}>Transition</Tab>

    </TabList>

    <TabPanel>
  
<div className="row-container">
    <select style={{width:"320px", height:"60px",border: "none", backgroundColor:"rgb(224, 223, 223)"}} id="cars" name="cars">
  <option value="volvo">Font</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
    <h1> <button style={{  padding : "8px", border: "none"}}>B</button> |<button style={{  padding : "8px", border: "none"}}> I </button>|<button style={{  padding : "8px", border: "none"}}> U</button></h1>
    <button  style={{width:"120px", height:"60px", border: "none", marginTop:"12px", fontSize:"23px"}} >Bullets</button>
</div>
<div className="row-container">
<button  style={{width:"520px", height:"60px", marginTop:"12px",border:"none",fontWeight:"500",marginTop:"10px", marginRight:"30px", fontSize:"23px"}} >Font Color</button>


    <button   style={{width:"520px", height:"60px", marginTop:"12px",border:"none",fontWeight:"500",marginTop:"10px", marginLeft:"30px" ,fontSize:"23px"}} >Back-Ground Color</button>
</div>
<div className="row-container">
<button  style={{width:"300px", height:"60px",marginTop:"12px",border:"none",fontWeight:"500", marginTop:"12px", fontSize:"23px"}} >Text Alignment</button>

<h3  style={{marginTop:"22px",border:"none",fontWeight:"500",  fontSize:"23px"}}>Padding</h3>
<select style={{width:"120px",marginTop:"12px", height:"60px",border: "none", backgroundColor:"rgb(224, 223, 223)"}} id="cars" name="cars">
  <option value="volvo">height</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
<select style={{width:"120px", marginTop:"12px", height:"60px",border: "none", backgroundColor:"rgb(224, 223, 223)"}} id="cars" name="cars">
  <option value="volvo">width</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
</div>
<div className="row-container">

<h3 style={{marginTop:"22px",border:"none",fontWeight:"500",  fontSize:"23px"}}>Padding</h3>
<select style={{width:"120px",marginTop:"12px", height:"60px",border: "none", backgroundColor:"rgb(224, 223, 223)"}} id="cars" name="cars">
  <option value="volvo">Word</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
<select style={{width:"120px",marginTop:"12px", height:"60px",border: "none", backgroundColor:"rgb(224, 223, 223)"}} id="cars" name="cars">
  <option value="volvo">Line</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
<select style={{width:"120px",marginTop:"12px", height:"60px",border: "none", backgroundColor:"rgb(224, 223, 223)"}} id="cars" name="cars">
  <option value="volvo">Letter</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
<select style={{width:"120px",marginTop:"12px", height:"60px",border: "none", backgroundColor:"rgb(224, 223, 223)"}} id="cars" name="cars">
  <option value="volvo">Paragraph</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
</div>
<div className="row-container">
<select style={{width:"320px",marginTop:"12px", height:"60px",border: "none", backgroundColor:"rgb(224, 223, 223)"}} id="cars" name="cars">
  <option value="volvo">Shadow</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
<h3 style={{marginTop:"22px",border:"none",fontWeight:"500",  fontSize:"23px"}}>Shadow-Style</h3>
<select style={{width:"320px",marginTop:"12px", height:"60px",border: "none", backgroundColor:"rgb(224, 223, 223)"}} id="cars" name="cars">

</select></div>
<div className="row-container">
<button  style={{width:"320px", height:"50px",border: "none", marginRight:"85px", marginLeft:"auto", marginTop:"12px", fontSize:"23px"}} >Ok</button>

</div>

    </TabPanel>
    <TabPanel>
    </TabPanel>
    <TabPanel>
    </TabPanel>
  </Tabs>
        </div>
    )
}
