

import React, { FC } from 'react';
import {
    View,
    StyleSheet,
    Text,

} from 'react-native';
import { Colors, Pixel } from '../constants/styleConstatnts';
import { ICountry, IHour } from '../hooks/interfaces';
import { commonMainStyles } from './commonMainStyle';
import { ImageComponent } from './ImageComponent';



interface IWeatherCountryItem {
    conditionItem: IHour,

}
export const WeatherCountryItem: FC<IWeatherCountryItem> = ({ conditionItem,
  
}) => {
    const {condition,temp_f } = conditionItem
    return (

        <View style={commonMainStyles.rowBox}>
            <ImageComponent
                url={`https:${condition?.icon}`} />
            <Text style={style.conditionTxt}> {condition?.text}  {temp_f} {"°F"}</Text>

        </View>
    )
}

const style = StyleSheet.create({

    conditionTxt: {
        marginLeft: Pixel(10)
    }
})