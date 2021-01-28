import React, { useState } from "react";
import notimp from "../api/notimp";
export default () => {
  const [assets, setAssets] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const getUserAssets = async (id) => {
    try {
      setSpinner(true);
      const res = await notimp.get(`/asset/${id}`);
      setAssets(res.data);
      setSpinner(false);
    } catch (error) {}
  };
  return [assets, getUserAssets, spinner];
};
