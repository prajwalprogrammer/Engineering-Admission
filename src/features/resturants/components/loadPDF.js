import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';

export  const LoadPDF =({route})=> {

  const { restaurant,course } = route.params;
  const {dteCode}=restaurant
        //const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
        //const source = require('./test.pdf');  // ios only
        const source = {uri:`bundle-assets://cutoff.bundle/${course[1]}/${course[0]}/${dteCode}.pdf`, cache: true };
        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
        //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
        //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};
      
        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}/>
            </View>
        )
    
}
export default LoadPDF
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});