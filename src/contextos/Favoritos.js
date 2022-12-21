const { createContext, useState, useContext } = require("react");

/* Estamos criando um contexto, dessa forma, conseguimos compartilhar globalmente alguns estados e valores. */

/* Essa função realiza a criação de um contexto. */
const FavoritosContext = createContext();

/* Essa será a forma que o contexto será chamado. */
FavoritosContext.displayName = "Favoritos";

/* Quando usarmos essa função, todos os "children", ou seja, os componentes que estiverem dentro do "FavoritosContext.Provider" poderão usufruir desse contexto. */
const FavoritosProvider = ({ children }) => {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;

/* Estamos criando um hook personalizado para criar funcionalidades nesse contexto. A primeira funcionalidade foi a de favoritar. */
export const useFavoritoContext = () => {
  /* Estamos puxando os valores de "favorito" e "setFavorito" no provider. */
  const { favorito, setFavorito } = useContext(FavoritosContext);

  const adicionarFavorito = (novoFavorito) => {
    /* Estamos procurando se, em algum lugar, existe um favorito com o mesmo ID do que estamos tentando acrescentar. Se existir, será retornado "true". */

    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    );

    let novaLista = [...favorito];

    /* Se não existir o favorito repetido dentro da lista de favoritos, esse novo favorito será acrescentado na lista. */
    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    novaLista.splice(novaLista.indexOf(novoFavorito), 1);

    /* Estamos adicionando a nova lista como o conjunto de favoritos, já com o novo favorito que foi, ou não, adicionado. */
    return setFavorito(novaLista);
  };

  return {
    favorito,
    adicionarFavorito,
  };
};
