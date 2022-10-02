import "./css/unHidden.css";

export const UnHidden = ({children}: unHiddenProps) => {
  return( <div className="ocult">
    {children}   
 </div>)
}

interface unHiddenProps {
  children: JSX.Element;
}
