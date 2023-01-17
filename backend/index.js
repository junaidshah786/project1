const express=require("express")
const cors = require("cors")
const router=require("./routes/userRouter")
const PORT=3000;
const app=express()

app.use(cors())
app.use(express.json())
app.use('/user',router)


app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})
