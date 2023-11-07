import React, { FC } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,

} from 'react-native';
import { Colors, Pixel } from '../constants/styleConstatnts';
import { ICountry } from '../hooks/interfaces';



interface ICountryItem {
    countryItem: ICountry,
    onCountrySelect: (country: ICountry) => void,
    isLastIndex:boolean
}
export const CountryItem: FC<ICountryItem> = ({ countryItem,
    isLastIndex,
    onCountrySelect
}) => {
    const { name, region } = countryItem
    return (
        <TouchableOpacity style={[styles.mainContainer,isLastIndex?{borderBottomWidth:0}:null]}
            onPress={() => onCountrySelect(countryItem)}>
            <Text>{name} {","} {region}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: Pixel(20),
        paddingVertical: Pixel(10),
        borderBottomColor:Colors.disabledColor,
        borderBottomWidth:Pixel(1)

    }
})