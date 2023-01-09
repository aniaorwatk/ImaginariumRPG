import { useEffect, useState } from "react";
import { getAction, IBannerType, IDataType, URL_IMAGINARIUM } from "../../API/APIGet";
import "./Banner.css";

const Banner = () => {

  const [banner, setBanner] = useState<IBannerType>()

  const action = (data: IDataType) => {
    setBanner(data.banner)
  }

  useEffect(() => {
    getAction(URL_IMAGINARIUM, action)
  }, []);
  return (
    <img src={banner?.filename} alt={banner?.alt} className="bannerImg" />
  )
}

export default Banner
