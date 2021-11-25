import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { ActivityIndicator, Colors,ProgressBar } from "react-native-paper";
import Pdf from "react-native-pdf";
import { GetFile } from "../../../components/storage/getFile.component";
export const LoadPDF = ({ route }) => {
  const { code, folder } = route.params;

  //    const source={url:'https://firebasestorage.googleapis.com/v0/b/mealstogo-10013.appspot.com/o/dsccutoff1%2F1101_4.pdf?alt=media&token=ce81ff4d-b867-47f1-8cdb-17ec63e540d3' , cache: true}

  //   const {dteCode}=restaurant
  const [source, setsource] = useState(null);
  useEffect(async() => {
   await GetFile(folder,code).then((url) =>  
   setsource({
    uri: url,
    cache: true,
  }));
   
    // setsource({ uri: file, cache: true });
  }, []);
  useEffect(() => {
    console.log(source);
  }, [source]);

  //const source = require('./test.pdf');  // ios only
  // const source = {uri:`bundle-assets://cutoff.bundle/${course[1]}/${course[0]}/${code}.pdf`, cache: true };
  //const source = {uri:'file:///sdcard/test.pdf'};
  //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
  //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
  //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

  return (
    <View style={styles.container}>
      {source ? (
        <Pdf
          source={source}
          onError={(error) => {
            console.log("fgf", error);
          }}
          onLoadProgress={(progress) => <ProgressBar progress={progress} color={Colors.red800} />}
          style={styles.pdf}
        />
      ):(<ActivityIndicator size={50} animating={true} color={Colors.blue300} />)}
    </View>
  );
};
export default LoadPDF;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
