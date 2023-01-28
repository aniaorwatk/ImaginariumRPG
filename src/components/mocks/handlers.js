import { rest } from "msw";

export const handlers = [
  rest.get("https://api.storyblok.com/v2/cdn/stories/story", (req, res, ctx) => {
    return res(
      ctx.json({
        story: {
          content: {
            events: [
              {
                id: 1,
                title: "Title 1",
                filename: "test1.jpg",
              },
              {
                id: 2,
                title: "Title 2",
                filename: "test2.jpg",
              },
            ],
            media: [
              {
                id: 1,
                title: "Discord",
                filename: "test1.jpg",
                source: "www.test1.pl"
              },
              {
                id: 2,
                title: "Twitch",
                filename: "test2.jpg",
                source: "www.test2.pl"
              },
            ],
            banner: {
              id:1,
              filename: "https://a.storyblok.com/f/188945/342x100/34919fd073/banner.jpg",
              alt: "Baner świąteczny"
            },
            patronite_email: "imagrpg@gmail.com",

            new_publication:{
              alt: "testowy alt",
              title: "Każdy jest Johnem nowa edycja",
              filename: "test1.jpg",
              source: "www.test1.pl"
            }
          }
        }
      })
    )
  }),
]
