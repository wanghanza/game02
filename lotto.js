
    function lottoNum () {


    let lotto = [];
    let i = 0;
    while (i < 6) {
    // let n = Math.ceil(45*Math.random());
    let n = weightRandom();
    if (!sameNum(n)) {
    lotto.push(n);
    i++;
    };
  } ;
    function sameNum(n) {
    for (var i = 0; i < lotto.length; i++) {
    if (n === lotto[i]) {
    var b = 1;
    } else {
    var c = 1;
      }
     }
    if (b > 0) {return true;}
    else {return false;}
    }

    function weightRandom () {
      let primitive_lotto = [];
      for (var i=1; i<=122 ; i++) { primitive_lotto.push(2) };
      for (var i=1; i<=129 ; i++) { primitive_lotto.push(1) };
      for (var i=1; i<=123 ; i++) { primitive_lotto.push(3) };
      for (var i=1; i<=124 ; i++) { primitive_lotto.push(4) };
      for (var i=1; i<=128 ; i++) { primitive_lotto.push(5) };
      for (var i=1; i<=117 ; i++) { primitive_lotto.push(6) };
      for (var i=1; i<=123 ; i++) { primitive_lotto.push(7) };
      for (var i=1; i<=124 ; i++) { primitive_lotto.push(8) };
      for (var i=1; i<=94 ; i++) { primitive_lotto.push(9) };
      for (var i=1; i<=126 ; i++) { primitive_lotto.push(10) };
      for (var i=1; i<=126 ; i++) { primitive_lotto.push(11) };
      for (var i=1; i<=132 ; i++) { primitive_lotto.push(12) };
      for (var i=1; i<=130 ; i++) { primitive_lotto.push(13) };
      for (var i=1; i<=131 ; i++) { primitive_lotto.push(14) };
      for (var i=1; i<=122 ; i++) { primitive_lotto.push(15) };
      for (var i=1; i<=121 ; i++) { primitive_lotto.push(16) };
      for (var i=1; i<=135 ; i++) { primitive_lotto.push(17) };
      for (var i=1; i<=135 ; i++) { primitive_lotto.push(18) };
      for (var i=1; i<=135 ; i++) { primitive_lotto.push(19) };
      for (var i=1; i<=129 ; i++) { primitive_lotto.push(20) };
      for (var i=1; i<=124 ; i++) { primitive_lotto.push(21) };
      for (var i=1; i<=104 ; i++) { primitive_lotto.push(22) };
      for (var i=1; i<=110 ; i++) { primitive_lotto.push(23) };
      for (var i=1; i<=123 ; i++) { primitive_lotto.push(24) };
      for (var i=1; i<=119 ; i++) { primitive_lotto.push(25) };
      for (var i=1; i<=125 ; i++) { primitive_lotto.push(26) };
      for (var i=1; i<=137 ; i++) { primitive_lotto.push(27) };
      for (var i=1; i<=115 ; i++) { primitive_lotto.push(28) };
      for (var i=1; i<=111 ; i++) { primitive_lotto.push(29) };
      for (var i=1; i<=111 ; i++) { primitive_lotto.push(30) };
      for (var i=1; i<=125 ; i++) { primitive_lotto.push(31) };
      for (var i=1; i<=108 ; i++) { primitive_lotto.push(32) };
      for (var i=1; i<=129 ; i++) { primitive_lotto.push(33) };
      for (var i=1; i<=146 ; i++) { primitive_lotto.push(34) };
      for (var i=1; i<=113 ; i++) { primitive_lotto.push(35) };
      for (var i=1; i<=121 ; i++) { primitive_lotto.push(36) };
      for (var i=1; i<=127 ; i++) { primitive_lotto.push(37) };
      for (var i=1; i<=123 ; i++) { primitive_lotto.push(38) };
      for (var i=1; i<=122 ; i++) { primitive_lotto.push(44) };
      for (var i=1; i<=132 ; i++) { primitive_lotto.push(39) };
      for (var i=1; i<=132 ; i++) { primitive_lotto.push(40) };
      for (var i=1; i<=112 ; i++) { primitive_lotto.push(41) };
      for (var i=1; i<=121 ; i++) { primitive_lotto.push(42) };
      for (var i=1; i<=137 ; i++) { primitive_lotto.push(43) };
      for (var i=1; i<=130 ; i++) { primitive_lotto.push(45) };


    let j = Math.ceil(5556*Math.random());

    return primitive_lotto[j];

    };

    let sum = 0;
    for (i = 0; i<6; i++) {
      sum+=lotto[i]
    } ;
    if (sum < 87 || sum > 189) {
      lottoNum();
    };


    lotto.sort(function(a,b){
        return a-b ;});
        alert(lotto);

    };
