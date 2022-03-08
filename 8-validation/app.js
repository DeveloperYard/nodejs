import express from 'express';
import {body, validationResult, param, check} from 'express-validator';
const app = express();
app.use(express.json());

// 이런 식으로 체이닝해서 여러 가지의 유효성 검사를 하고 해당하는 에러 메시지를 보낼 수 있음
// module!
const validate = (req, res, next)=>{
  const errors = validationResult(req);
  if (errors.isEmpty()){
    return next();
  }
  return res.status(400).json({message: errors.array()[0].msg});
}

app.post(
  '/users', 
  [
    // trim => removing empty space
    // 순서가 중요! 곻백을 줄이고 길이검사
    // 만약 길이검사를 하고 공백을 줄이면 유효성 검사가 통과됨!
    // 데이터베이스에 저장되기 전에 정확하게 처리!
    body('name').trim().notEmpty().withMessage('이름을 입력해!').isLength({min:2, max:10}).withMessage('이름은 두 글자 이상'),
    body('age').notEmpty().isInt().withMessage('숫자를 입력해!'),
    body('email').isEmail().withMessage('이메일 입력해요').normalizeEmail(),
    body('job.name').notEmpty(),
    validate,
  ],
  (req, res, next)=>{
    
    console.log(req.body);
    // if(req.body.email..){ // email validation check!
    //   res.status(400).send({message:"don't valid!"});
    // }

    res.sendStatus(201);
});

app.get(
  '/:email',
  [
    param('email').isEmail().withMessage('이메일 입력해요').normalizeEmail(), validate
  ],
  (req, res, next)=>{
    
    res.send('🏕');
});

app.listen(8080);