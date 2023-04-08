import './Footer.css'

export const Footer = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/samuel-piasecki/" target="_blank" rel="noreferrer">
                            <img src="/img/icons/linkedin.svg" alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/SamuelPiasecki" target="_blank" rel="noreferrer">
                            <img src="/img/icons/github.svg" alt="Github" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/img/icons/logo.png" alt=""/>
            </section>
            <section>
                <p>
                    Desenvolvido por Samuel Piasecki.
                </p>
            </section>
        </footer>
    )
}