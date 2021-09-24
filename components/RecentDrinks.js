import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const data = [{
    title: 'Anise Aroma', url: 'https://i1.wp.com/kinywaji.com/wp-content/uploads/2021/03/chianti.jpg?ssl=1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1

},
{
    title: 'Chrome Gin', url: 'https://i1.wp.com/kinywaji.com/wp-content/uploads/2019/05/bellingham-grand_cru_premier-white.jpg?ssl=1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 2
},
{
    title: 'Tusker Laga', url: 'https://i0.wp.com/kinywaji.com/wp-content/uploads/2019/05/tusker_lager.png?ssl=1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3
}]

const RecentDrinks = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.containertext}>
                    Your Favourite drinks
                </Text>
            </View>
            <View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity style = {tw`bg-gray-100 `}>
                            <View style={styles.items}>
                                <Image source={{uri:item.url}} style={{width:100, height:100, resizeMode:'contain'}} />
                                <Text style={styles.text}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                />
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        margin: 5,
        padding: 10,

    },
    containertext: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    },
    items:{
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:16,
        fontWeight:'400',
        color: 'gray'
    }
})

export default RecentDrinks