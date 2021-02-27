import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import logo from '../../assets/frwk-logo.png'
// import MyContext from '../../contexts/myContext'
import './styles.css';

// import Callout from '../../Callout';

const HeaderLink = ({ onClick, title, pathname }) => {

    const path = window.location.pathname
    
    return (
        <div
            className={'label-container'}
            onClick={onClick}
            id={title+'-button'}
        >
            <label className={pathname === path ? 'label-title-clicked':'label-title'}>{title}</label>
        </div>
    )
}

function Header(){
    const [{ width }, setDimension] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [dropMenuOpen, setDropMenuOpen] = useState(false);
    const [curCallout, setCurCallout] = useState(0);
    const history = useHistory()

    const handle = () =>{
        history.push('/to-dos')
    }
    const showMenu = () =>{
        setDropMenuOpen(!dropMenuOpen)
    }
    // const handleInicio = () =>{
    //     if(dropMenuOpen){
    //         setDropMenuOpen(false)
    //     }
    //     setPathname('Início')
        
    //     document.getElementById('content-main-component').style.marginTop = '170px'
    //     document.getElementById('content-main-component').style.opacity = 0
	// 	document.getElementById('content-main-component').style.animation = 'fadeImage 2s 0.8s both'

    //     setBackground('1')
    //     setTitle('AGUARDE, POIS SUA EXPERIÊNCIA ESTÁ SENDO DESENVOLVIDA!')
    //     setText('A Three é uma plataforma de jogos brasileira. Sua experiência ao abrir um jogo não será mais a mesma.')
    // }
    // const handlePlataforma = () =>{
    //     if(dropMenuOpen){
    //         setDropMenuOpen(false)
    //     }
    //     setPathname('Plataforma')

    //     document.getElementById('content-main-component').style.marginTop = '170px'
    //     document.getElementById('content-main-component').style.opacity = 0
	// 	document.getElementById('content-main-component').style.animation = 'fadeImage2 2s 0.8s both'

    //     setBackground('2')
    //     setTitle('PENSADA PRA TE ACOMODAR!')
    //     setText('A Three é uma plataforma de venda de jogos feita de Gamers para Gamers, então aguarde por uma plataforma de fácil e rápido uso. Temos como principal objetivo, compreender os gostos e desejos de seus clientes, fornecendo-lhes uma plataforma que encontra as suas expectativas.')
    // }
    // const handleQuem = () =>{
    //     if(dropMenuOpen){
    //         setDropMenuOpen(false)
    //     }
    //     setPathname('Quem Somos?')

    //     document.getElementById('content-main-component').style.marginTop = '170px'
    //     document.getElementById('content-main-component').style.opacity = 0
	// 	document.getElementById('content-main-component').style.animation = 'fadeImage3 2s 0.8s both'

    //     setBackground('3')
    //     setTitle('É REAL MESMO ESSA PARADA AÍ?')
    //     setText('Grupo LAG é uma empresa brasileira desenvolvedora de jogos eletrônicos e de distribuição digital, foi aberto em 30 de Junho de 2020 de um sonho de 3 acadêmicos de Engenharia da Computação, de criar a primeira plataforma de jogos brasileira.')
    // }

    // const handleMenuClick = () =>{
    //     if(dropMenuOpen)
    //         document.getElementById('content-main-component').style.marginTop = '170px'
    //     else
    //         document.getElementById('content-main-component').style.marginTop = '250px'
        
    //     setDropMenuOpen(!dropMenuOpen)
    // }

    const updateWindowDimensions = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }

    useEffect(() => {
        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, [])

    useEffect(() => {
        if(width > 700 && dropMenuOpen) {
            setDropMenuOpen(false);
        } else if(width < 700 && curCallout) {
            setCurCallout(0);
        }
    }, [width, dropMenuOpen, curCallout]);

    
    return (
        <header>
            <div id="geral">
                <div className="left-content">
                    <div id="boximg">
                        <img src={logo} className="img_logo" alt="logo do aplicativo" id="img_logo" />
                    </div> 
                </div>
                <div className='right-content'>
                    {width > 700 ? // pc
                        <>
                            
                            <HeaderLink pathname='/albuns' title='Álbuns' onClick={() => handle()}/>
                            <HeaderLink pathname='/posts' title='Postagens' onClick={() => handle()}/>
                            <HeaderLink pathname='/to-dos' title='To-Dos' onClick={() => handle()}/>

                        </>
                    : // mobile
                        <div
                            id='menu-button'
                            className={ dropMenuOpen ?  'menu-button-active' : 'menu-button' }
                            onClick={() => showMenu()}
                        >
                            <MenuIcon className='menu-icon'/>
                        </div>
                    }
                </div>
            </div>
            <div
                id='menu'
                className= {dropMenuOpen ? 'menu-open' : 'menu-closed'}
            >
                <HeaderLink title='Início' onClick={() => handle()}/>
                <HeaderLink title='Plataforma' onClick={() => handle()}/>
                <HeaderLink title='Quem Somos?' onClick={() => handle()}/>

            </div>
        </header>
    )
}
export default React.memo(Header)