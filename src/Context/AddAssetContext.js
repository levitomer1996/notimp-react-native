import React, { useReducer } from "react";

const AddAssetContext = React.createContext();
const AddAssetReducer = (state, action) => {
  switch (action.type) {
    case "set_title":
      return { ...state, title: action.payload };
    case "set_description":
      return { ...state, description: action.payload };
    case "set_location":
      return { ...state, location: action.payload };
    case "set_location_name":
      return { ...state, location_name: action.payload };
    case "set_price":
      return { ...state, price: action.payload };
    case "set_is_balcony":
      return { ...state, isBalcony: action.payload };
    case "set_is_furnished":
      return { ...state, isFurnished: action.payload };
    case "set_is_pets":
      return { ...state, isPets: action.payload };
    case "set_is_air_condtioned":
      return { ...state, isAirConditioned: action.payload };
    case "set_price":
      return { ...state, price: action.payload };
    default:
      break;
  }
};

export const AddAssetProvider = ({ children }) => {
  const [addAssetState, dispatch] = useReducer(AddAssetReducer, {
    title: "",
    description: "",
    location: {
      latitude: 32.1090013,
      longitude: 34.8229818,
    },
    location_name: "",
    price: 0,
    isBalcony: false,
    isFurnished: false,
    isPets: false,
    isAirConditioned: false,
    floor: 0,
  });

  const setTitle = (data) => {
    dispatch({ type: "set_title", payload: data });
    return;
  };
  const setDescription = (data) => {
    dispatch({ type: "set_description", payload: data });
    return;
  };

  const setLocation = (data) => {
    dispatch({ type: "set_location", payload: data });
  };
  const setLocationName = (data) => {
    dispatch({ type: "set_location_name", payload: data });
  };
  const setPrice = (data) => {
    dispatch({ type: "set_price", payload: data });
  };
  const setIsBalcony = (data) => {
    dispatch({ type: "set_is_balcony", payload: data });
  };
  const setIsFurnished = (data) => {
    dispatch({ type: "set_is_furnished", payload: data });
  };
  const setIsPets = (data) => {
    dispatch({ type: "set_is_pets", payload: data });
  };
  const setIsAirCondtioned = (data) => {
    dispatch({ type: "set_is_air_condtioned", payload: data });
  };
  const setFloor = (data) => {
    dispatch({ type: "set_price", payload: data });
  };
  return (
    <AddAssetContext.Provider
      value={{
        addAssetState,
        setTitle,
        setDescription,
        setLocation,
        setLocationName,
        setPrice,
        setIsBalcony,
        setIsFurnished,
        setIsPets,
        setIsAirCondtioned,
        setFloor,
      }}
    >
      {children}
    </AddAssetContext.Provider>
  );
};
export default AddAssetContext;
