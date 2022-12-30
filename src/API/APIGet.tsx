
export const URL_IMAGINARIUM = "https://api.storyblok.com/v2/cdn/stories/story?version=draft&token=jE4RYFqUUiAqm8wQBDxiqgtt&cv=1671780619"

export interface IMediaTyp {
    story: any,
    title: string,
    filename: string,
    id: number,
    source: string
  }
  
  export interface IPatroniteType {
    story: any,
    patronite_email: string
  }
  export interface IBannerType {
    story: any,
    filename: string
  }
  export interface IEventsType {
    story: any,
    id: number,
    title: string,
    filename: string
  }

export const getAPI = (URL: string, action: (res: IMediaTyp | IBannerType | IEventsType | IPatroniteType) => void,) => {
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
