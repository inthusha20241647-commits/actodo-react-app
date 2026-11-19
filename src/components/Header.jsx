function Header(props){
    return(
        <div>
            <h1 className="text-3xl font-medium">Hello {props.name}</h1>
            <p>Here's your activity dashboard.</p>
        </div>
    )
}
export default Header;