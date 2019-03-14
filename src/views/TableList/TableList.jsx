import React, { Component } from "react";
import { Grid, Row, Col, Table, Button, Modal } from "react-bootstrap";
import "./Tablelist.css";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import "../Icons/Icons.css";
import SweetAlert from "react-bootstrap-sweetalert"
import '../Icons/Icons.css';
import swal from '@sweetalert/with-react'
class TableList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      icon: "fa fa-sort",
      tdArray: tdArray,
      modalShow: false,
      alert: null
    //  text1:"",
    //  text2:""
    }
    this.iconclick = this.iconclick.bind(this);
    this.compareBy.bind(this);
    this.sortBy.bind(this);
    this.displaytext.bind(this);
    this.displayedit.bind(this);
    //this.functiontext(this);
    //this.viewing=this.viewing.bind(this);
    this.displaywarn.bind(this);
    this.update.bind(this);
    this.canceled.bind(this);
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
  update(){
    swal( {
             title:"Updated",
            text:"The function is updated",
            icon: "success",
          
           });
  }

  canceled(){
    swal({
      text:"The updation failed",
      button:true
    })
  }
displayedit=()=>{
  swal(
    <div>
    <h5 style={{color:"grey",fontSize:"30px",paddingTop:"20px",textAlign:"left",paddingBottom:"10px"}}>Add Function</h5>
    <h5 style={{textAlign:"left"}}>Role&nbsp;<span style={{color:"red"}}>*</span></h5>
    <select required  style={{width:"100%",padding:"10px"}} >
    <option  value="" disabled selected>Select Role</option>
  <option value="Conversation writer">Conversation writer</option>
  <option value="Script writer">Script writer</option>
 
</select>
<h5 style={{textAlign:"left"}}>Function&nbsp;<span style={{color:"red"}}>*</span></h5>
<select required  style={{width:"100%",padding:"10px"}} >
    <option  value="" disabled selected>Select Function</option>
  <option value="Users">Users</option>
  <option value="Functions">Functions</option>
  <option value="Roles ">Roles</option>
  <option value="Conversation">Conversation</option>
  <option value="NLUEmulator">NLUEmulator</option>
  <option value="Chatter">Chatter</option>
  <option value="Quiz">Quiz</option>
  <option value="Chatter Admin">Chatter Admin</option>
 
</select>
{/* <button class="swal-button swal-button--confirm">cancel</button>  */}
<button  className="outer" className="btn " style={{float:"left",color:"white",backgroundColor:"#7cd1f9",marginTop:"30px",outline:"none",border:"none",marginBottom:"20px",width:"120px" }}  onClick={this.update}>save</button>
 <button  className="inner" className="btn btn-danger" style={{float:"right",color:"white",backgroundColor:"#fa1825",marginTop:"30px",marginBottom:"20px",width:"120px"}} onClick={this.canceled}>cancel</button>
   
  </div>,{
    buttons:false,
   // dangerMode: true,
  })
  //  .then((willDelete) => {
  //   console.log("willDelete",willDelete)
  //   if (willDelete) {
     
  //   } 
  //   else {
  //     swal( {
  //       title:"Updated",
  //       text:"The function is updated",
  //       icon: "success",
      
  //     });
  //   }
  // });
}

  oncheck(event) {
    console.log("hello")
    const checkboxes = this.form;
    console.log(this.form);
    console.log("checkboxes", checkboxes);
    console.log(checkboxes.name)
    if (checkboxes.name === "pet") {
      event.target.checked
    }
    if (this.state.on === "") {
      this.setState({
        on: "checked",
        on1: "checked"
      })
    }
    if (this.state.on === "checked") {
      this.setState({
        on: "",
        on1: ""
      })
    }

  }
  iconclick() {
    if (this.state.icon === "fa fa-sort") {
      this.setState({
        icon: "fa fa-sort-desc",

      })

    }
    if (this.state.icon === "fa fa-sort-desc") {
      this.setState({
        icon: "fa fa-sort-asc",

      })

    }
    if (this.state.icon === "fa fa-sort-asc") {
      this.setState({
        icon: "fa fa-sort-desc"
      })
    }
    this.sortBy("2");
  }
  compareBy(key) {
    return function (a, b) {
      console.log("a   ", a[key], b[key])
      if (a[key] < b[key]) {

        console.log("b");
        return -1;
      }
      if (a[key] > b[key]) {
        console.log("a");
        return 1;
      }
      return 0;
    };
  }

  sortBy = (key) => {
    console.log("sortBy", key)
    let arrayCopy = tdArray;
    if (this.state.icon === "fa fa-sort-desc") {
      console.log("this.state.icon", this.state.icon)
      arrayCopy.reverse(arrayCopy.sort(this.compareBy(key)));
      this.setState({ tdArray: arrayCopy });
    }
    if (this.state.icon === "fa fa-sort-asc") {
      arrayCopy.sort(this.compareBy(key));
      this.setState({ tdArray: arrayCopy });
    }
  }
  displaytext(value) {
    console.log(value)
    console.log(tdArray)
    console.log(tdArray[value])
    if (tdArray && tdArray.length > 1 && tdArray[value] && tdArray[value].length > 1){
      console.log(tdArray[value][1])
      // this.setState({
      //   text1:tdArray[value][1],
      //   text2:tdArray[value][2]
      // }
      
     // )
      swal(
        <div>
      <h5 style={{color:"grey",fontSize:"30px",paddingTop:"20px"}}>Role Information</h5>
      <h5>
        <b>Name&nbsp;: </b>{tdArray[value][1]}
      </h5>
      <h5>
        <b>Description&nbsp;: </b>{tdArray[value][2]}
      </h5>
    </div>
      )
     
    }
   //this.functiontext();
    // let k=1;
    // console.log(tdArray[value][2])
  }
  // functiontext(){
  //   swal(
  //     <div>
  //   <h5 style={{color:"grey",fontSize:"30px",paddingTop:"20px"}}>Hello world!</h5>
  //   <h5>
  //     <b>Name:</b>{this.state.text1}
  //   </h5>
  //   <h5>
  //     <b>Role:</b>{this.state.text2}
  //   </h5>
  // </div>
  //   )
  // }

  render() {
    //let modalClose = () => this.setState({ modalShow: false });

    return (

      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Functions"
                category="Settings"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div>
                    <button className="rose" title="Add Function Access" style={{ outline: "none", float: "right", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px", paddingBottom: "10px", border: "2px solid  #777777", borderRadius: "20px", marginRight: "20px" }}  ><i className="fa fa-user-plus fa-1x "> </i></button>
                    <br></br>
                    <br></br>

                    <button className="rose" title="Toggle" style={{ float: "left", outline: "none", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px", paddingBottom: "10px", border: "2px solid  #777777", borderRadius: "20px", marginLeft: "20px" }} ><i className="fa fa-th-list fa-1x"> </i></button>

                    <div className="dropdown" style={{ display: "inline" }}>
                      &nbsp;&nbsp;&nbsp;
    <button title="columns" className="btn dropdown-toggle rose " type="button" data-toggle="dropdown" style={{ borderRadius: "30px", padding: "10px" }}><i class="fa fa-columns" aria-hidden="true"></i>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i></button>
                      <ul className="dropdown-menu" style={{ right: "600px", left: "0px", width: "50px", top: "28px" }}>
                        <li style={{ borderBottom: "1px solid #eee" }}><a href="#"><input type="checkbox" checked />&nbsp;ROLE</a></li>
                        <li style={{ borderBottom: "1px solid #eee" }}><a href="#"><input type="checkbox" checked />&nbsp;FUNCTION</a></li>
                        <li style={{ borderBottom: "1px solid #eee" }}><a href="#"><input type="checkbox" checked />&nbsp;ACTION</a></li>
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
                          {thArray.map((prop, key) => {

                            if (key === 0)
                              return <th key={key} className="text-center"><input type="checkbox" /></th>
                            else if (key === 3)
                              return <th key={key} className="text-right">{prop}</th>;
                            else if (key === 2)
                              return <th key={key} className="text-center">{prop}
                                <button className="ssss" onClick={this.iconclick}>
                                  <i className={this.state.icon}></i>

                                </button>
                              </th>;
                            else
                              return <th key={key} className="text-center">{prop}</th>;
                          })}
                        </tr>

                      </thead>

                      <tbody>
                        {this.state.tdArray.map((prop, key) => {
                          var smart = key;
                          return (
                            <tr key={key}>
                              {prop.map((prop, key) => {
                                if (key === 0)
                                  return <td key={key} className="text-center"><input type="checkbox" name="pet"  /></td>;
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

                                else if (key == 1)
                                  return <td key={key} className="text-center">{prop}</td>;
                                else
                                  return <td key={key} className="text-center">{prop}

                                  </td>;
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                    <button style={{ marginLeft: "20px", outline: "none", borderRadius: "19px", padding: "7px", paddingLeft: "13px", border: "2px solid  #777777", backgroundColor: "white" }}><span>6<i className="fa fa-sort-asc" aria-hidden="true"></i></span>
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

export default TableList;
