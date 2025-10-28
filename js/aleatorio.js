const nomes = ["Nicolas", "Marcia", "Carlos", "Sofia", "Renata", "Sergio", "Miguel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
