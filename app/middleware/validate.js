const validate=(body)=>{
    let message=""
    if(!body.title){message="Title cannot be empty."}
    else if(!body.desc){message="Description cannot be empty."}
    else if(!body.genre){message="Genre cannot be empty."}
    else if(!body.releaseDate){message="Release date cannot be empty."}
    else if(!body.director.name){message="Director name cannot be empty."}
    else if(!body.director.bio){message="Director biography cannot be empty."}

    if(message!=="")
    {
        return {validateResult:false,errMessage:message}
    }

    return {validateResult:true,errMessage:message}
}

module.exports=validate