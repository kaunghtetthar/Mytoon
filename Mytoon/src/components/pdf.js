import React from 'react';
import { StyleSheet, Dimensions, View, WebView, Image, ScrollView } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import MyWebView from 'react-native-webview-autoheight';
import AutoResizeHeightWebView from 'react-native-autoreheight-webview';

import PropTypes from 'prop-types'; // ES6

const customStyle = "<style>* {max-width: 100%;} body {font-family: sans-serif;} h1 {color: red;}</style>";
const htmlContent = "<h1>This is title</h1><p>Throw your entire HTML here</p>";



export default class pdf extends React.Component {

  constructor(state) {
       super(state);
       this.state = {
      uri: 'http://192.168.1.19/test/Books/sample.jpeg'}
   }

   componentWillMount() {
       Image.getSize(this.state.uri, (width, height) => {
           if (this.state.width && !this.state.height) {
               this.setState({width: this.state.width, height: height * (this.state.width / width)});
           } else if (!this.state.width && this.state.height) {
               this.setState({width: width * (this.state.height / height), height: this.state.height});
           } else {
               this.setState({width: width, height: height});
           }
       });
   }
    render() {

        return (

          <ScrollView style={StyleSheet.container}>

              <Image source={{uri : this.state.uri}}
              style={{height: this.state.height, width: this.state.width / 1.9 }}
              resizeMode="stretch"
              />

            </ScrollView >

        )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});


            //   <WebView
            //   source={{uri: 'http://localhost/test/Books/Kaung/Internship_Report-3.pdf'}}
            //   style={{
            // width: '100%',
            // height: 500
            //   }}
            //   scrollEnabled={false}
            //   />

            // <AutoResizeHeightWebView
            //   defaultHeight={400}
            //   style={{backgroundColor:'white'}}
            //   AnimationDuration={500}
            //   source={{uri: 'http://192.168.1.19/test/Books/Kaung/Internship_Report-3.pdf'}}/>
