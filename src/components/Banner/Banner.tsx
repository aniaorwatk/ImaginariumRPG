import { useEffect, useState } from "react";
import { getAPI, IBannerType, IResType, URL_IMAGINARIUM } from "../../API/APIGet";
import "./Banner.css";

const Banner = () => {

  const [banner, setBanner] = useState<IBannerType>()

  const action = (res: IResType) => {
    const response = res.story.content;
    setBanner(response.banner)
  }

  useEffect(() => {
    getAPI(URL_IMAGINARIUM, action)
  }, []);
  return (
    <img src={banner?.filename} alt={banner?.alt}className="bannerImg" />
  )
}

export default Banner
