import morgan from 'morgan';
import axios from 'axios';
import express from 'express';

const app = express();
app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/airkorea', async (req, res)=>{
  const serviceKey = "serviceKey";
  const airUrl = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?";

  let parmas = encodeURI('serviceKey') + '=' + serviceKey;
  parmas += '&' + encodeURI('numOfRows') + '=' + encodeURI('1');
  parmas += '&' + encodeURI('pageNo') + '=' + encodeURI('1');
  parmas += '&' + encodeURI('dataTerm') + '=' + encodeURI('DAILY');
  parmas += '&' + encodeURI('ver') + '=' + encodeURI('1.3');
  parmas += '&' + encodeURI('stationName') + '=' + encodeURI('마포구');
  parmas += '&' + encodeURI('returnType') + '=' + encodeURI('json');

  const url = airUrl + parmas;

  try {
    const result = await axios.get(url);
    const airItem = {
      "location":result.data.ArpltnInforInqureSvcVo["stationName"], // location
      "time":result.data.list[0]['dataTime'],
      "pm10":result.data.list[0]['pm10Value'],
      "pm25":result.data.list[0]['pm25Value'],
    }

    const badAir = [];
    // pm10 is 미세먼지 수치
    if (airItem.pm10 <= 30){
      badAir.push('good');
    }
    else if (pm10 > 30 && pm10 <= 35){
      badAir.push('normal');
    }
    else{
      badAir.push('bad!!');
    }

    res.send(`관측 지역 : ${airItem.location} / 관측 시간 : ${airItem.time} <br> 
      미세 먼지 : ${badAir[0]} / 초미세먼지 : ${badAir[1]} 입니다. `);

  } catch(error){
    console.log(error);
  }
});

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), '번 포트에서 서버 실행 중 .. ');
})