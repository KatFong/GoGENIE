import React, { Component } from 'react';
import {
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Pressable container
  View,
  Image                // Container component
} from 'react-native';

import Tabs from './tabs';

export default class searchJob extends Component {
  render() {

    var temjob = {
         require: ('./harry.jpg'),
         jtitle: ' 合約店務員',
         company: 'HeyCompany',
         date: '06月05日（星期一）',
         mohr: '月薪',
         salary: '$20,000-23,000',
         location: '九龍城區',
         apply: '接受申請',
         };

    var partjob = {
         require: ('./harry.jpg'),
         jtitle: '兼職店務員',
         company: 'AppleCompany',
         date: '06月05日（星期一）',
         mohr: '月薪',
         salary: '$20,000-23,000',
         location: '九龍城區',
         apply: '接受申請',
         };

     return (
       <View style={styles.container}>
         <Tabs>
           {/* First tab */}
           <View title="臨時工作" style={styles.content}>
           <View style={styles.cellListHeader}>

            < TouchableOpacity >

                 <View style={{flexDirection: 'row'}}>
              <Image style={styles.scaleToFit} source={require('./harry.jpg')}/>
              <Text style={{fontSize: 15, color:'#1d1047',fontWeight: 'bold'}}>{temjob.jtitle} {'\n'}
              <Text style={{fontSize: 10,fontWeight: 'normal'}}>{temjob.company}</Text></Text>
              </View>
</TouchableOpacity>
           </View>
           </View>

           {/* Second tab */}
           <View title="兼職長工" style={styles.content}>

           < TouchableOpacity >
                 <View style={{flexDirection: 'row'}}>
              <Image style={styles.scaleToFit} source={require('./harry.jpg')}/>
              <Text style={{fontSize: 15, color:'#1d1047',fontWeight: 'bold'}}>{partjob.jtitle} {'\n'}
              <Text style={{fontSize: 10,fontWeight: 'normal'}}>{partjob.company}</Text></Text>
              </View>
              </TouchableOpacity>
           </View>

         </Tabs>
       </View>
     );
   }

}

const styles = StyleSheet.create({
  // App container
  scaleToFit: {
    width: 50,
    height: 50
  },
cellListHeader:{
  backgroundColor: '#F5F5F5',
},
  container: {
    flex: 1,                            // Take up all screen
    backgroundColor: 'darkblue',         // Background color
  },
  // Tab content container
  content: {
    flex: 1,                            // Take up all available space
  //  justifyContent: 'center',           // Center vertically
//    alignItems: 'center',               // Center horizontally
    backgroundColor: 'white'        // Darker background for content area
  },
  // Content header
  header: {
    margin: 10,                         // Add margin
    color: '#FFFFFF',                   // White color
    fontFamily: 'Avenir',               // Change font family
    fontSize: 26,                       // Bigger font size
  },

});
