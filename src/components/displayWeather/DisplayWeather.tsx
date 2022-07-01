import { SearchWeather } from "../../utils/types";
import "../../icons/css/weather-icons.css";
import { useState } from "react";
import styled from "@emotion/styled";
import SelectIcons from "../selectIcons/SelectIcons";
import MainView from "./MainView";
import ForecastView from "./ForecastView";

interface ContainerProps {
  dayNight?: string;
}

const WeatherContainer = styled.div<ContainerProps>(
  ({ dayNight = "day" }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  width: 550px;
  border: 1px solid lightblue;
  background-image: url( ${
    process.env.PUBLIC_URL + "/images/" + dayNight + ".jpg"
  });
  box-shadow: 2px 2px 1pc lightblue;
  border-radius: 7px;
`
);

const ForecastSection = styled.div`

  max-width: 550px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

interface ApiProps {
  city?: string;
  loading?: boolean;
  searchedWeatherData?: SearchWeather[];
  error?: string;
}

const DisplayWeather: React.FC<ApiProps> = (props: ApiProps) => {

  const getEveryNth = (arr: SearchWeather[]) => {
    const result = [];

    for (let i = 0; i < arr.length; i += 8) {
      result.push(arr[i]);
    }

    return result;
  };

  return (
    <>
      <WeatherContainer dayNight={
          Number(props.searchedWeatherData ? props.searchedWeatherData[0].dt_txt.substring(11, 13) : 0) < 7 ||
          Number(props.searchedWeatherData ? props.searchedWeatherData[0].dt_txt.substring(11, 13) : 0) > 21
            ? "night"
            : "day"
        }>
          
        <MainView
        
          city={props.city ? props.city : ""}
          icon={
            props.searchedWeatherData
              ? props.searchedWeatherData[0].weather[0].icon
              : ""
          }
          date={
            props.searchedWeatherData ? props.searchedWeatherData[0].dt_txt : ""
          }
          temp={
            props.searchedWeatherData
              ? props.searchedWeatherData[0].main.temp
              : ""
          }
        />
      <ForecastSection>
        {props.searchedWeatherData
          ? getEveryNth(props.searchedWeatherData).map((data, index) => (
              <ForecastView key={index}
                temp={data.main.temp}
                date={data.dt_txt}
                icon={data.weather[0].icon}
              />
            ))
          : ""}
          </ForecastSection>
      </WeatherContainer>
    </>
  );
};

export default DisplayWeather;
