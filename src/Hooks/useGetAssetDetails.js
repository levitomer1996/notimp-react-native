import React, { useState } from "react";
import notimp from "../api/notimp";
export default () => {
  const [asset, setAsset] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const getAssetDetails = async (id) => {
    try {
      setSpinner(true);
      const res = await notimp.get(`/asset/getasset/${id}`);
      setSpinner(false);
      setAsset(res.data);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [getAssetDetails, asset, spinner];
};
