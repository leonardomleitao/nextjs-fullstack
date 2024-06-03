'use client'
import { IconPlus, IconUser } from '@tabler/icons-react'
import FormularioUsuario from '@/app/components/usuario/FormularioUsuario'
import ListaUsuario from '@/app/components/usuario/ListaUsuario'
import Pagina from '@/app/components/template/Pagina'
import Titulo from '@/app/components/template/Titulo'
import useUsuarios from '@/app/data/hooks/useUsuarios'

export default function Page() {
    const { usuario, usuarios, salvar, excluir, alterarUsuario } = useUsuarios()

    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone={IconUser} principal="Usuários" segundario="Cadastro de usuários" />

            {usuario ? (
                <FormularioUsuario
                    usuario={usuario}
                    onChange={alterarUsuario}
                    salvar={salvar}
                    cancelar={() => alterarUsuario(null)}
                    excluir={excluir}
                />
            ) : (
                <>
                    <div className="flex justify-end">
                        <button
                            className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
                            onClick={() => alterarUsuario({})}
                        >
                            <IconPlus />
                            <span>Novo Usuário</span>
                        </button>
                    </div>
                    <ListaUsuario usuarios={usuarios} onClick={alterarUsuario} />
                </>
            )}
        </Pagina>
    )
}
