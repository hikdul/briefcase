import './css/homeTitle.css'

export const HomeTitle = ({text}:homeTitleProps)=> <h1 > <span className="title">{text}</span></h1>

export const HomeSubTitle = ({text}:homeTitleProps)=> <h3><span className="title">{text}</span></h3>

interface homeTitleProps{
    text: string
}