import React from "react";

function RegForm(props) {


  return (
    <form className="form">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Phone" />
     
      <button type="submit"> Login</button>
    </form>
  );
}

export default RegForm;
