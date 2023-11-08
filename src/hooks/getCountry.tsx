
import { useMutation, useQuery } from "react-query";
import { showMessage } from "react-native-flash-message";
import { axiosAPI } from "../constants/Config";
import { Constants } from "../constants/constants";
import { ICountry } from "./interfaces";



export const getCounrtyDetailsHook = (countryObj: ICountry, days: number, onSuccess?: (data: any) => void) => {
    console.log(countryObj)
    return useQuery(["getCountryDetails", countryObj],
        () => axiosAPI.get(`forecast.json?&q=${countryObj.lat, countryObj.lon}&days=${days}&key=${Constants.API_KEY}`,),
        {

            enabled: true,
            onSuccess: (data) => {
                onSuccess && onSuccess(data);
                
            },
            onError: (error) => {
                console.log(error?.response.data?.error)
                  showMessage({ message: error?.response?.data?.error?.message,type:'danger' })
            }
        }
    );
};