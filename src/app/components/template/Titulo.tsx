import { ElementType } from 'react'

export interface TituloProps {
    principal: string
    segundario: string
    icone: ElementType
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex gap-2">
            <props.icone size={55} stroke={1} />
            <div className="flex flex-col">
                <h1 className="text-2xl font-black">{props.principal}</h1>
                <h2 className="text-zinc-400">{props.segundario}</h2>
            </div>
        </div>
    )
}
