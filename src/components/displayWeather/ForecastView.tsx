import styled from "@emotion/styled";
import SelectIcons from "../selectIcons/SelectIcons";

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7px 4px;
  padding: 10px 3px;
  width: 100px;
  border: 1px solid lightblue;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.4);
`;

const WeatherTemp = styled("p")`
  color: green;
  font-size: 14px;
`;

interface MainProps {
  date: string;
  icon: string;
  temp: string;
}

const ForecastView: React.FC<MainProps> = (props: MainProps) => {
  // const selectColor = () => {
  //   let id = props.searchedWeatherData ? props.searchedWeatherData[0].weather[0].icon : '';
  //   if (id === '01d')
  //     return "#f5d800"
  //   else
  //     return "Blue"
  // }

  return (
    <>
      <WeatherContainer>
        <SelectIcons id={props.icon} size={24} color="blue" />
        <WeatherTemp>{`${props.temp} c`}</WeatherTemp>
        <h6>{props.date.substring(5, 10).replaceAll("-", "/")}</h6>
      </WeatherContainer>
    </>
  );
};

export default ForecastView;
