import React from "react";
import { useNavigate } from "react-router-dom";
export default function Products() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("add_product")}>新增</button>
      <button onClick={() => navigate("detail")}>新增</button>
    </div>
  );
}
