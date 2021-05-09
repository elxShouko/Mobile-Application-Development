// Class: DIT/FT/1B/03
// Admission Number: 2026453
// Phan Kiah Fong Nicholas


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    SafeAreaView,
    FlatList,
    StatusBar,
    TouchableOpacity,
    TextInput
} from 'react-native';


const DATA = [
    {
        id: '1',
        title: 'HERALD CAFE',
        image: require('./Images/TheEmpire.jpg'),
        Text: 'Operating Hours : 7am - 12am',
        pax: 'Max pax : 56',
        availability: 'Available : 28',
    },
    {
        id: '2',
        title: 'CYBER CAFE',
        image: require('./Images/CyberCafe.jpg'),
        Text: 'Operating Hours : 8am - 11pm',
        pax: 'Max pax : 32',
        availability: 'Available : 16'
    },
    {
        id: '3',
        title: 'SIM CAFE',
        image: require('./Images/PCGaming.jpg'),
        Text: 'Operating Hours : 24/7             ',
        pax: 'Max pax : 40',
        availability: 'Available : 31'
    },
    {
        id: '4',
        title: 'SLOGAN CAFE',
        image: require('./Images/ProGaming.png'),
        Text: 'Operating Hours : 8am - 10pm',
        pax: 'Max pax : 30',
        availability: 'Available : 10'

    }

];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);




const App = () => {

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.image} />
            <Item
                title={item.title}
            />
            <Text style={{
                position: 'absolute',
                right: 20,
                marginTop: 70,
                marginLeft: 10,
                fontSize: 18,
                fontWeight: 'bold'

            }}>{item.Text}</Text>
            <Text style={{
                position: 'absolute',
                right: 20,
                fontSize: 20,
                marginTop: 108,
                marginRight: 126,
                fontWeight: 'bold'
            }}>
                {item.pax}
            </Text>
            <Text style={{
                fontWeight: 'bold',
                position: 'absolute',
                right: 20,
                fontSize: 18,
                marginTop: 110
            }}>
                {item.availability}
            </Text>

            <TouchableOpacity
                style={styles.button}
            >
                <Text style={{
                    color: 'red',
                    fontSize: 20,

                }}>Select</Text>
            </TouchableOpacity>
        </View>
    );

    return (

        <View style={{ backgroundColor: 'black', flex: 6 }}>

            <Image
                style={styles.garenaImage}
                source={require('./Images/garenaImage.jpeg')}
            />
            <Image
                style={styles.hamburgerIcon}
                source={require('./Images/menu-icon.png')}
            />
            <TextInput
                style={styles.input} 
                placeholder="Search for a cafe here!" />
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,

    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        flexDirection: 'column',
        left: "40%",
        position: "absolute",
        bottom: 120,
    },


    textColor: {
        color: 'black',

    },
    garenaImage: {
        marginLeft: 20,
        marginTop: 20
    },
    hamburgerIcon: {
        position: 'absolute',
        right: 20,
        marginTop: 40
    },

    button: {
        alignItems: "center",
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10
    },
    input: {
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 10,
        padding: 8,
        margin: 14,
        width: '93%',
        backgroundColor: 'white',
        fontSize: 20,


    }

});


export default App;
