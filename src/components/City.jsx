import { ImBlocked } from 'react-icons/im';
import { IoSync, IoThunderstormOutline } from 'react-icons/io5';
import { BsCloudDrizzle, BsCloudRainHeavy, BsSnow, BsSun, BsClouds } from 'react-icons/bs';

function City(props) {
    const currentDate = new Date();
    const daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
    const datetime = currentDate.getHours() + ":" + currentDate.getMinutes() + " - " + daysList[currentDate.getDay()] + ", " + currentDate.getDate() + " " + monthsList[currentDate.getMonth() + 1] + " '" + (currentDate.getFullYear() % 100);

    const WEATHER_ICON_MAP = {
        "Thunderstorm": <IoThunderstormOutline size={35}/>,
        "Drizzle": <BsCloudDrizzle size={35}/>,
        "Rain": <BsCloudRainHeavy size={35}/>,
        "Snow": <BsSnow size={35}/>,
        "Clear": <BsSun size={35}/>,
        "Clouds": <BsClouds size={35}/>,
      };

    return (
        <div className="cw-full">
            <div className="cw-main">
                {Object.keys(props.city).length !== 0 ? (
                    <h1 className="cw-main-temp">{parseInt(props.city.main.temp, 10)}°</h1>
                ) : (
                    <h1 className="cw-main-temp">NaN</h1>
                )}
                <div className="cw-main-citydetail">
                    {Object.keys(props.city).length !== 0 ? (
                        <h4 className="cw-main-citydetail-cityname">{props.city.name}</h4>
                    ) : (
                        <h4 className="cw-main-citydetail-cityname">NaN</h4>
                    )}
                    <h5 className="cw-main-citydetail-date">{datetime}</h5>
                </div>
                <div className="cw-main-citydetail">
                    {WEATHER_ICON_MAP[props.city.weather[0].main] ? WEATHER_ICON_MAP[props.city.weather[0].main] : <ImBlocked size={35}/>}
                    {Object.keys(props.city).length !== 0 ? (
                        <h5 className="cw-main-citydetail-condition">{props.city.weather[0].main}</h5>
                    ) : (
                        <h5 className="cw-main-citydetail-condition">NaN</h5>
                    )}
                </div>
            </div>
        </div>
    );
}

export default City;
