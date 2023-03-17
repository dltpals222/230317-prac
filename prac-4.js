const paperOrderTwo = [];
const countTwo = 10;
const content = "examplt-";
const taghName = "div";


for (let i = 0; i < countTwo; i++){
  paperOrderTwo.push(content);
}

const mapping = paperOrderTwo.map(function(value, index){
  return `<div> ${value}${index+1} </div>`;
});

console.log(mapping);