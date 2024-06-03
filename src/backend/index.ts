import salvarUsuario from './usuario/salvarUsuario'
import obterTodos from './usuario/obterTodos'
import excluirUsuario from './usuario/excluirUsuario'

// Padrão Facade
export default class Backend {
    static readonly usuarios = {
        salvar: salvarUsuario,
        obter: obterTodos,
        excluir: excluirUsuario,
    }
}
