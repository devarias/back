const express = require('express');
// var nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'finalprojectc12med@gmail.com',
//     pass: 'HolbertonC12',
//   },
// });

// var mailOptions = {
//   from: 'finalprojectc12med@gmail.com',
//   to: '1808@holbertonschool.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!',
// };

app.get('/', (req, res) => {
  // transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });
  res.send('I am here');
});
function tick() {
  let mins = new Date().getMinutes();
  if (mins == '56') {
    alert('Do stuff');
  }
  console.log('Tick ' + mins);
}

setInterval(tick, 1000);

app.listen(process.env.PORT || port, () => {
  console.log(`listening on ${port}`);
});
