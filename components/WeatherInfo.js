import React from 'react'
import { View, Text } from 'react-native'

export default function WeatherInfo({currentWeather}) {
    const {
        main: { temp },
    } = currentWeather
    return (
        <View>
            <Text>{temp}</Text>
        </View>
    )
}

const styles = StylesSheet.create({
    weatherInfo: {
        align
    }
})
