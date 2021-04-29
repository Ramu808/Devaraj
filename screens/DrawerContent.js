import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { color } from 'react-native-reanimated';

export function DrawerContent(props) {

    const [isDarkTheme, setDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{ flex: 1 ,backgroundColor:'white'}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15,backgroundColor:'white' }}>

                        <Icon style={{marginLeft:212}} onPress={() => { props.navigation.navigate('Home') }}
                                    name="times"
                                    color={color}
                                    size={24} />

                        </View>

                    </View>
                    
                        <DrawerItem
                            icon={(color, size) => (
                                <Icon
                                    name="tachometer-alt"
                                    color={color}
                                    size={24} />
                            )}
                            label="Dashboard"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={(color, size) => (
                                <Icon
                                    name="shopping-cart"
                                    color={color}
                                    size={24} />
                            )}
                            label="Shop"

                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
 <DrawerItem
                            icon={(color, size) => (
                                <Icon
                                    name="user"
                                    color={color}
                                    size={24} />
                            )}
                            label="My account"

                            onPress={() => { props.navigation.navigate('Profile') }}
                        />

                        <DrawerItem
                            icon={(color, size) => (
                                <Icon
                                    name="box"
                                    color={color}
                                    size={24} />
                            )}
                            label="My order"
                            onPress={() => { props.navigation.navigate('BookmarkScreen') }}
                        />

                        <DrawerItem
                            icon={(color, size) => (
                                <Icon
                                    name="cart-plus"
                                    color={color}
                                    size={24} />
                            )}
                            label="My cart"
                            onPress={() => { props.navigation.navigate('SettingsScreen') }}
                        />

                        <DrawerItem
                            icon={(color, size) => (
                                <Icon
                                    name="heart"
                                    color={color}
                                    size={24} />
                            )}
                            label="Wishlist"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />
                         <DrawerItem
                            icon={(color, size) => (
                                <Icon
                                    name="buffer"
                                    color={color}
                                    size={24} />
                            )}
                            label="Voucher"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />
                         <DrawerItem
                            icon={(color, size) => (
                                <Icon
                                    name="sign-out-alt"
                                    color={color}
                                    size={24} />
                            )}
                            label="Logout"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />
                    

               
                </View>

            </DrawerContentScrollView>
           
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,backgroundColor:'white'
    },
    userInfoSection: {
        paddingLeft: 20,backgroundColor:'white'
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',backgroundColor:'yellow'
    },
    caption: {
        fontSize: 19,
        lineHeight: 14,backgroundColor:'yellow'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',backgroundColor:'yellow',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,backgroundColor:'yellow',
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,backgroundColor:'yellow'
    },
    drawerSection: {
        marginTop: 15,backgroundColor:'yellow'
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,backgroundColor:'yellow'
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,backgroundColor:'yellow'
    },
});