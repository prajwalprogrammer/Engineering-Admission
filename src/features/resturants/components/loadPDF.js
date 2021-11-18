import * as React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import WebView from "react-native-webview";
import PDFReader from 'rn-pdf-reader-js';


export default class LoadPDF extends React.Component {
  render() {
    return (
      <WebView
        source={{
          uri: "https://drive.google.com/file/d/1O5__YqRMtZihn1yYrhyJNchCjtzu78V4/view?usp=sharing",
        }}
        onLoad={()=><ActivityIndicator animating={true} size={30} />}
      />
    );
  }
}
