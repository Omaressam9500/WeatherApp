
import {  useQuery } from "react-query";

import { axiosAPI } from "../constants/Config";
import { Constants } from "../constants/constants";



export const searchCountryHook = (country: string, onSuccess?: (data: any) => void) => {
    return useQuery(["searchCountry", country],
        () => axiosAPI.get(`search.json?q=${country}&key=${Constants.API_KEY}`,),

        {
            enabled: country.trim() !== '',
            onSuccess: (data) => {
                onSuccess && onSuccess(data);
            },
            onError: (error) => {
            }
        }
    );
};