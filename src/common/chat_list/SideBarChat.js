const CommonChatDetails = ({chatArr = []}) => {
  return(
    chatArr.map((ele)=>{
        return(
    
      <li className="chat-list" key={ele.id}  >
        <img src={ele.image} alt={ele.name} className="chat-image"></img>
       
          <div className="chat-title">
            <h3>{ele.name}</h3>
            
          <p>{ele.details}</p>
          </div>
          <span>{ele.time}</span>
       
      </li>

        )
   })
  
)
};

export default CommonChatDetails;
