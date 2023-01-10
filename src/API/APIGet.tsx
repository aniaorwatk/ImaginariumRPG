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
  story: any
}

export async function getAction(URL: string, action: (data: IDataType) => void) {

  const res = await fetch(URL)
  const json = await res.json()
  const data = json.story.content
  action(data)
  if (!(res.status === 200)) {
    const msg = `Error: ${res}`
    throw alert(msg)
  }
}
