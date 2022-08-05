function deckCard(x, y) {
  let deckCard = [];
  let a_number = 10;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      deckCard.push({ suits: i, ranks: j });
    }
  }
  let n = 100000;
  let count = 0;
  for (let i = 0; i < 100000; i++) {
    deckCard.sort((a, b) => 0.5 - Math.random());
    let a = 0;
    for (let j = 0; j < x; j++) {
      if (deckCard[j].suits == 0) {
        a++;
      }
    }

    if (a >= y) {
      count++;
    }
  }
  console.log((count / n).toFixed(2).replace(/(\.0+|0+)$/, ""));
}

function main(input) {
  let ipt = input.split(" ");

  let x = ipt[0];
  let y = ipt[1];
  // console.log((Math.round(count / n) *100) /100);
  deckCard(parseInt(x), parseInt(y));
}
main("20 14");