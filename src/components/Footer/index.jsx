import './Footer.css'

const Footer = () => {

    const noReload = (event) =>{
        event.preventDefault()
    }

    return (
        <footer className='footer-container'>

            <div className='social-icons'>
                <a href='#' onClick={noReload} ><img src="/image/fb.png" alt="Logo facebook" /></a>
                <a href='#' onClick={noReload} ><img src="/image/tw.png" alt="Logo twiter" /></a>
                <a href='#' onClick={noReload} ><img src="/image/ig.png" alt="Logo instagram" /></a>
            </div>

            <div className='logo'>
                <img src="/public/image/logo.png" alt="Logo" />
            </div>

            <div className='author'>
                <p>Criado por Felipe Santos</p>
            </div>

        </footer>
    )
}

export default Footer