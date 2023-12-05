export function formatDate(date: string) {
    const data = new Date(date);
    const dia = String(data.getUTCDate()).padStart(2, "0");
    const mes = String(data.getUTCMonth() + 1).padStart(2, "0");
    const ano = data.getUTCFullYear();
    const horas = String(data.getUTCHours()).padStart(2, "0");
    const minutos = String(data.getUTCMinutes()).padStart(2, "0");
    const segundos = String(data.getUTCSeconds()).padStart(2, "0");
  
    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
  }