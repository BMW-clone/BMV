const {APP_SECRET,APP_TOKEN}=require("./flouciPaymentConfig")
const axios=require("axios")
module.exports={
    //! add payment
    Add:async(req,res)=>{
        const {amount}=req.body
        const url="https://developers.flouci.com/api/generate_payment"
        //!body
        const payload={
                "app_token": APP_TOKEN, 
                "app_secret": APP_SECRET,
                "amount": amount,
                "accept_card": "true",
                "session_timeout_secs": 1200,
                "success_link": "http://localhost:3000/Payment/Success",
                "fail_link": "http://localhost:3000/Payment/Fail",
                "developer_tracking_id": "86751439-24d3-48b3-9bac-d80bd1f53760"
            }
        await axios
            .post(url,payload)
            .then((result)=>{
                    res.send(result.data);
            })
            .catch((err)=>console.log(err))
                
    },
    Verify:async (req,res)=>{
        const paymentId=req.params.id;
        await axios.get(`https://developers.flouci.com/api/verify_payment/${paymentId}`,{
            headers:  {
                'Content-Type': 'application/json',
                'apppublic': APP_TOKEN,
                'appsecret': APP_SECRET,
              }
        })
        .then((result)=>res.send(result.data))
        .catch((err)=>console.log(err))
    }
}