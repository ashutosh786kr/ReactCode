import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); //empty object so that the if call isn't there then project doesnot crash
  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json"
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

    console.log(data);
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo; //basically we are returning the whole function , thats very similllar to useState
