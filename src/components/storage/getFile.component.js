import { storage } from "../../../App";
import { ref, getDownloadURL } from "firebase/storage";
import Pdf from "react-native-pdf";
import { Text } from "react-native";
import React, { useEffect, useState } from "react";

export const GetFile = (folder, code) => {
  return(
  getDownloadURL(ref(storage, `${folder}/${code}.pdf`))
    .then((url) => {
      return url.toString();
    })
    .catch((error) => {
      console.log(error);
      return error.message
    })
  )
};

