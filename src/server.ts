import { Sequelize } from "sequelize";
import Koa from "koa";
import Router from "koa-router";
// Routes
import articleRouter from "./routes/articles";
import logger = require("koa-logger");
// var KoaStatic = require('koa-static');

var jsonwebtoken = require("jsonwebtoken");

// const DB: Sequelize = require("./common/connection-db");
// https://stackoverflow.com/questions/13179109/singleton-pattern-in-nodejs-is-it-needed
const bodyParser = require('koa-bodyparser');

// Koa
const app = new Koa();
import koaBody = require("koa-body");
const router = new Router();
const cors = require("@koa/cors");
// ================
const path = require("path");
const fs = require("fs");
const serve = require("koa-static");
import process = require("process");

// =============== DB

//Test connection DB

// DB.authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err: any) => {
//     console.error("Unable to connect to the database:", err);
//   });

// Query DB

// End DB ===============

//init
app.use(logger());
app.use(bodyParser());

// app.use(bodyParser());
//app.use(
  //koaBody({
    //// formidable: { uploadDir: './uploads' },
    //multipart: true,
    //urlencoded: true,
    //json: true,
  //})
//);

app.use(cors());
// app.use(koaBody({ multipart: true }));

app.use(serve("upload"));
// app.use(KoaStatic('../upload'));

/**
 * Verification token
 * */

// app.use(function(ctx, next){
//     return next().catch((err) => {
//       if (401 == err.status) {
//         ctx.status = 401;
//         var result={
//             messgae:'Access denided token error',
//             status:401
//         }
//         ctx.body=result;
//       } else {
//         throw err;
//       }
//     });
// });

/*
//  //vinhtq:11/03/2021 :thêm hàm verify token
app.use(function(ctx, next){
     try{
        const token=ctx.request.header.authorization?.replace("Bearer","").trim();
        // var user = jsonwebtoken.verify(token, publicKey);
        // ctx.request.body.userId=user.jti;
        // ctx.request.body.user=user;
        var decoded = jsonwebtoken.decode(token, {complete: true});
        if(decoded && decoded.payload){
            var userId=decoded.payload.sub.split(":")[2];
            ctx.request.body.userToken={"userId":userId};
            return next()
        }
        else{
            var result={
                messgae:'Access denided token error',
                status:401
            }
            ctx.body=result;
        }
    }
    catch(error){
        var result={
            messgae:'Access denided token error',
            status:401
        }
        ctx.body=result;
    }
});

*/
// // // Add check token when call api
//  app.use(jwt({ secret: publicKey}));

// app.use(serve('E:/Nodejs/worktalk-api/uploads'));

/**
 * Routes
 * */

app.use(articleRouter.routes());

// app.use(function(ctx, next) {
//   var today = new Date();
//   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//   var info = {
//    "source": {
//       "time": time,
//       "method": ctx.request.method,
//       "agent": ctx.request.header['user-agent'],
//       "body" : ctx.request.body,
//       "url": ctx.request.url,
//       "resultcode": ctx.response.status,

//    }
//   };
//   var dictstring = JSON.stringify(info);
//   var folderName = date;
//   var fildeName = date + '.txt';
//   if (!fs.existsSync(path.join("./recordedReq", folderName))) {
//       fs.mkdirSync(path.join("./recordedReq", folderName));
//       fs.writeFile("./recordedReq/" + folderName + "/" + fildeName , dictstring + "\n", (err:any, rs:any) =>{
//           if (err){
//               console.log(err);
//           }
//       });
//       }
//   else {
//       fs.readFile("./recordedReq/" + folderName + "/" + fildeName,  function (err:any, data:any) {
//           if (err){
//                   console.log(err);
//           }
//           else{
//               fs.appendFile("./recordedReq/" + folderName + "/" + fildeName, dictstring + "\n", function (err:any, data:any) {
//                 if (err) {
//                     throw err;
//                 }
//             });

//           }

//       })
//   }
//   next();
// });

app.listen(process.env.NODE_PORT);

process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

