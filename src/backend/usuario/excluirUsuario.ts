'use server'
import RepositorioUsuario from './RepositorioUsuario'

export default async function excluirUsuario(id: string) {
    return RepositorioUsuario.excluir(id)
}
