import './Asset.css'

export const Asset = ({nome, imagem, cargo, backgroundColor}) => {
    return (
        <div className='asset'>
            <div className='header' style={{ backgroundColor: backgroundColor }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='footer'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}