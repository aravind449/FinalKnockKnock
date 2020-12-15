const sgMail= require('@sendgrid/mail')
const sendAPIKey='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'

sgMail.setApiKey(sendAPIKey)




const sendRegMail=(mail,otp)=>{
  console.log('in account')
 // console.log(mail,otp)
    sgMail.send({

        to:mail,
        from:'komatreddy449@gmail.com',
        subject:'Confirmation',
        text:otp
        
    })
    .then(() => {
        console.log('Email sent2 hhj')
      })
      .catch((error) => {
        console.error(error)
      })

}

module.exports={
    sendRegMail
}

