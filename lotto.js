
    function lottoNum () {
    let lotto = [];
    let i = 0;
    while (i < 6) {
    let n = Math.ceil(45*Math.random());
    if (!sameNum(n)) {
    lotto.push(n);
    i++;
  };
    }
    function sameNum(n) {
    for (var i = 0; i < lotto.length; i++) {
    if (n === lotto[i]) {
    return true;
    } else {
    return false;
      }
     }
    }
    lotto.sort(function(a,b){
        return a-b ;});
     alert(lotto);
    };
