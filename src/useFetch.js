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
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
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
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
        setIsLoading(false);
        setError(err.message);
        }
      })
      // #22. clean up
      return () => abortCont.abort();

  }, [url]);

return { data, isLoading, error }
}

export default useFetch;
