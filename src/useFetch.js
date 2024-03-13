import { useState, useEffect } from "react";

// #18. When making a custom hook always name it with "use" followed by whatever you want
const useFetch = (url) => {
  // #9. parent component
  const [data, setData] = useState(null);
  // 16.
  const [isLoading, setIsLoading] = useState(true);
  // 17.
  const [error, setError] = useState(null);

  // #12.
  useEffect(() => {
    fetch(url)
      .then((res) => {
        // says if response is not ok
        if (!res.ok) {
          throw Error(
            "Problem fetching data, try again later. If problem persists please contact us."
          );
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      // #17. errors
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      })
  }, [url]);

return { data, isLoading, error }
}

export default useFetch;
