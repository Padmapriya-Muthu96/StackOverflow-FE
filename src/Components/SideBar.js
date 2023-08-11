import React from "react";
import { Link } from "react-router-dom";



const SideBar = () => {
  return (
    <div className="sidebar">
       
          
             <Link to='/stack/questions'>
        <div className="qus-div">
  <a href="#questions"><i class="fa-solid fa-circle-question"></i> Questions</a>
  </div>
  </Link>
    <Link to='/stack/tags'>
  <div className="tag-div">
  <a href="#tags"><i class="fa-solid fa-tag"></i> Tags</a>
  </div>
  </Link>
    <Link to='/stack/users'>
  <div className="user-div">
  <a href="#users"><i class="fa-solid fa-users"></i> Users</a>
  </div>
  </Link>
    <Link to='/stack/companies'>
  <div className="comp-div">
  <a href="#companies"><i class="fa-solid fa-building"></i> Companies</a>
  </div>
  </Link>
  
  
</div>
  );
}

export default SideBar;