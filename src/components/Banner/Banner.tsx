import { useEffect, useState } from "react";
import { getAction, IBannerType, IDataType, URL_IMAGINARIUM } from "../../API/APIGet";
import "./Banner.scss";

const Banner = () => {

  const [banner, setBanner] = useState<IBannerType>()

  useEffect(() => {
    getAction(URL_IMAGINARIUM, (data: IDataType) => {
      setBanner(data.banner)
    })
  }, [banner]);

  return (
    <>
      {banner && <img src={banner?.filename} alt={banner?.alt} title={banner?.alt} loading="eager" width={342} height={100}  className="bannerImg" />}
    </>
  )
}

export default Banner
