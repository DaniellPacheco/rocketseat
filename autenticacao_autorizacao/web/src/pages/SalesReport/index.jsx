import { useEffect } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";


export function SalesReport() {
  
  // teste
  useEffect(() => {
    // withCredentials: true - se usar aqui, valerá apeans para essa requisição
    api.get('/sales', { withCredentials: true }).then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <h1>Relatório de Vendas</h1>
    </Container>

  )
}