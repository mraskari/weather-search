interface IconsProps {
  id: string;
  size: number;
  color: string;
}

const SelectIcons: React.FC<IconsProps> = (props: IconsProps) => {
  const weatherIconSelect = () => {
    if (props.id) {
      switch (true) {
        case props.id === "01d":
          return (
            <i
              className={"wi wi-day-sunny"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "01n":
          return (
            <i
              className={"wi wi-night-clear"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "02d":
          return (
            <i
              className={"wi wi-day-cloudy"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "02n":
          return (
            <i
              className={"wi wi-night-cloudy"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "03d":
          return (
            <i
              className={"wi wi-cloud"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "03n":
          return (
            <i
              className={"wi wi-cloud"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "04d":
          return (
            <i
              className={"wi wi-cloudy"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "04n":
          return (
            <i
              className={"wi wi-cloudy"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "09d":
          return (
            <i
              className={"wi wi-rain-mix"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "09n":
          return (
            <i
              className={"wi wi-rain-mix"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "10d":
          return (
            <i
              className={"wi wi-day-rain-mix"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "10n":
          return (
            <i
              className={"wi wi-night-rain-mix"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "11d":
          return (
            <i
              className={"wi wi-thunderstorm"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "11n":
          return (
            <i
              className={"wi wi-night-thunderstorm"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "13d":
          return (
            <i
              className={"wi wi-snow"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "13n":
          return (
            <i
              className={"wi wi-snow"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "50d":
          return (
            <i
              className={"wi wi-fog"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
        case props.id === "50n":
          return (
            <i
              className={"wi wi-fog"} style={{fontSize: props.size, color: props.color}}
            ></i>
          );
          break;
      }
    }
  };

  return <> {weatherIconSelect()} </>;
};

export default SelectIcons;
