var url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10';

// 封装一个get请求的方法
function getJSON(url) {
    return new Promise(function(resolve, reject) {
        var XHR = new XMLHttpRequest();
        XHR.open('GET', url, true);
        XHR.send();

        XHR.onreadystatechange = function() {
            if (XHR.readyState == 4) {
                if (XHR.status == 200) {
                    try {
                        var response = JSON.parse(XHR.responseText);
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error(XHR.statusText));
                }
            }
        }
    })
}

getJSON(url).then(resp => console.log(resp));

var url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10';
var url1 = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-03-26/2017-06-10';


//Promise.all同时解决后执行
function renderAll() {
    return Promise.all([getJSON(url), getJSON(url1)]);
}

renderAll().then(function(value) {
    // 建议大家在浏览器中看看这里的value值
    console.log(value);
})

/**Promise.race解决一个后执行**/
function renderRace() {
    return Promise.race([getJSON(url), getJSON(url1)]);
}

renderRace().then(function(value) {
    console.log(value);
})

function fn1 () {
  console.log('Function 1')
}

// function fn2 (res) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Function 2')
//       resolve(res)
//     }, 500)
//   })
// }

// function fn3 () {
//   console.log('Function 3')
// }

// async function asyncFunArr () {
//   fn1()
//   await fn2(11)
//   fn3()
// }

// asyncFunArr()
// fn2(111).then(res=>{
//     console.log(typeof(res))
// })