import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, FlatList, Image, Text, ActivityIndicator } from 'react-native'
import { useQueryClient } from "react-query";
import { commonMainStyles } from "../components/commonMainStyle";
import { CountryItem } from "../components/CounrtyItem";
import { ImageComponent } from "../components/ImageComponent";
import SearchBar from "../components/SearchBar";
import { SERVER } from "../constants/Config";
import { checkDays, getNext5Hours } from "../constants/helpers";
import { Colors, Pixel } from "../constants/styleConstatnts";
import { getCounrtyDetailsHook } from "../hooks/getCountry";
import { ICountry, IWeatherData, } from "../hooks/interfaces";
import { searchCountryHook } from "../hooks/searchCountries";
import Geolocation from 'react-native-geolocation-service';
import { WeatherCountryItem } from "../components/WeatherCountryItem";


export const SeacrhCountries = () => {

    const [country, setCountry] = useState('')
    const [selectedCountry, setSelectedCountry] = useState<ICountry>({})
    const [countryDetails, setCountryDetails] = useState<IWeatherData>({})

    const { data: countriesList, isFetching: isSearchCountryFeatching } = searchCountryHook(country, (data) => {
    })

    useEffect(() => {
        Geolocation.requestAuthorization("whenInUse");

        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords.longitude)
                setSelectedCountry({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                })
            },
            (error) => console.log('Error getting location:', error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );


    }, []);
    const { data: selectedCountryData, isFetching: isGetCountryFetching, isError: isGetCountryError } = getCounrtyDetailsHook(selectedCountry, checkDays(), (data) => {
        setCountryDetails(data?.data)

    })

    const onCountrySelect = (countryItem: ICountry) => {
        setSelectedCountry(countryItem)

    }
    return (<View style={style.mainView}>
        <SearchBar
            handleSearchValue={(search) => {
                console.log(search)
                setCountry(search)

            }}
            countriesList={countriesList?.data}
            onCountrySelect={onCountrySelect}
        />

        {isSearchCountryFeatching || isGetCountryFetching ?
            <ActivityIndicator style={style.loadingStyle} />
            : !isGetCountryError && Object.keys(countryDetails).length !== 0 ? (
                <View style={style.dataView}>
                    <Text style={style.titleTxt}>{"Location"}</Text>
                    <Text style={style.descTxt}>{countryDetails?.location?.name} {countryDetails?.location?.region}</Text>

                    <Text style={style.titleTxt}>{"Current Weather"}</Text>

                    <View style={commonMainStyles.rowBox}>
                        <ImageComponent
                            url={`https:${countryDetails?.current?.condition?.icon}`} />
                        <Text> {countryDetails?.current?.condition?.text}</Text>

                    </View>
                    

                    <Text style={style.titleTxt}>{"Weather After 5 hours"}</Text>
                    {
                        getNext5Hours(countryDetails?.forecast.forecastday).map((item) => {
                            return (
     
                                <WeatherCountryItem
                                conditionItem={item}/>
                            )
                        })
                    }

                </View>

            ) : <View style={style.noDataView}>
                <Text>{"No Data returned"}</Text>
            </View>

        }




    </View>)
}

const style = StyleSheet.create({
    mainView: {
        paddingHorizontal: Pixel(16),

    },
    dataView: {
        backgroundColor: Colors.sacandAppBackgroundColor,
        borderRadius: Pixel(15),
        marginTop: Pixel(15),
        borderColor: Colors.disabledColor,
        borderWidth: Pixel(1),
        paddingHorizontal: Pixel(20),
        paddingVertical: Pixel(10)
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#341671",
        maxHeight: Pixel(50),
        alignItems: 'center',
        height: Pixel(40),
        // marginHorizontal: Pixel(16),
        borderRadius: Pixel(25),
        marginTop: Pixel(10),
        marginBottom: Pixel(10),
        paddingHorizontal: Pixel(18)
    },
    listStyle: {
        backgroundColor: Colors.sacandAppBackgroundColor,
        borderRadius: Pixel(15),
        marginTop: Pixel(15),
        borderColor: Colors.disabledColor,
        borderWidth: Pixel(1)
    },
    loadingStyle: {
        marginTop: Pixel(20)
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: Pixel(12),
        fontSize: Pixel(14),
        color: Colors.white,
        flex: 1,
    },
    titleTxt: {
        color: Colors.black,
        fontWeight: "bold",
        fontSize: Pixel(18),
        marginTop: Pixel(8)
    },
    descTxt: {
        color: Colors.black,
        fontWeight: "normal",
        fontSize: Pixel(16),
        marginTop: Pixel(8)
    },
    noDataView: {
        alignItems: 'center',
        marginTop: Pixel(50)
    },
    conditionTxt: {
        marginLeft: Pixel(10)
    }


})