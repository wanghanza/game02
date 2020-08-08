var e = 0; f = 0 ; g = 0;
function game(){
    var c = prompt('몇 판 할래?');
     for (var d = 0; d < c; d = d +1)
      {
       var a = prompt('안 내면 진거, 가위~바위~보!');
      while ((a !== '가위') && (a !=='바위') && ( a !=='보'))
        { alert('단디해라.. 니~') ;
        a = prompt('다시 쓰바~!');
        }

        b = Math.round(3*Math.random());
         if (b == 1)
          {alert('가위!');
           if (a === '가위')
              {alert('비겼네~씁쓸하구마이~') ; f = f + 1;
            } else if (a === '바위' ) {alert('유~ 윈! 축하해 축하해~'); e = e + 1;
          } else {alert('바보야~! 내가 이겼당~ 히히'); g = g + 1; }

          } else if (b == 2) {alert('바위!');
                 if (a == '가위')
                     {alert('내가 이겼당! 푸하하!') ; g = g + 1;
                } else if (a == '바위')
                            {alert('비겼네.. 줸당..') ; f = f + 1;
                } else {alert('이런.. 축하한당 뭐..'); e = e + 1; }
          } else {alert('보!');
                 if (a == '가위') {alert('너는 천재야! 축하해~') ; e = e +1 ;
               } else if (a == '바위'){alert('푸하하 바부팅이! 내가 이겼다~!'); g = g + 1;
              } else {alert('쩝 비겼구만...'); f = f + 1;}
          }

       }
     }
 function result(){
    alert('너가'+' '+e+'번 이기고'+' '+g+'번 졌네~'+f+'번 비기긴 했어~');
    e = 0; g = 0 ; f = 0;
  }
