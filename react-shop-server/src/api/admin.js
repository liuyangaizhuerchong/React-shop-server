import { get } from "../config/requests";

export const getWeatherApi = (location) =>
  get(
    `http://api.map.baidu.com/telematics/v3/weather?location=${location}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
  );
