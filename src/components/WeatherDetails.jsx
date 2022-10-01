function WeatherDetails(props) {
    return (
        <div>
            <h5 className="cw-sidepanel-details-title">Weather Details</h5>
            <div className="cw-sidepanel-details-weatherdetails">
                <h5 className="cw-sidepanel-details-weatherdetails-citydetail">Cloudy</h5>
                {Object.keys(props.city).length !== 0 ? (
                    <h5 className="cw-sidepanel-details-weatherdetails-citydetail-result">{props.city.clouds.all}%</h5>
                ) : (
                    <h5 className="cw-sidepanel-details-weatherdetails-citydetail-result">NaN%</h5>
                )}
            </div>
            <div className="cw-sidepanel-details-weatherdetails">
                <h5 className="cw-sidepanel-details-weatherdetails-citydetail">Humidity</h5>
                {Object.keys(props.city).length !== 0 ? (
                    <h5 className="cw-sidepanel-details-weatherdetails-citydetail-result">{props.city.main.humidity}%</h5>
                ) : (
                    <h5 className="cw-sidepanel-details-weatherdetails-citydetail-result">NaN%</h5>
                )}
            </div>
            <div className="cw-sidepanel-details-weatherdetails">
                <h5 className="cw-sidepanel-details-weatherdetails-citydetail">Wind</h5>
                {Object.keys(props.city).length !== 0 ? (
                    <h5 className="cw-sidepanel-details-weatherdetails-citydetail-result">{props.city.wind.speed}%</h5>
                ) : (
                    <h5 className="cw-sidepanel-details-weatherdetails-citydetail-result">NaN%</h5>
                )}
            </div>
        </div>
    );
}

export default WeatherDetails;
