import axios from "axios";

export interface Slip {
  slip: {
    advice: string;
    id: number;
  };
}

class AdviceService  {
    getAdvice() {
        const controller = new AbortController();

        const request = axios.get<Slip>("https://api.adviceslip.com/advice", {
        signal: controller.signal,
      })

      return { request, cancel: () => controller.abort()}
    }
}

export default new AdviceService()