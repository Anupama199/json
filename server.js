const express = require('express')
const app = express()
app.use(express.json())
app.listen(4000,() =>{
    console.log('server is up')
})
var list =[
    {
        "Hospital Name": "AJ Hospital",
        "Location": "Kazhakuttam",
        "Patient count": 200
      },
    {
        "Hospital Name": "Ananthapuri  Hospital",
        "Location": "Bypass ",
        "Patient count": 350
      },
    {
        "Hospital Name": "Cosmopolitian Hospital",
        "Location": "Pattom ",
        "Patient count": 400
      },
    {
        "Hospital Name": "Government Medical College",
        "Location": "Medical college",
        "Patient count": 2000
      },
    {
        "Hospital Name": "Jubilee Memorial Hospital",
        "Location": "Palayam ",
        "Patient count": 200
      },
    {
        "Hospital Name": "KIMS",
        "Location": "Anayara ",
        "Patient count": 500
      },
    {
        "Hospital Name": "Lords",
        "Location": "Chakai ",
        "Patient count": 400
      },
    {
        "Hospital Name": "SP Fort Hospital",
        "Location": "Pazhavangadi ",
        "Patient count": 350
      },
    {
        "Hospital Name": "SUT Hospital",
        "Location": "Ulloor ",
        "Patient count": 300
      },
    
    {
        "Hospital Name":  "Santhwana Hospital" ,
        "Location": "Anayara ",
        "Patient count": 250
      } 
  
  ]

  app.get('/list',(req,res)=>{
    res.send({
        success:true,
        messege:'data fetched successfully',
        data: list
    })
  })

  
//   app.post('/list',(req,res)=>{
//     var name =req.body.name
//     if(name){
//     list.push({
//      Location :(list.length + 1).toString(),
//       location: location
//     })
//    res.send({
//     success:true,
//     message:" data added successfully",
//    })
//  }
//  else{
//     res.send({
//         success:false,
//         messege:"validation error",
//         errors:[
//             {
//             field:"name",
//             message:"cannot be null"
//         }
//         ]
//     })
//  }
//   })

// app.delete('/list/:location', (req,res)=>{
//     var location =req.params.location 
//     var newlist = list.filter(el => el.location != location)
//     list = newlist

//     res.send({
//         success:true,
//         messege:"data deleted successfully"
//     })
// })