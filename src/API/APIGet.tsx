import { IBannerType, IEventsType, IMediaTyp, IPatroniteType } from "../App";

export const URL_IMAGINARIUM = "https://api.storyblok.com/v2/cdn/stories/story?version=draft&token=jE4RYFqUUiAqm8wQBDxiqgtt&cv=1671780619"

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
