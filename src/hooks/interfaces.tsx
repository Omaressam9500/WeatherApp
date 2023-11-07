export interface ICountry {
    country?: string
    id?: number
    lat: number
    lon: number
    name?: string
    region?: string
    url?: string
}


interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

interface Condition {
    text: string;
    icon: string;
    code: number;
}
export interface IHour {
    condition: Condition
    time_epoch: number;
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
}

interface Current {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
}
export interface IForeCastDays {
    date: string;
    date_epoch: number;
    astro: {
        sunrise: string;
        sunset: string;
        moonrise: string;
        moonset: string;
    };
    day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        avgtemp_c: number;
        avgtemp_f: number;
    };
    hour: Array<IHour>
}
export interface IWeatherData {
    current: {
        last_updated_epoch: number;
        last_updated: string;
        temp_c: number;
        temp_f: number;
        is_day: number;
        cloud: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        };
        feelslike_c: number;
        feelslike_f: number;
        gust_kph: number;
        gust_mph: number;
        humidity: number;
        precip_in: number;
        precip_mm: number;
        pressure_in: number;
        pressure_mb: number;
        uv: number;
        vis_km: number;
        vis_miles: number;
        wind_degree: number;
        wind_dir: string;
        wind_kph: number;
        wind_mph: number;

    };
    forecast: {
        forecastday:Array<IForeCastDays>;
    };
    location: Location
}



