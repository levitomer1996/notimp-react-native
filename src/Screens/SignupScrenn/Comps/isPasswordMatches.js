// cpass - Confirm password
export default (pass, cpass) => {
  if (cpass === "") {
    return true;
  } else {
    if (pass !== cpass) {
      return false;
    } else if (pass === cpass) {
      return true;
    }
  }
};
