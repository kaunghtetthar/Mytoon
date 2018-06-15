// violation lists


import React, {Component} from 'react';
import { Text, View, Image,
  Linking, Dimensions, StyleSheet,
  log, AsyncStorage, Alert,
  TouchableHighlight, Modal, ScrollView } from 'react-native';
import {Card, Button, CardSection, Spinner, manual_ticket} from './common';
import TabNavigator from 'react-native-tab-navigator';
import {Actions} from 'react-native-router-flux';
import {Router, Scene} from 'react-native-router-flux';
import PTRView from 'react-native-pull-to-refresh';
import Icon from 'react-native-vector-icons/FontAwesome';
import PopupDialog, {
  DialogTitle,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
  FadeAnimation,
} from 'react-native-popup-dialog';
import SignOut from './SignOut';

const deviceW = Dimensions.get('window').width;

const basePx = 375;

function px2dp(px) {
    return ( deviceW - px);
}





const scaleAnimation = new ScaleAnimation();

const VDetail = ( {album} ) => {


    //2017-11-13T11:00:04+07:00
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const Hour = new Date().getHours();
    const Minute = new Date().getMinutes();
    const Second = new Date().getSeconds();

    const currentDate = year + '-' + month + '-' + day
                  + 'T' + Hour + ':' + Minute + ':' +
                  Second + '+07:00';
    // const API_DATE = currentDate.slice(' ', 9);
    // const API_TIME = currentDate.slice(9);



    const { id,
        time,
        date,
        url,
        image,
        number,
        thumbnail_image } = album;

        // const delete = () => {
        //     return delete(id);
        //   };

     const API_DATE = date;
     // const API_TIME1 = timestamp.slice(11);
     const API_TIME = time;



    // const lego = violation_type.includes('RL');
    // To recogize the 'Violation_type'
    // String if RT show RT logo or SP show Speed logo
    //str.includes('To be');

    const mainurl = 'https://ats-test.pineapplevisionsystems.com';



    const state = { selectedTab: 'api' };

    // const {
    //     thumbnailStyle,
    //     headerContentStyle,
    //     thumbnailContainerStyle,
    //     headerTextStyle,
    //     imageStyle,
    //     numberPlateStyle,
    // } = styles;


    const Logo = () => {

        if (lego) {
            return require('./assets/RL_logo.png');
        } else {
            return require('./assets/SP_logo.jpg');
        }
    };



    const remove = () => {
      if (id !== -1) {
        const index = {album};
        VDetail.splice(id, 1);
}
      }
    // }

    const Slide = () => {
        return (
            <View>
                <Image style={styles.imageStyle} source={{uri: mainurl + url}} />
            </View>
        );
    }



    return (


      <View style={StyleSheet.container}>

      <Card onPress={() => Actions.pdf()}>
           <CardSection >

           <ScrollView style={styles.image} horizontal pagingEnabled={true}>

           <View style={{ width: px2dp(22), flexDirection: 'row' }} horizontal>

           <View style={styles.thumbnailContainerStyle} horizontal>

           <CardSection>
               <Image
                   style={styles.thumbnailStyle}
                   source={require('./assets/RL_logo.png')}
               />

               <Text>{API_DATE}{'\n'}{API_TIME}</Text>

               </CardSection>


               <Button onPress={() =>
                   Actions.Violation({ Violation_id: id } )

               }>
              {"Episode"} {'\n'} {'     '} {  id   }
               </Button>
           </View>

           <View style={styles.image} >

               <Card>
                   <Image style={styles.imageStyle} source={{uri: image}} />
               </Card>

               </View>

               </View>

                   <View horizontal>

                       <CardSection>
                           <Button onPress={() => Actions.manual_warning({ id : id})}>
                               {'      '}
                               <Icon name="comment" size={20} color="#666"/>
                               {'      '}
                           </Button>
                       </CardSection>

                   </View>

           </ScrollView>


           </CardSection>

       </Card>



       </View>
    );
};




const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
    headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
    },
    dialogContentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    numberPlateStyle:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 40,
        width: 30
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    imageStyle: {
        height: 100,
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    buttonStyle: {
        fontSize: 18

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    innerContainer: {
        alignItems: 'center',
    },
    slide: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        flex: 1,
    },

});


export default VDetail;
