import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import Compactrestaurant from '../../../components/restaurant/compact-retaurant-info'

const Mapcallout = ({restaurant}) => {
    return (
            <Compactrestaurant restaurant={restaurant} />
    )
}

export default Mapcallout

const styles = StyleSheet.create({})
