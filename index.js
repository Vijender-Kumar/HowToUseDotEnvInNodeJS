require("dotenv").config();


// 6 digit OTP
const secretOtpCode = Math.floor(100000 + Math.random() * 900000);
const contentOtp = process.env.OTP_SMSCONTENT.replace("${SECRETOTP}", secretOtpCode);

console.log(contentOtp);