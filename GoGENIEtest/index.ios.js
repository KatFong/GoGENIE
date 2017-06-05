'use strict';

 var React = require('react');
 var ReactNative = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View,

} = ReactNative;

import SearchJob from './searchJob';

class GoGENIEtest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTabItem: 'contacts'

        };
    }

    render() {
        return (
            //<View style={styles.container}>
                // <View style={styles.tabContainer}>
                //     <Text style={styles.tabText}>
                //         TabBarIOS学习
                //     </Text>
                // </View>

                <TabBarIOS
                  unselectedTintColor="grey"
                  tintColor="cyan"
                  unselectedItemTintColor="grey"
                  barTintColor="darkblue">


                    <TabBarIOS.Item
                        title='搜尋工作'
                        icon={require('./Search.png')}
                        selected={this.state.selectedTabItem == 'contacts'}
                        onPress={()=> {
                            this.setState({
                                selectedTabItem: 'contacts'
                            });
                        }}
                    >
                    <SearchJob>
                        {this._renderContent('red', ' 搜尋工作')}
                        </SearchJob>

                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        title='我的工作'
                        icon={require('./Work.png')}
                        badge='3'
                        selected={this.state.selectedTabItem == 'favorites'}
                        onPress={()=> {
                            this.setState({
                                selectedTabItem: 'favorites'
                            });
                        }}
                    >

                        {this._renderContent('green', '我的工作')}


                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title='即時對話'
                        icon={require('./Charts.png')}
                        selected={this.state.selectedTabItem == 'search'}
                        onPress={()=> {
                            this.setState({
                                selectedTabItem: 'search'
                            });
                        }}
                    >

                        {this._renderContent('blue', '即時對話')}


                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title='用戶資料'
                        icon={require('./Profile.png')}
                        selected={this.state.selectedTabItem == 'more'}
                        onPress={()=> {
                            this.setState({
                                selectedTabItem: 'more'
                            });
                        }}
                    >
                        {this._renderContent('purple', '用戶資料')}


                    </TabBarIOS.Item>
                </TabBarIOS>
        //    </View>
        );
    }

    _renderContent(color:string, text:string) {

        return (
          <View style={{flex: 1}}>
                <View style={styles.container}>
                  <View style={styles.tabContainer}>
                  <Text style={styles.tabText}>{text}</Text>
                  </View>
                </View>
                  <View style={[styles.textStyle, {backgroundColor: color}]}>
                  <Text style={styles.tabText}>{text}</Text>
                  </View>
            </View>


        );
    }

}

const styles = StyleSheet.create({

    tabContainer: {
        height: 70,
        backgroundColor: '#4876FF',
        alignItems: 'center'
    },

    tabText: {
        fontSize: 20,
        marginTop: 30,
        color: 'white'
    },
    textStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
});

AppRegistry.registerComponent('GoGENIEtest', () => GoGENIEtest);
