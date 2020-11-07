const MENSAJES: string[] = ["El texto es muy corto", "El texto es muy largo"];

function obtenerError(numError: number) {
  if (numError > MENSAJES.length) {
    return "Error genérico";
  }

  return MENSAJES[numError];
}

export { obtenerError };
