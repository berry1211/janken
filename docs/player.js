const GU = 0;
const CHOKI = 1;
const PA = 2;


let matches = 0;
function action(opponent){
  matches = matches + 1;
  const remainder = matches % 3;
  const isEven = remainder == 0;
  console.log(`${matches} % 3 = ${remainder} : ${isEven}`);
  if(isEven){
    return CHOKI
  }
  return GU;
}