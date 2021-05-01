// import axios from "axios";

// const apiKey = "dkwOxqz9SlENvLWhuRuYrEAzAIi3ayAI";
// const baseUrl = "http://dataservice.accuweather.com";

export const getLocation = async ({ latitude, longitude }) => {
  try {
    // const { data } = await axios.get(
    //   `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude},${longitude}&toplevel=true`
    // );
    // return data;
    return location;
  } catch (e) {
    console.error(e);
  }
};

export const getCurrentConditions = async (locationKey) => {
  try {
    // const { data } = await axios.get(
    //   `${baseUrl}/currentconditions/v1/${locationKey}?apikey=${apiKey}`
    // );
    // return data[0];
    return currentConditions[0];
  } catch (e) {
    console.error(e);
  }
};

export const getFiveDayForecast = async ({ locationKey, isMetric }) => {
  try {
    // const { data } = await axios.get(
    //   `${baseUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${isMetric}`
    // );
    // return data.DailyForecasts;
    return fiveDayForecast.DailyForecasts;
  } catch (e) {
    console.error(e);
  }
};

export const getSearchResults = async (query) => {
  try {
    // const { data } = await axios.get(
    //   `${baseUrl}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`
    // );
    // return data;
    return searchResults;
  } catch (e) {
    console.error(e);
  }
};

const location = {
  Version: 1,
  Key: "215854",
  Type: "City",
  Rank: 31,
  LocalizedName: "Tel Aviv",
  EnglishName: "Tel Aviv",
  PrimaryPostalCode: "",
  Region: {
    ID: "MEA",
    LocalizedName: "Middle East",
    EnglishName: "Middle East",
  },
  Country: {
    ID: "IL",
    LocalizedName: "Israel",
    EnglishName: "Israel",
  },
  AdministrativeArea: {
    ID: "TA",
    LocalizedName: "Tel Aviv",
    EnglishName: "Tel Aviv",
    Level: 1,
    LocalizedType: "District",
    EnglishType: "District",
    CountryID: "IL",
  },
  TimeZone: {
    Code: "IDT",
    Name: "Asia/Jerusalem",
    GmtOffset: 3,
    IsDaylightSaving: true,
    NextOffsetChange: "2021-10-30T23:00:00Z",
  },
  GeoPosition: {
    Latitude: 32.045,
    Longitude: 34.77,
    Elevation: {
      Metric: {
        Value: 34,
        Unit: "m",
        UnitType: 5,
      },
      Imperial: {
        Value: 111,
        Unit: "ft",
        UnitType: 0,
      },
    },
  },
  IsAlias: false,
  SupplementalAdminAreas: [],
  DataSets: [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "ForecastConfidence",
  ],
};

const currentConditions = [
  {
    LocalObservationDateTime: "2021-04-28T09:57:00+02:00",
    EpochTime: 1619596620,
    WeatherText: "Sunny",
    WeatherIcon: 1,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 10,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 50,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://m.accuweather.com/en/nl/amsterdam/249758/current-weather/249758?lang=en-us",
    Link:
      "http://www.accuweather.com/en/nl/amsterdam/249758/current-weather/249758?lang=en-us",
  },
];

const fiveDayForecast = {
  Headline: {
    EffectiveDate: "2021-04-28T14:00:00+02:00",
    EffectiveEpochDate: 1619611200,
    Severity: 4,
    Text:
      "Expect showery weather Wednesday afternoon through Thursday afternoon",
    Category: "rain",
    EndDate: "2021-04-29T20:00:00+02:00",
    EndEpochDate: 1619719200,
    MobileLink:
      "http://m.accuweather.com/en/nl/amsterdam/249758/extended-weather-forecast/249758?unit=c&lang=en-us",
    Link:
      "http://www.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?unit=c&lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2021-04-28T07:00:00+02:00",
      EpochDate: 1619586000,
      Temperature: {
        Minimum: {
          Value: 7.2,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 15.6,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 14,
        IconPhrase: "Partly sunny w/ showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=1&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=1&unit=c&lang=en-us",
    },
    {
      Date: "2021-04-29T07:00:00+02:00",
      EpochDate: 1619672400,
      Temperature: {
        Minimum: {
          Value: 5.1,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 9.7,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 18,
        IconPhrase: "Rain",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=2&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=2&unit=c&lang=en-us",
    },
    {
      Date: "2021-04-30T07:00:00+02:00",
      EpochDate: 1619758800,
      Temperature: {
        Minimum: {
          Value: 4.1,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 11.7,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=3&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=3&unit=c&lang=en-us",
    },
    {
      Date: "2021-05-01T07:00:00+02:00",
      EpochDate: 1619845200,
      Temperature: {
        Minimum: {
          Value: 4.4,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 12.1,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=4&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=4&unit=c&lang=en-us",
    },
    {
      Date: "2021-05-02T07:00:00+02:00",
      EpochDate: 1619931600,
      Temperature: {
        Minimum: {
          Value: 2.5,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 10.8,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=5&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=5&unit=c&lang=en-us",
    },
  ],
};

const searchResults = [
  {
    Version: 1,
    Key: "249758",
    Type: "City",
    Rank: 30,
    LocalizedName: "Amsterdam",
    Country: {
      ID: "NL",
      LocalizedName: "Netherlands",
    },
    AdministrativeArea: {
      ID: "NH",
      LocalizedName: "North Holland",
    },
  },
  {
    Version: 1,
    Key: "249528",
    Type: "City",
    Rank: 42,
    LocalizedName: "Amstelveen",
    Country: {
      ID: "NL",
      LocalizedName: "Netherlands",
    },
    AdministrativeArea: {
      ID: "NH",
      LocalizedName: "North Holland",
    },
  },
  {
    Version: 1,
    Key: "1322054",
    Type: "City",
    Rank: 45,
    LocalizedName: "Amsa-dong",
    Country: {
      ID: "KR",
      LocalizedName: "South Korea",
    },
    AdministrativeArea: {
      ID: "11",
      LocalizedName: "Seoul",
    },
  },
  {
    Version: 1,
    Key: "3509299",
    Type: "City",
    Rank: 45,
    LocalizedName: "Amsterdam Centrum",
    Country: {
      ID: "NL",
      LocalizedName: "Netherlands",
    },
    AdministrativeArea: {
      ID: "NH",
      LocalizedName: "North Holland",
    },
  },
  {
    Version: 1,
    Key: "3509283",
    Type: "City",
    Rank: 45,
    LocalizedName: "Amsterdam Nieuw-West",
    Country: {
      ID: "NL",
      LocalizedName: "Netherlands",
    },
    AdministrativeArea: {
      ID: "NH",
      LocalizedName: "North Holland",
    },
  },
  {
    Version: 1,
    Key: "3509344",
    Type: "City",
    Rank: 45,
    LocalizedName: "Amsterdam Noord",
    Country: {
      ID: "NL",
      LocalizedName: "Netherlands",
    },
    AdministrativeArea: {
      ID: "NH",
      LocalizedName: "North Holland",
    },
  },
  {
    Version: 1,
    Key: "3509294",
    Type: "City",
    Rank: 45,
    LocalizedName: "Amsterdam Oost",
    Country: {
      ID: "NL",
      LocalizedName: "Netherlands",
    },
    AdministrativeArea: {
      ID: "NH",
      LocalizedName: "North Holland",
    },
  },
  {
    Version: 1,
    Key: "3509347",
    Type: "City",
    Rank: 45,
    LocalizedName: "Amsterdam West",
    Country: {
      ID: "NL",
      LocalizedName: "Netherlands",
    },
    AdministrativeArea: {
      ID: "NH",
      LocalizedName: "North Holland",
    },
  },
  {
    Version: 1,
    Key: "3509274",
    Type: "City",
    Rank: 45,
    LocalizedName: "Amsterdam Zuid",
    Country: {
      ID: "NL",
      LocalizedName: "Netherlands",
    },
    AdministrativeArea: {
      ID: "NH",
      LocalizedName: "North Holland",
    },
  },
  {
    Version: 1,
    Key: "249493",
    Type: "City",
    Rank: 45,
    LocalizedName: "Amsterdam Zuidoost",
    Country: {
      ID: "NL",
      LocalizedName: "Netherlands",
    },
    AdministrativeArea: {
      ID: "NH",
      LocalizedName: "North Holland",
    },
  },
];
