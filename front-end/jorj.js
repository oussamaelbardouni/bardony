 var i =0 ; var t ; var o ; var y ; var tt ,tj ,fr ,tp ,q , kl ,xx = 0; let data; let tmp ;
 // other id s  //
document.getElementById('finaly');
document.getElementById('pass');
document.getElementById('save');
document.getElementById('tb');
document.getElementById('vo');


//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//



while(i !=7) { i += 1; 
document.getElementById('a'+i).onkeyup = function put () { point() ; moadal()}
document.getElementById('b'+i).onkeyup = function put () { point() ; moadal()}
document.getElementById('c'+i).onkeyup = function put () { point() ; moadal()}
document.getElementById('d'+i).onkeyup = function put () { point() ; moadal()}
document.getElementById('e'+i).onkeyup = function put () { point() ; moadal()}
document.getElementById('f'+i).onkeyup = function put () { point() ; moadal()}
document.getElementById('g'+i).onkeyup = function put () { point() ; moadal()}
document.getElementById('i'+i).onkeyup = function put () { point() ; moadal()}
document.getElementById('j'+i).onkeyup = function put () { point() ; moadal()}
document.getElementById('k'+i).onkeyup = function put () { point() ; moadal()}
document.getElementById('l'+i).onkeyup = function put () { point() ; moadal()}
};
function point() {
    //al moidaba//
    a7.innerHTML = +a1.value
    //ijtima3iat//
    t= ((+b1.value + +b2.value)/2)*3
    b7.innerHTML =(t + +b5.value)/4
    //tarbia badadania//
    c7.innerHTML = (+c1.value + +c2.value + +c3.value)/3
    //tarbia lislamia //
    o = ((+d1.value + +d2.value)/2) * 3
    d7.innerHTML = ((o + +d5.value )/4) 
    //takafa el fania//
    e7.innerHTML = (+e1.value + +e2.value)/2
    //riadiat//
    f7.innerHTML = (+f1.value + +f2.value)/2
    //flsafa//
    y = ( ((+g1.value + +g2.value)/2)*3 )
    g7.innerHTML = ((y + +g5.value)/4)
    //english//
      tt = ((((+i1.value + +i2.value)/2) * 6)+ (+i5.value * 4))/10
      i7.innerHTML = (tt)
    //arabic//
    tj = ( ((+j1.value + +j2.value)/2)*3 )
    j7.innerHTML = ((tj + +j5.value)/4)
    //frenceas//
    k7.innerHTML = (+k1.value + +k2.value + +k3.value + +k4.value + +k5.value)/5
    //sciens//
    tp = (((+l1.value + +l2.value)/2)*3)
    l7.innerHTML = ((tp + +l5.value)/4)
};
// moadal //
function moadal() {
    q = +a6.value + +b6.value + +c6.value + +d6.value + +e6.value + +f6.value + +g6.value + +i6.value + +j6.value + +k6.value + +l6.value
    finaly.innerHTML = (((+a7.innerHTML * +a6.value)+(+b7.innerHTML * +b6.value)+(+c7.innerHTML * +c6.value)+(+d7.innerHTML * +d6.value)+(+e7.innerHTML * +e6.value)+(+f7.innerHTML * +f6.value)+(+g7.innerHTML * +g6.value)+(+i7.innerHTML * +i6.value)+(+j7.innerHTML * +j6.value) + (+k7.innerHTML * +k6.value)+(+l7.innerHTML * +l6.value)  )/q)
};
//.........c...............create operation............................//

let tab = '' ;
if ( localStorage.sr != null) {data = JSON.parse(localStorage.sr)} else {data = []}


save.onclick = function jj() {
  
  if (pass.value == '') {
    alert('inter pass word first')
  } else {
   var jt = window.prompt('inter user name')
   if (jt == '') {
    alert('saving field')
   } else {

    let jrr = {
      as1 : a1.value , as6 : a6.value , as7 : a7.innerHTML,
      bs1 : b1.value , bs2 : b2.value , bs5 : b5.value , bs6 : b6.value , bs7 : b7.innerHTML ,
      cs1 : c1.value , cs2 : c2.value , cs3 : c3.value , cs6 : c6.value , cs7 : c7.innerHTML ,
      ds1 : d1.value , ds2 : d2.value , ds5 : d5.value , ds6 : d6.value , ds7 : d7.innerHTML ,
      es1 : e1.value , es2 : e2.value , es6 : e6.value , es7 : e7.innerHTML ,
      fs1 : f1.value , fs2 : f2.value , fs6 : f6.value , fs7 : f7.innerHTML ,
      gs1 : g1.value , gs2 : g2.value , gs5 : g5.value , gs6 : g6.value , gs7 : g7.innerHTML ,
      is1 : i1.value , is2 : i2.value , is5 : i5.value , is6 : i6.value , is7 : i7.innerHTML ,
      js1 : j1.value , js2 : j2.value , js5 : j5.value , js6 : j6.value , js7 : j7.innerHTML ,
      ks1 : k1.value , ks2 : k2.value , ks3 : k3.value , ks4 : k4.value , ks5 : k5.value , ks6 : k6.value , ks7 : k7.innerHTML ,
      ls1 : l1.value , ls2 : l2.value , ls5 : l5.value , ls6 : l6.value , ls7 : l7.innerHTML ,
      pt : finaly.innerHTML ,
      nam : jt ,
      password : pass.value ,
    };
    if (save.innerHTML === 'save project'){
      moadal ()
    data.push(jrr);
    localStorage.setItem('sr', JSON.stringify(data));
    red ()
    }else {
      data[tmp] = jrr ;
      console.log(data[tmp]);
      localStorage.sr = JSON.stringify(data);
      red ();
      save.innerHTML = 'save project';
    }
  }
  }
}
//......R.................table.....................//

  function red () {
    tab = '' ;
  for (let m = 0; m < data.length ; m++) {
    tab += ' <tr> <td class="saving">'+ data[m].nam +'</td> <td class="saving">'+ data[m].pt +'</td> <td onclick="ff('+ m +')"class="saving" id= '+ m +'"><button class="rd" id="">update</button></td><td class="saving"><button onclick="del('+ m +')" class="rd">delete</button></td></tr> '
     tb.innerHTML = tab ;
  }
}
 red()

//.....U.................ubdate.....................//


function ff(m) {
  a1.value = data[m].as1 ; a6.value = data[m].as6 ; a7.value = data[m].as7 ;
  b1.value = data[m].bs1 ; b2.value = data[m].bs2 ; b5.value = data[m].bs5 ; b6.value = data[m].bs6 ; b7.value = data[m].bs7 ;
  c1.value = data[m].cs1 ; c2.value = data[m].cs2 ; c3.value = data[m].cs3 ; c6.value = data[m].cs6 ; c7.value = data[m].cs7 ;
  d1.value = data[m].ds1 ; d2.value = data[m].ds2 ; d5.value = data[m].ds5 ; d6.value = data[m].ds6 ; d7.value = data[m].ds7 ;
  e1.value = data[m].es1 ; e2.value = data[m].es2 ; e6.value = data[m].es6 ; e7.innerHTML = data[m].es7 ;
  f1.value = data[m].fs1 ; f2.value = data[m].fs2 ; f6.value = data[m].fs6 ; f7.innerHTML = data[m].fs7 ;
  g1.value = data[m].gs1 ; g2.value = data[m].gs2 ; g5.value = data[m].gs5 ; g6.value = data[m].gs6 ; g7.innerHTML = data[m].gs7 ;
  i1.value = data[m].is1 ; i2.value = data[m].is2 ; i5.value = data[m].is5 ; i6.value = data[m].is6 ; i7.innerHTML = data[m].is7 ;
  j1.value = data[m].js1 ; j2.value = data[m].js2 ; j5.value = data[m].js5 ; j6.value = data[m].js6 ; j7.innerHTML = data[m].js7 ;
  k1.value = data[m].ks1 ; k2.value = data[m].ks2 ; k3.value = data[m].ks3 ; k4.value = data[m].ks4 ; k5.value = data[m].ks5 ; k6.value = data[m].ks6 ; k7.innerHTML = data[m].ks7 ;
  l1.value = data[m].ls1 ; l2.value = data[m].ls2 ; l5.value = data[m].ls5 ; l6.value = data[m].ls6 ; l7.innerHTML = data[m].ls7 ;
  pass. value = data[m].password
  moadal ()
  save.innerHTML = 'update'
  tmp = m

};
//............D.........delet.........................//
function del(m) {
  data.splice(m,1);
  localStorage.sr = JSON.stringify(data);
  red () ;
  te();
};
function tcl () {
  tab = '';
 // localStorage.clear()
  red()
}
function te () {red (); red();}
vo.onclick = function empty () {
  for (let h = 1; h < 7; h++) {
    document.getElementById('a' + h).value = ''
    document.getElementById('b' + h).value = ''
    document.getElementById('c' + h).value = ''
    document.getElementById('d' + h).value = ''
    document.getElementById('e' + h).value = ''
    document.getElementById('f' + h).value = ''
    document.getElementById('g' + h).value = ''
    document.getElementById('i' + h).value = ''
    document.getElementById('j' + h).value = ''
    document.getElementById('k' + h).value = ''
    document.getElementById('l' + h).value = ''
  }
    finaly.innerHTML = ''
};

//...........S...........search script..............//
function print(value) {
  if (value != '') {
  for (let m = 0; m < data.length; m++) {
  if (data[m].nam.includes(value)) {

    tab = ''
    tab += ' <tr> <td class="saving">'+ data[m].nam +'</td> <td class="saving">'+ data[m].pt +'</td> <td onclick="ff('+ m +')"class="saving" id= '+ m +'"><button class="rd" id="">update</button></td><td class="saving"><button onclick="del('+ m +')" class="rd">delete</button></td></tr> '
    tb.innerHTML = tab ;
  };
  };
}else{red()};
};







