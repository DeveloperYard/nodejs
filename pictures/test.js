const path = require('path');
const fs = require('fs');

//console.log(path.__dirname);
const objPath = path.parse(__dirname).dir;
const resPath = path.resolve(objPath, 'pictures', 'test');

// 작업을 할 경로 지정, 작업할 경로는 projects/pictures/test

// 파일을 하나하나 읽어들임. 이 때 확장자로 어디 폴더로 갈 지 결정짓는데, 이 떄 jpg의 경우는 편집한 것과 하지 않은 것이 둘 다 존재하므로 고려해서 코딩할 것

fs.readdir(resPath, (err, files)=>{
  files.forEach(file => {
    if(path.extname(file) === '.mp4' || path.extname(file)==='.mov'){
      if(!fs.existsSync(resPath+'/video')) {
        fs.mkdirSync(resPath+'/video')
      }
      //console.log(path.parse(file).base + ' is moved to video');
      moveFile('video', file);
    }
    else if(path.extname(file) === '.png' || path.extname(file) === '.aae'){
      if(!fs.existsSync(resPath+'/captured')) {
        fs.mkdirSync(resPath+'/captured')
      }
      //console.log(path.parse(file).base + ' is moved to captured');
      moveFile('captured', file);
    }
    else if(path.extname(file) === '.jpg'){
      let regExp = /IMG_E/;
      
      if(!regExp.test(file)){
        if(!fs.existsSync(resPath+'/duplicated')) {
          fs.mkdirSync(resPath+'/duplicated')
        }
        //console.log(path.parse(file).base + ' is moved to duplicated');
        moveFile('duplicated', file);
      }
    }
  })
});

function moveFile(dir, file){
  const oldPath = path.join(resPath, file);
  const newPath = path.join(resPath, dir, path.parse(file).base);
  // 디렉터리와 파일 이름을 조합해서 fs.promises.rename을 사용해줌
  fs.rename(oldPath, newPath, (err)=>{
    if(err) {console.log(err);}

    console.log(path.parse(file).base, 'is moved to', dir)
  })
}
