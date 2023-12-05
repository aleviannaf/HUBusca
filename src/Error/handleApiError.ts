import axios, { AxiosError } from "axios";

export const handleApiError = (error: AxiosError, message: string) => {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 404) {
        return new Error(message);
      } else if (axiosError.response?.status === 500) {
        return new Error(
          "Erro interno do servidor. Por favor, tente novamente mais tarde."
        );
      } else {
        return new Error("Erro desconhecido. Por favor, tente novamente.");
      }
    } else {
      return new Error("Erro na requisição. Por favor, tente novamente.");
    }
  };