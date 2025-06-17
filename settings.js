require('dotenv').config()


//_______________________ ┏  Info  ┓ _______________________\\
//
//   Credit : AlipBot
//   
//   Note 
//   Jangan Jual SC ini ,
//   Jangan Buang Text ini,
//   Siapa Mahu Upload Jangan Lupa Credit :),
//   Siapa Tidak Letak Credit Akan Ambil Tindakan
//   
//_______________________ ┏ Make By AlipBot ┓ _______________________\\





//_______________________ ┏  Main Setting  ┓ _______________________\\

creator = 'Family95' // Nama 
port = 443 //port host
LimitApikey = 50 // Limit Apikey default

//___________ ┏  Database Mongodb Setting  ┓ ___________\\

keymongodb = process.env.mongodb //example "mongodb+srv://user:password@name_database.mongodb.net/?retryWrites=true&w=majority";

//___________ ┏  SMTP Setting  ┓ ___________\\

//note service SMTP Gmail Tidak Boleh Send Kat Temp Email Kalau mahu pakai temp email buat di service lain
usetempemail = false // kalau true boleh sing up pakai email temp kalau pakai service gmail pakai false je 
servicesmtp = 'Gmail'//Ada gmail ada sendinblue ikut masing2 limit gmail 500 limit sendinblue 300 free. List service smtp : https://nodemailer.com/smtp/well-known/
sendemail = process.env.sendemail //Email SMTP
fromsendemail = process.env.fromsendemail // From Email SMTP *kalau takde custom email kena sama email dengan Email SMTP
sendpwmail = process.env.sendpwmail // Password Email SMTP
domain = 'alpis.eu.org'// domain website tanpa http or https

//_______________________ ┏  Apikey  ┓ _______________________\\

// NOTE!!!!
// KALAU APIKEY HABIS BUAT SENDIRI

//Get Api Cuttly From https://cutt.ly/cuttly-api    \\
apicuttly = ['14107d730d89428491ebe5e27744b2c7dc23e']

//Get Api Bittly From https://bitly.com/a/sign_in?rd=/settings/api/    \\
apibitly = ['9854494906335f2963e0f2861da92e34e60e2bfe']

//APIKEY RECAPTCHA From https://www.google.com/recaptcha/about/ or https://www.google.com/recaptcha/admin  \\
recaptcha_key_1 = process.env.recaptcha_key_1
recaptcha_key_2 = process.env.recaptcha_key_2

//_______________________ ┏  Loghandler  ┓ _______________________\\

loghandler = {
    error: {
        status: false,
        code: 503,
        message: '[!] Service Unavaible Or Error',
        maintanied_by: `${creator}`
    },
    noturl: {
    	status: false,
    	code: 403,
    	message: '[!] Forbiden or Error, Invlid url',
    	maintanied_by: `${creator}`
    },
    notfound: {
    	status: false,
    	code: 404,
    	message: '[!] Forbiden or Error, Not Found',
    	maintanied_by: `${creator}`
    },
    notid: {
    	status: false,
    	code: 404,
    	message: '[!] Forbiden or Error, Invalid Id or Zone',
    	maintanied_by: `${creator}`
    },
    redy: {
    	status: false,
    	code: 403,
    	message: '[!] Forbiden or Error, Alias ​​already in use',
    	maintanied_by: `${creator}`
    },
    emoji: {
	    status: false,
	    code: 403,
	    message: '[!] Forbiden or Error, Emoji not Found',
	    maintanied_by: `${creator}`
	},
    instgram: {
	    status: false,
	    code: 403,
	    message: '[!] Forbiden or Error, Username tidak wujud atau account private',
	    maintanied_by: `${creator}`
   },
    register: {
	    status: false,
	    code: 403,
	    message: '[!] Please Register First',
  },
   verify: {
	    status: false,
	    code: 403,
	    message: '[!] Please Verify Email',
}

}



