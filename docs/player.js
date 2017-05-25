const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;

function countup(){
  matches = matches + 1;
}

// チョキ大好きマンに対するアクション
function actionAgainstChokiLover(){
  return GU;
}

// 表か裏かマンに対するアクション
function actionAgainstOmoteUra(){
  const isEven = matches % 2 == 0;
  let result = PA;
  if(isEven){
    result = GU;
  }
  return result;
}

// 帰ってきた表か裏かマンに対するアクション
function actionAgainstOmoteUra2(){
  const isEven = matches % 3 == 0;
  let result = GU;
  if(isEven){
    result = CHOKI;
  }
  return result;
}

// 順番に出していくマンに対するアクション
function actionAgainstJunban(){
  const isEven = matches % 3 == 0;
  let a = matches % 3 == 1;
  if(isEven){
    result = CHOKI;
  } else if(a){
    result = PA;
  } else{
    result = GU;
  }
  return result;
}

/*
チョキ大好きマン：fighter::choki-lover
表か裏かマン：fighter::odd-even
帰ってきた表か裏かマン：fighter::on-third
順番に出していくマン：fighter::rotation
*/

function action(oppornent){
  console.log(oppornent);
  let result = GU;
  countup();
  if(oppornent == "fighter::choki-lover"){
    result = actionAgainstChokiLover();
  } else if(oppornent == "fighter::odd-even"){
    result = actionAgainstOmoteUra();
  } else if(oppornent == "fighter::on-third"){
    result = actionAgainstOmoteUra2();
  } else {
    result = actionAgainstJunban();
  }
  return result;
}