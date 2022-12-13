import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';

interface IAppType {
  title: string
}
interface IMediaTyp {
  title: string,
  logo: string,
  link: string,
  color: string,
  colorTwo: string
}

const App = () => {

  const URL_TEST = "http://localhost:3000/test"
  const URL_MEDIA = "http://localhost:3000/media"

  const [test, setTest] = useState<IAppType[]>([])
  const [media, setMedia] = useState<IMediaTyp[]>([])

  useEffect(() => {
    fetch(URL_TEST, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setTest(res);
        console.log(test)
      })

      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(URL_MEDIA, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setMedia(res);
        console.log(media)
      })

      .catch((err) => console.error(err));
  }, []);

  const allMedia = media.map(one => {
    return (
      <div>
        <Icon icon={one.logo} 
        color={one.color} 
        width="40" height="40"
  />
        <p>{one.title}</p>
      </div>
    )
  })


  return (
    <div className="App">
      <h1>Imaginarium</h1>
      {test.map(one => {
        return (
          one.title
        )
      })}
      {allMedia}
    </div>
  );
}

export default App;
