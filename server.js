import express from "express";
import dotenv from 'dotenv'
import cors from 'cors';
import bodyParser from "body-parser";
import {v4 as uuid} from 'uuid';
import { Connection } from "./connection/db.js";
import DefaultData from "./defaults/default.js";
import Router from "./routes/route.js";
import DefaultMobileData from "./defaults/defaultmobile.js";



dotenv.config();

const app = express();


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Router);





const PORT= process.env.PORT || 8080;

const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD

 const Mongoose_URL=process.env.MongooseURL || `mongodb://${USERNAME}:${PASSWORD}@ac-kz72pr1-shard-00-00.nea1wji.mongodb.net:27017,ac-kz72pr1-shard-00-01.nea1wji.mongodb.net:27017,ac-kz72pr1-shard-00-02.nea1wji.mongodb.net:27017/FLIPKART?ssl=true&replicaSet=atlas-13jygg-shard-0&authSource=admin&retryWrites=true&w=majority`;


Connection(Mongoose_URL);

if(process.env.NODE_ENV==='production'){
app.use(express.static('frontend/build'))
}

app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT} `));


DefaultData();
DefaultMobileData();


export let  paytmMerchantKey =process.env.PAYTM_MERCHANT_KEY ;
export let paytmParams ={};
paytmParams['MID']=process.env.PAYTM_MID;
paytmParams['WEBSITE']=process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID']=process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID']=uuid();
paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'callback';
paytmParams['EMAIL'] = 'manjuyadav@gmail.com';
paytmParams['MOBILE_NO'] ='1234567892';



