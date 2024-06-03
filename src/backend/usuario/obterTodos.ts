'use server'
import RepositorioUsuario from './RepositorioUsuario'

export default async function obterTodos() {
    return RepositorioUsuario.obterTodos()
}
