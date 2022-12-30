export const URL_IMAGINARIUM = "https://api.storyblok.com/v2/cdn/stories/story?version=draft&token=jE4RYFqUUiAqm8wQBDxiqgtt&cv=1671780619"

export interface IMediaTyp {
  title: string,
  filename: string,
  id: number,
  source: string
}

export interface IPatroniteType {
  patronite_email: string
}
export interface IBannerType {
  filename: string
}
export interface IEventsType {
  id: number,
  title: string,
  filename: string
}

export interface IResType {
  res: IMediaTyp | IBannerType | IEventsType | IPatroniteType
  story:any
}

export const getAPI = (URL: string, action: (res: IResType) => void,) => {
  fetch(URL, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      action(res)
    })
    .catch((err) => {
      if (!(err.status === 200)) {
        const msg = `Page not found: ${err}`
        throw alert(msg)
      }
    });
}
