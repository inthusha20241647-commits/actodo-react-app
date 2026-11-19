function Card(props){
    return(
        
        <div className="flex justify-between gap-7 flex-wrap mt-5">
          <div style={{backgroundColor:props.bgcolor}} className="px-10 py-5 rounded-md flex-grow text-center">
            <h1 className="text-2xl font-medium">{props.title}</h1>
            <p>{props.subtitle}</p>
          </div>
          </div>
        
         
        
        

    )
}
export default Card;