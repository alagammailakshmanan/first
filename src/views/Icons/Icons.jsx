import React, { Component } from "react";
import { Grid, Row, Col,Table } from "react-bootstrap";
import "../TableList/Tablelist.css";
import Card from "components/Card/Card";
import { thE,tdE } from "variables/Variables.jsx";
import "./Icons.css";
import swal from '@sweetalert/with-react'
class Icons extends Component {
  constructor(props){
    super(props);
    this.state={
      icon1:"fa fa-sort",
      icon2:"fa fa-sort",
      icon3:"fa fa-sort",
      tdE:tdE,
    
    }
    this.displayedit.bind(this);
    this.displaytext.bind(this);
    this.iconclick1=this.iconclick1.bind(this);
    this.iconclick2=this.iconclick2.bind(this);
    this.iconclick3=this.iconclick3.bind(this);
    this.compareBy1.bind(this);
    this.sortBy1.bind(this);
    this.compareBy2.bind(this);
    this.sortBy2.bind(this);
     this.compareBy3.bind(this);
    this.sortBy3.bind(this);
    this.displaywarn.bind(this);
  }
  displaywarn(){
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this user! ",
      icon: "warning",
      buttons: ["Yes,delete it","Cancel"],
      dangerMode: true,
     // confirmButtonText: 'Yes, delete it!'
      // button:"hello",
      // button:"bye"
     
    })
    .then((willDelete) => {
      console.log("willDelete",willDelete)
      if (willDelete) {
       
      } 
      else {
        swal( {
          title:"Deleted",
          text:"The user has been deleted",
          icon: "success",
        
        });
      }
    });
//<SweetAlert title="Here's a message!" onConfirm={this.hideAlert} />
    
  }


  displayedit=()=>{
    swal(
      <div>
      <h5 style={{color:"grey",fontSize:"30px",paddingTop:"10px",paddingBottom:"0px"}}>Edit User Details</h5>
      <h5 style={{textAlign:"left"}}>Name</h5>
      <input type="text" name="name" style={{width:"100%",padding:"0px"}}  required />
  <h5 style={{textAlign:"left"}}>Email</h5>
  <input type="text" name="email" style={{width:"100%",padding:"0px"}}  required />
  <h5 style={{textAlign:"left"}}>Designation</h5>
  <input type="text" name="designation" style={{width:"100%",padding:"0px"}}  required />

  <h5 style={{textAlign:"left"}}>Department</h5>
  <input type="text" name="department" style={{width:"100%",padding:"0px"}}  required />

  <h5 style={{textAlign:"left"}}>Mobile Number</h5>
  <input type="text" name="mobilenumber" style={{width:"100%",padding:"0px"}}  required />

  <h5 style={{textAlign:"left"}}>Type</h5>
  <input type="text" name="type" style={{width:"100%",padding:"0px"}}  required />
  <h5 style={{textAlign:"left"}}>Status</h5>
  <input type="text" name="status" style={{width:"100%",padding:"0px"}}  required />
  {/* <button class="swal-button swal-button--confirm">cancel</button>  */}
  {/* <button  className="outer" className="btn " style={{float:"left",color:"white",backgroundColor:"#7cd1f9",marginTop:"30px",outline:"none",border:"none",marginBottom:"20px",width:"120px" }}  onClick={this.update}>save</button>
   <button  className="inner" className="btn btn-danger" style={{float:"right",color:"white",backgroundColor:"#fa1825",marginTop:"30px",marginBottom:"20px",width:"120px"}} onClick={this.canceled}>cancel</button>
      */}
    </div>,{
      buttons:["OK","cancel"],
      dangerMode: true,
    })
      .then((willDelete) => {
       console.log("willDelete",willDelete)
       if (willDelete) {
       
     } 
      else {
        swal( {
           title:"Updated",
          text:"The function is updated",
          icon: "success",
        
        });
   }
     });
  }
  


  displaytext(value) {
    
    if (tdE && tdE.length > 1 && tdE[value] && tdE[value].length > 1){
      console.log(tdE[value][1])
      // this.setState({
      //   text1:tdArray[value][1],
      //   text2:tdArray[value][2]
      // }
      
     // )
      swal(
        <div>
      <h5 style={{color:"grey",fontSize:"30px",paddingTop:"20px"}}>User Information</h5>
      <h5>
        <b>Name&nbsp;: </b>{tdE[value][1]}
      </h5>
      <h5>
        <b>Email&nbsp;: </b>{tdE[value][2]}
      </h5>
      <h5>
        <b>Designation&nbsp;: </b>{tdE[value][3]}
      </h5>
      <h5>
        <b>Department&nbsp;: </b>{tdE[value][4]}
      </h5>
      <h5>
        <b>Mobile Number&nbsp;: </b>{tdE[value][5]}
      </h5>
      <h5>
        <b>Type&nbsp;: </b>{tdE[value][6]}
      </h5>
      <h5>
        <b>Status&nbsp;: </b>{tdE[value][7]}
      </h5>
    </div>
      )
     
    }
   //this.functiontext();
    // let k=1;
    // console.log(tdArray[value][2])
  }
 


  iconclick1(){
    if(this.state.icon1==="fa fa-sort")
   {
    this.setState({
      icon1:"fa fa-sort-desc",
      
     })
     
   } 
   if(this.state.icon1==="fa fa-sort-desc"){
    this.setState({
      icon1:"fa fa-sort-asc",
     
     })
    
   }
   if(this.state.icon1==="fa fa-sort-asc"){
    this.setState({
      icon1:"fa fa-sort-desc"
     })
   }
 
  }
  compareBy1(key) {
    return function (a, b) {
      console.log("a   ",a[key],b[key])
      if (a[key] < b[key]) {
        
        console.log("b");
        return -1;}
      if (a[key] > b[key]) {
        console.log("a");
        return 1;
      }
      return 0;
    };
  }
  
  sortBy1=(key)=> {
    console.log("sortBy",key)
    let arrayC = tdE;
  if(this.state.icon1==="fa fa-sort-desc"){
    console.log("this.state.icon",this.state.icon1)
   arrayC.reverse( arrayC.sort(this.compareBy1(key)));
    this.setState({tdE: arrayC});
  }
  if(this.state.icon1==="fa fa-sort-asc"){
    arrayC.sort(this.compareBy1(key));
    this.setState({tdE: arrayC});
  }
  }
  
  iconclick2(){
    if(this.state.icon2==="fa fa-sort")
   {
    this.setState({
      icon2:"fa fa-sort-desc",
      
     })
     
   } 
   if(this.state.icon2==="fa fa-sort-desc"){
    this.setState({
      icon2:"fa fa-sort-asc",
     
     })
    
   }
   if(this.state.icon2==="fa fa-sort-asc"){
    this.setState({
      icon2:"fa fa-sort-desc"
     })
   }
 
  }
  compareBy2(key) {
    return function (a, b) {
      console.log("a   ",a[key],b[key])
      if (a[key] < b[key]) {
        
        console.log("b");
        return -1;}
      if (a[key] > b[key]) {
        console.log("a");
        return 1;
      }
      return 0;
    };
  }
  
  sortBy2=(key)=> {
    console.log("sortBy",key)
    let arrayC = tdE;
  if(this.state.icon2==="fa fa-sort-desc"){
    console.log("this.state.icon",this.state.icon1)
   arrayC.reverse( arrayC.sort(this.compareBy2(key)));
    this.setState({tdE: arrayC});
  }
  if(this.state.icon2==="fa fa-sort-asc"){
    arrayC.sort(this.compareBy2(key));
    this.setState({tdE: arrayC});
  }
  }
  
  iconclick3(){
    if(this.state.icon3==="fa fa-sort")
   {
    this.setState({
      icon3:"fa fa-sort-desc",
      
     })
     
   } 
   if(this.state.icon3==="fa fa-sort-desc"){
    this.setState({
      icon3:"fa fa-sort-asc",
     
     })
    
   }
   if(this.state.icon3==="fa fa-sort-asc"){
    this.setState({
      icon3:"fa fa-sort-desc"
     })
   }
 
  }
  compareBy3(key) {
    return function (a, b) {
      console.log("a   ",a[key],b[key])
      if (a[key] < b[key]) {
        
        console.log("b");
        return -1;}
      if (a[key] > b[key]) {
        console.log("a");
        return 1;
      }
      return 0;
    };
  }
  
  sortBy3=(key)=> {
    console.log("sortBy",key)
    let arrayC = tdE;
  if(this.state.icon3==="fa fa-sort-desc"){
    console.log("this.state.icon",this.state.icon1)
   arrayC.reverse( arrayC.sort(this.compareBy3(key)));
    this.setState({tdE: arrayC});
  }
  if(this.state.icon3==="fa fa-sort-asc"){
    arrayC.sort(this.compareBy3(key));
    this.setState({tdE: arrayC});
  }
  }
  
   render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
              title="Users"
              category="Settings"
              ctTableFullWidth
              ctTableResponsive
              content={
                <div>
                  <button className="rose" title="Add User" style={{ float: "right",paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px",paddingBottom:"10px", border: "2px solid  #777777", borderRadius: "20px", marginRight: "20px",outline:"none" }}  ><i className="fa fa-user-plus fa-1x "> </i></button>
                  <br></br>
              <br></br>
              <button className="rose" title="Toggle" style={{ float: "left", paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px",paddingBottom:"10px", border: "2px solid  #777777", borderRadius: "20px", marginLeft: "20px",outline:"none"}}  ><i className="fa fa-th-list fa-1x"> </i></button>
              <div className="dropdown" style={{display:"inline"}}>
                    &nbsp;&nbsp;&nbsp;
    <button title="columns"  className="btn dropdown-toggle rose" type="button" data-toggle="dropdown" style={{borderRadius:"30px",padding:"10px"}}><i class="fa fa-columns" aria-hidden="true"></i>
    <i className="fa fa-sort-desc" aria-hidden="true"></i></button>
    <ul className="dropdown-menu" style={{right:"600px",left:"0px",width:"50px",top:"28px"}}>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;NAME</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;EMAIL</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;DESIGNATION</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;DEPARTMENT</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;MOBILE NUMBER</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;TYPE</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;STATUS</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;ACTIONS</a></li>
    
    </ul>
  </div>
            <br></br>
                    <br></br>
                    <input style={{ marginLeft: "15px", color: "black", width: "97%", boxSizing: "border-box", border: "2px solid #ccc", borderRadius: "4px", fontSize: "16px", backgroundColor: "white", padding: "10px" }} type="text" name="search" placeholder="Search"></input>
                  
                    <br></br>
                    <br></br>
                    <Table hover>
                      <thead>
                        <tr>
                          {thE.map((prop, key) => {
                            console.log(key);
                            if (key === 0)
                              return <th  key={key} className="text-center"><input type="checkbox"></input></th>
                            else if(key===8)
                              return <th  key={key} className="text-right">{prop}</th>;
                           else if(key==2)
                           return  <th key={key} className="text-center">{prop}
                          
                           <button className="ssss" onClick={this.iconclick1}>
                           <button  className="ssss" onClick={()=>this.sortBy1("2")}>
                           <i className={this.state.icon1}></i>
                           </button>
                           </button>
                          </th>;
                              
                           else if(key==3)
                           return  <th key={key} className="text-center">{prop}
                           <button className="ssss" onClick={this.iconclick2}>
                           <button  className="ssss" onClick={()=>this.sortBy2("3")}>
                           <i className={this.state.icon2}></i>
                           </button>
                           </button>
                          </th>;
                           else if(key==4)
                           return  <th key={key} className="text-center">{prop}
                           <button className="ssss" onClick={this.iconclick3}>
                           <button  className="ssss" onClick={()=>this.sortBy3("4")}>
                           <i className={this.state.icon3}></i>
                          </button> 
                           </button>
                          </th>;
                              
                           else
                           return <th key={key} className="text-center">{prop}</th>;
                                
                              
                          })}
                        </tr>
                      
                      </thead>
                      
                      <tbody>
                        {this.state.tdE.map((prop, key) => {
                          var smart=key
                          return (
                            <tr key={key}>
                              {prop.map((prop, key) => {
                                if (key === 0)
                                  return <td key={key} className="text-center"><input type="checkbox"></input></td>;
                                else if (key === 8) {
                                  console.log(prop)
                                  return <td key={key} className="text-right td-actions">
                                   <button className="ssss" style={{ padding: "0px", borderWidth: "0px" }} type="button" key={key} onClick={() => { this.displaytext(smart) }} className="btn" data-toggle="modal" data-target="#exampleModalCenter">
                                      <a rel="tooltip" title="View" className="btn btn-link btn-info table-action view" ><i className="fa fa-image"></i></a>
                                    </button>
                                 <br></br>
                                  {/* <div className="btn">
                                  <i style={{ color: "#23CCEF", opacity: "0.36", padding: "10px", marginLeft: "30px" }} className={prop[0]}></i>
                                  </div> */}
                                   {/* <a rel="tooltip" title="View" className="btn btn-link btn-info table-action view" href="javascript:void(0)"> <i style={{ color: "#FFA534", opacity: "0.36", padding: "10px", marginLeft: "30px" }} className={prop[1]}></i></a> */}
                                   <button className="ssss" style={{ padding: "0px", borderWidth: "0px" }} type="button" key={key} onClick={ this.displayedit } className="btn" data-toggle="modal" data-target="#exampleModalCenter">
                                    <a rel="tooltip" title="Edit" className="btn btn-link btn-warning table-action edit" ><i class="fa fa-edit"></i></a>
                                    </button>
<br></br>
                                   {/* <a rel="tooltip" title="View" className="btn btn-link btn-info table-action view" href="javascript:void(0)"> <i style={{ color: "#FB404B", opacity: "0.36", padding: "10px", marginLeft: "30px" }} className={prop[1]} className={prop[2]}></i></a> */}
                                   <button className="ssss" style={{ padding: "0px", borderWidth: "0px" }} type="button" key={key} onClick={ this.displaywarn } className="btn" data-toggle="modal" data-target="#exampleModalCenter">
                                    <a rel="tooltip" title="Remove" className="btn btn-link btn-danger table-action remove" ><i className="fa fa-trash-o"></i></a>
                                   
                                    </button>
                              
                                  </td>

                                }

                                else
                                  return <td key={key} className="text-center">{prop}</td>;
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                    <button  style={{marginLeft:"20px",outline:"none",borderRadius:"19px",padding:"7px",paddingLeft:"13px",border:"2px solid  #777777" ,backgroundColor:"white"}}><span>8<i className="fa fa-sort-asc" aria-hidden="true"></i></span>
            </button>&nbsp;&nbsp;&nbsp;rows visible
            <br></br>
            <div className="pagination">
            <a href="#">&laquo;</a>
            <a href="#">&lsaquo;</a>
            <a href="#" className="active">1</a>
            <a href="#" >2</a>
            <a href="#">&rsaquo;</a>
            <a href="#">&raquo;</a>
            </div>
           

  
                  
</div>}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Icons;
