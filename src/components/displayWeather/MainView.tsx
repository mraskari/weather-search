import styled from "@emotion/styled";
import SelectIcons from "../selectIcons/SelectIcons";

const WeatherTitle = styled("div")`
  display: flex;
  margin: 10px;
  padding: 15px;
  justify-content: center;
  font-size: 1.3em;
  font-weight: bold;
  width: 60%;
  text-align: center;
  border-bottom: 1px solid white;
`;

const WeatherContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
  width: 550px;
  border-radius: 7px;
`;

const WeatherTop = styled("div")`
  display: flex;
  flex-direction: row;
  min-width: 500px;
  height: 150px;
  justify-content: space-around;
  align-items: start;

  padding: 20px;
`;

const WeatherTemp = styled("p")`
  color: red;
  font-size: 24px;
`;

interface MainProps {
  city: string;
  date: string;
  icon: string;
  temp: string;
}

const MainView: React.FC<MainProps> = (props: MainProps) => {

  return (
    <>
      <WeatherContainer>
        <WeatherTitle>{props.city}</WeatherTitle>
        <WeatherTop>
          <div>
            <SelectIcons id={props.icon} size={76} color="#ffc800" />
          </div>
          <div>
            <h4>{props.date.substring(0, 16).replaceAll("-", "/")}</h4>
            <WeatherTemp>{`${props.temp} c`}</WeatherTemp>
          </div>
        </WeatherTop>
      </WeatherContainer>
    </>
  );
};

export default MainView;
