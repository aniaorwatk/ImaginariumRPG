import "./Banner.scss";

interface IBType {
  banner: {
    filename: string,
    alt: string
  } | undefined
}

const Banner = ({ banner }: IBType) => {

  return (
    <>
      {banner && <img src={banner?.filename} alt={banner?.alt} title={banner?.alt} loading="eager" width={342} height={100} className="bannerImg" />}
    </>
  )
}

export default Banner
