//My next quiz
let readLineSync=require('readline-sync');
let userName=readLineSync.question('What is your name?');
console.log('Here is a game for you',userName);
let question=[{
  q:"Who is Rittick's favourite person in Family?\na.Mom\nb.dad\nc.sis\nd.grand maa",
  ans:"Mom"
},{
  q:"Who is Rittick's best friend?\na.Paulami\nb.Pratanu\nc.Rimita\nd.Prithiraj",
  ans:"Paulami"
},{
  q:"Who is Rittick's fav SuperHero anime Character?\na.Naruto\nb.Sasuke\nc.Kakashi\nd.All of them",
  ans:"All of them"
}];
let score=0;
function quiz(question,answer){
  let userAns=readLineSync.question(question);
  if(userAns==answer)
  {
    console.log("Yoy are right!");
    score++;
  }
  else{
    console.log("Wrong ans!");
    score--;
  }
console.log("Total Score is:",score);  
}
for(let i=0;i<question.length;i++){
  quiz(question[i].q,question[i].ans);
}