import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom"

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import Espada  from '../../assets/icons/Header/espada.svg'
import Darth  from '../../assets/icons/Header/darth.svg'
import Capacete from '../../assets/icons/Header/capacete.svg'
import Ship  from '../../assets/icons/Header/ship.svg'
import logo from '../../assets/frwk-logo.png'

import './styles.css'

const HeaderLink = ({ onClick, title, pathname, Icon }) => {

    const location = useLocation()

    return (
        <div
            className={'label-container'}
            onClick={onClick}
            id={title+'-button'}
        >
            <img src={Icon} alt='icon'className='label-icon'/>
            <label className={pathname === location.pathname ? 'label-title-clicked':'label-title'}>{title}</label>
        </div>
    )
}

function Header(){
    const [{ width }, setDimension] = useState({ width: window.innerWidth, height: window.innerHeight })
    const [dropMenuOpen, setDropMenuOpen] = useState(false)
    const [curCallout, setCurCallout] = useState(0)
    const history = useHistory()

    const handlePageLoad = (pathnamme) =>{
        if(dropMenuOpen)
            setDropMenuOpen(false)

        history.push(pathnamme)
    }

    const showMenu = () =>{
        
        let idName

        if(window.location.pathname === '/'){
            
            if(dropMenuOpen)
                document.getElementById('home').style.marginTop = '0px'
            else
                document.getElementById('home').style.marginTop = '220px'

            setDropMenuOpen(!dropMenuOpen)

            return
        }

        if(window.location.pathname === '/albuns')
            idName = 'album-container-cards'
        else if(window.location.pathname === '/to-dos')
            idName = 'todos-container-cards'
        else if(window.location.pathname === '/posts')
            idName = 'posts-container-cards'

        if(dropMenuOpen)
            document.getElementById(idName).style.marginTop = '170px'
        else
            document.getElementById(idName).style.marginTop = '420px'
        
        setDropMenuOpen(!dropMenuOpen)
    }
   
    const updateWindowDimensions = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    useEffect(() => {
        window.addEventListener('resize', updateWindowDimensions)
        return () => window.removeEventListener('resize', updateWindowDimensions)
    }, [])

    useEffect(() => {
        if(width > 700 && dropMenuOpen) {
            setDropMenuOpen(false)
        } else if(width < 700 && curCallout) {
            setCurCallout(0)
        }
    }, [width, dropMenuOpen, curCallout])

    
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
                            <HeaderLink Icon={Ship} pathname='/' title='Home' onClick={() => handlePageLoad('/')}/>
                            <HeaderLink Icon={Darth} pathname='/albuns' title='Álbuns' onClick={() => handlePageLoad('/albuns')}/>
                            <HeaderLink Icon={Capacete} pathname='/posts' title='Postagens' onClick={() => handlePageLoad('/posts')}/>
                            <HeaderLink Icon={Espada} pathname='/to-dos' title='To-Dos' onClick={() => handlePageLoad('/to-dos')}/>

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
                <HeaderLink Icon={Ship} pathname='/' title='Home' onClick={() => handlePageLoad('/')}/>
                <HeaderLink Icon={Darth} pathname='/albuns' title='Álbuns' onClick={() => handlePageLoad('/albuns')}/>
                <HeaderLink Icon={Capacete} pathname='/posts' title='Postagens' onClick={() => handlePageLoad('/posts')}/>
                <HeaderLink Icon={Espada} pathname='/to-dos' title='To-Dos' onClick={() => handlePageLoad('/to-dos')}/>

            </div>
        </header>
    )
}
export default React.memo(Header)