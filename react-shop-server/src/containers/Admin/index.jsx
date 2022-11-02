import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { removeToken } from "../../config/tools";
import { userLogout } from "../../redux/actions/userAction";
function Admin() {
  const { user, isLogin } = useSelector((state) => state.saveUserInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    removeToken("token");
    dispatch(userLogout());
    navigate("/login", { replace: true });
  };
  console.log(user, isLogin);
  return (
    <>
      {isLogin === true ? (
        <div>
          Admin
          <button onClick={logOut}>退出登录</button>
          <button>获取商品列表</button>
        </div>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
}
export default connect()(Admin);
