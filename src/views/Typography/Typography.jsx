import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import "../TableList/Tablelist.css";
import Card from "components/Card/Card.jsx";
import { thA, tdA } from "variables/Variables.jsx";
import "../Icons/Icons.css"
import swal from '@sweetalert/with-react'
class Typography extends Component {
  constructor(props){
    super(props);
     this.state={
      icon:"fa fa-sort",
      tdA:tdA,
     
    }
    this.iconclick=this.iconclick.bind(this);
    this.compareBy.bind(this);
    this.sortBy.bind(this);
    this.displaytext.bind(this);
   this.displayedit.bind(this);
    //this.functiontext(this);
    //this.viewing=this.viewing.bind(this);
    this.displaywarn.bind(this);
  //  this.update.bind(this);
   // this.canceled.bind(this);
   }

   displayedit=()=>{
    swal(
      <div>
      <h5 style={{color:"grey",fontSize:"30px",paddingTop:"20px",paddingBottom:"10px"}}>Edit Role Details</h5>
      <h5 style={{textAlign:"left"}}>Name</h5>
      <input type="text" name="usrname" style={{width:"100%",padding:"10px"}} value="script writer" required />
  <h5 style={{textAlign:"left"}}>Description</h5>
  <input type="text" name="urname" style={{width:"100%",padding:"10px"}} value="script writer" required />
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
  
   displaywarn(){
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this role! ",
      icon: "warning",
      buttons: ["yes,delete it","cancel"],
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
          text:"The role has been deleted",
          icon: "success",
        
        });
      }
    });
//<SweetAlert title="Here's a message!" onConfirm={this.hideAlert} />
    
  }

   displaytext(value) {
    
    if (tdA && tdA.length > 1 && tdA[value] && tdA[value].length > 1){
     // console.log(tdArray[value][1])
      // this.setState({
      //   text1:tdArray[value][1],
      //   text2:tdArray[value][2]
      // }
      
     // )
      swal(
        <div>
      <h5 style={{color:"grey",fontSize:"30px",paddingTop:"20px"}}>Role Information</h5>
      <h5>
        <b>Name&nbsp;: </b>{tdA[value][1]}
      </h5>
      <h5>
        <b>Description&nbsp;: </b>{tdA[value][2]}
      </h5>
    </div>
      )
     
    }
  }
 

  iconclick(){
    if(this.state.icon==="fa fa-sort")
   {
    this.setState({
      icon:"fa fa-sort-desc",
      
     })
     
   } 
   if(this.state.icon==="fa fa-sort-desc"){
    this.setState({
      icon:"fa fa-sort-asc",
     
     })
    
   }
   if(this.state.icon==="fa fa-sort-asc"){
    this.setState({
      icon:"fa fa-sort-desc"
     })
   }
  this.sortBy("2");
  }
  compareBy(key) {
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
  sortBy=(key)=> {
    console.log("sortBy",key)
    let arrayco = tdA;
  if(this.state.icon==="fa fa-sort-desc"){
    console.log("this.state.icon",this.state.icon)
   arrayco.reverse( arrayco.sort(this.compareBy(key)));
    this.setState({tdA: arrayco});
  }
  if(this.state.icon==="fa fa-sort-asc"){
    arrayco.sort(this.compareBy(key));
    this.setState({tdA: arrayco});
  }
  }
  
  
 



  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
              title="Roles"
              category="Settings"
               ctTableFullWidth
               ctTableResponsive
                content={
                  <div>
                  <button className="rose"  title="Add Role" style={{ outline:"none", float: "right",paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px",paddingBottom:"10px", border: "2px solid  #777777", borderRadius: "20px", marginRight: "20px" }}  ><i className="fa fa-user-plus fa-1x "> </i></button>
                  <br></br>
              <br></br>
              <button className="rose"  title="Toggle" style={{outline:"none", float: "left", paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px",paddingBottom:"10px", border: "2px solid  #777777", borderRadius: "20px", marginLeft: "20px"}}  ><i className="fa fa-th-list fa-1x"> </i></button>
                    
                    <div className="dropdown" style={{display:"inline"}}>
                    &nbsp;&nbsp;&nbsp;
    <button title="columns"  className="btn dropdown-toggle rose" type="button" data-toggle="dropdown" style={{borderRadius:"30px",padding:"10px",borderColor:"rgb(119, 119, 119)"}}><i class="fa fa-columns" aria-hidden="true"></i>
    <i className="fa fa-sort-desc" aria-hidden="true"></i></button>
    <ul className="dropdown-menu" style={{right:"600px",left:"0px",width:"50px",top:"28px"}}>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;ROLE</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked />&nbsp;FUNCTION</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;ACTION</a></li>
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
                          {thA.map((prop, key) => {
                            // console.log(key);
                            
                           
                            if (key === 0){
                                       return <th key={key} className="text-center"><input type="checkbox" ></input></th>
                            }
                              else if(key===2)
                              return  <th key={key} className="text-center">{prop}
                              <button className="ssss" onClick={this.iconclick}>
                               
                              <i className={this.state.icon}></i>
                               </button>
                            
                             </th>;
                           
                              else if(key===3)
                              return <th key={key} className="text-right">{prop}</th>;
                              else
                              return  <th key={key} className="text-center">{prop}</th>;
                          })}
                        </tr>
                      
                      </thead>
                      
                      <tbody>
                              
                        {this.state.tdA.map((prop, key) => {
                           var smart=key;
                        
                          return (
                           
                            <tr key={key}>
                            
                              {prop.map((prop, key) => {
                                // console.log("prop",prop)
                                if (key === 0){
                            //  var item   
                            // {this.state.on.map(item=>{
                            //   console.log("00000",item)
                            // })}
                             return (<td key={key} className="text-center"><input type="checkbox"   ></input></td>)
                                  
                                }
                                   else if (key === 3) {
                                  
                                  return <td key={key} className="text-right td-actions">
                                  <button className="ssss" style={{ padding: "0px", borderWidth: "0px" }} type="button" key={key} onClick={() => { this.displaytext(smart) }} className="btn" data-toggle="modal" data-target="#exampleModalCenter">
                                      <a rel="tooltip" title="View" className="btn btn-link btn-info table-action view" ><i className="fa fa-image"></i></a>
                                    </button>


                         <button className="ssss" style={{ padding: "0px", borderWidth: "0px" }} type="button" key={key} onClick={ this.displayedit } className="btn" data-toggle="modal" data-target="#exampleModalCenter">
                                    <a rel="tooltip" title="Edit" className="btn btn-link btn-warning table-action edit" ><i class="fa fa-edit"></i></a>
                                    </button>

                                  
                                    <button className="ssss" style={{ padding: "0px", borderWidth: "0px" }} type="button" key={key} onClick={ this.displaywarn } className="btn" data-toggle="modal" data-target="#exampleModalCenter">
                                    <a rel="tooltip" title="Remove" className="btn btn-link btn-danger table-action remove" ><i className="fa fa-trash-o"></i></a>
                                   
                                    </button>
                                  </td>

                                }

                                else{
                                  // console.log("prop i am content",prop)
                                  return <td key={key} className="text-center">{prop}</td>;
                                }
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
  
              </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Typography;
