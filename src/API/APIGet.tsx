import { SetStateAction } from "react"

export const URL_IMAGINARIUM = "https://api.storyblok.com/v2/cdn/stories/story?version=draft&token=jE4RYFqUUiAqm8wQBDxiqgtt&cv=1671780619"

export interface IMediaType {
  title: string,
  filename: string,
  id: number,
  source?: string,
}

export interface IBannerType {
  filename: string,
  alt: string
}

export interface IEventType {
  id: number,
  title: string,
  filename: string
}

export interface IDataType {
  patronite_email: SetStateAction<string>
  media: SetStateAction<IMediaType[]>
  events: SetStateAction<IEventType[]>
  banner: SetStateAction<IBannerType | undefined>
  data: IMediaType | IBannerType | IEventType 
}

export const getAction = (URL: string, action: (data: IDataType) => void) => {

  fetch(URL, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      const data = res.story.content
      action(data)
    })
    .catch((err) => {
      if (!(err.status === 200)) {
        const msg = `Error: ${err}`
        throw alert(msg)
      }
    });
}
