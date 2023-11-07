import React, { FC, useRef } from 'react';
import {

    StyleSheet,
    TextInput,
    FlatList,
    View,
} from 'react-native';
import { Colors, Pixel } from '../constants/styleConstatnts';
import { ICountry } from '../hooks/interfaces';
import { CountryItem } from './CounrtyItem';


interface ISearchHeader {
    handleSearchValue: (searchValue: string) => void;
    placeholder?: string,
    countriesList: Array<ICountry>
    onCountrySelect: (countryItem: ICountry) => void
}
const SearchBar: FC<ISearchHeader> = ({ handleSearchValue, countriesList, onCountrySelect
}) => {


    const textInputRef = useRef(null);

    const handleForceBlur = () => {
        textInputRef.current.blur();
    };
    const selectContryPress = (countryItem: ICountry) => {
        onCountrySelect(countryItem)
        handleForceBlur()
    }
    const renderItem = ({ item, index }) => (
        <CountryItem countryItem={item}
            isLastIndex={index === countriesList?.length - 1}
            onCountrySelect={selectContryPress
            } />
    );
    const onSearchResultClick = (text: string) => {
        handleSearchValue(text)
    }


    return (
        <View>
            <View style={[styles.container]}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
                    {
                        <View style={styles.textInputStyle}>
                            <TextInput style={styles.textInput}
                                ref={textInputRef}
                                testID={"input"}
                                placeholder={"Search Country"}
                                placeholderTextColor={"#919C9C"}
                                returnKeyType="search"
                                onChangeText={(text) => {
                                    onSearchResultClick(text)
                                }}
                                focusable={true}
                                onFocus={() => console.log('test')}
                            />
                        </View>
                    }

                </View>

            </View>
            {
                  countriesList?.length > 0 &&textInputRef.current.isFocused()&&
                <FlatList
                    data={countriesList}
                    renderItem={renderItem}
                    scrollEnabled={false}
                    keyExtractor={(item) => item?.id}
                    contentContainerStyle={styles.listStyle}
                />
            }

        </View>
    );
};


const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imagesView: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    textInputStyle: {
        backgroundColor: Colors.sacandAppBackgroundColor,
        borderRadius: Pixel(55),
        borderColor: '#001F5F',
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: Pixel(10),
        paddingLeft: Pixel(15),
        height: Pixel(48),
        marginRight: Pixel(7.5),

        fontSize: Pixel(14),
    },
    textInput: {
        flex: 1,
        color: "#202020",
        fontSize: Pixel(14)

    },

    icnView: {
        height: Pixel(48),
        width: Pixel(48),
        borderRadius: Pixel(24),
        alignItems: 'center',
        justifyContent: 'center'
    },
    icons: {
        width: Pixel(24),
        height: Pixel(24),
        backgroundColor: '#FBFBFB',
        borderRadius: Pixel(5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    listStyle: {
        backgroundColor: Colors.sacandAppBackgroundColor,
        borderRadius: Pixel(15),
        marginTop: Pixel(10),
        borderTopColor:Colors.sacandAppBackgroundColor,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        marginHorizontal:Pixel(5),

        borderColor: Colors.disabledColor,
        borderWidth: Pixel(1)
    },
});

export default SearchBar;
