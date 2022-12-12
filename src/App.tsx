import { useEffect, useState } from "react";

interface IAppType {
  title: string
}

const App = () => {

  const URL = "http://localhost:3000/test"

  const [test, setTest] = useState<IAppType[]>([])

  useEffect(() => {
    fetch(URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setTest(res);
        console.log(test)
      })

      .catch((err) => console.error(err));
  }, []);


  return (
    <div className="App">
      <h1>Imaginarium</h1>
      {test.map(one => {
        return (
          one.title
        )
      })}
    </div>
  );
}

export default App;
