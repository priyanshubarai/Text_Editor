import './Header.css'
import Switch from './switch/Switch'

export default function Header(){

    return(
        <header className="font text-center h-16">
            <h1 className='text-6xl text-purple-900'>
                Text Editor
            </h1>
            {/* <span className='relative left-3/4 bottom-12'><Switch/></span> */}
            <spanc className="relative right-1/3 bottom-20 ">
                <Switch/>
            </spanc>
        </header>
    )
}