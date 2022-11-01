import React from "react";
import { connect, useSelector } from "react-redux";

function Admin() {
  const user = useSelector((state) => state.saveUserInfo);

  console.log(user);
  return <div>Admin</div>;
}
export default connect()(Admin);
