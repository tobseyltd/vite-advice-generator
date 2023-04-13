import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import AdviceGenerator from "./components/AdviceGenerator";

interface Slip {
  slip: {
    advice: string;
    id: number;
  };
}

const App = () => {
  const [advice, setAdvice] = useState<Slip>();
  const [error, setError] = useState("");

  const reload = () => {
    const controller = new AbortController();

    axios
      .get<Slip>("https://api.adviceslip.com/advice", {
        signal: controller.signal,
      })
      .then((RESPONSE) => setAdvice(RESPONSE.data))
      .catch((ERROR) => {
        if (ERROR instanceof CanceledError) return;
        setError(ERROR.message);
      });

    return () => controller.abort();
  };

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<Slip>("https://api.adviceslip.com/advice", {
        signal: controller.signal,
      })
      .then((RESPONSE) => setAdvice(RESPONSE.data))
      .catch((ERROR) => {
        if (ERROR instanceof CanceledError) return;
        setError(ERROR.message);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-red">{error}</p>}
      <AdviceGenerator
        id={Number(advice?.slip.id)}
        advice={String(advice?.slip.advice)}
        randomAdvice={reload}
      />
    </>
  );
};

export default App;
