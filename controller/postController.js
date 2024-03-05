const {response} = require('express');

const post =[{
    id: 123123,
    tittle:'mytitle',
    body:'body here'
},
  
{
    id: 123123,
    tittle:'mytitle',
    body:'body here'
},
  

{
    id: 123123,
    tittle:'mytitle',
    body:'body here'
}
  
]

const listPost = (req , res=response)=>{
    res.statusCode = 200;
    res.json(post);
}
const createPost = (req, res=response)=>{
    
    res.json({
        ok:true,
        ...req.body
    })
}
module.exports={
    listPost,
    createPost
}