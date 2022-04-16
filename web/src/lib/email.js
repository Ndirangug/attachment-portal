import emailjs from '@emailjs/browser'

export const sendEmail = (message, recepient, sender, subject, name) => {
  console.log('send email: ', message)

  var templateParams = {
    subject,
    message,
    name,
    recepient,
    sender,
  }

  console.log('templateParams: ', templateParams);

  emailjs
    .send(
      'service_mprapip',
      'template_u3nubIc3',
      templateParams,
      'user_1VMO8M79SKBaHLB01Img6'
    )
    .then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
}
