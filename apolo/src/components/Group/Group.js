import { Asset } from '../Asset/Asset'
import './Group.css'

export const Group = (props) => {
    return(
        props.assets.length > 0 && <section className='group' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
            <div className='assets'>
                {props.assets.map(asset => <Asset backgroundColor={props.primaryColor} key={asset.nome} nome={asset.nome} cargo={asset.cargo} imagem={asset.imagem}/>)}
            </div>
        </section>
    )
}