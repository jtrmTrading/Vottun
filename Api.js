
const headersApi = new Headers();
let appKey = "u82kyNXg4HX--3SaWSE1Tg4TLUG6xggkyEAha0bIgdXNIBZjyrG-34FMSdXJp_dZ";

let apikey = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyY2poVEhUQ1M1NmtvSkN6M0FkUW1RVVBMZjMiLCJ0eXBlIjoiZXJwIiwiaWQiOiIiLCJ1c2VybmFtZSI6Imp0cm0udHJhZGluZ0BnbWFpbC5jb20iLCJjaWQiOiJjNjE3OTFkMS0xMDRjLTRmODEtYjQ5OS1iN2ZiNTA0NWQxYjgiLCJza3UiOlt7InIiOjExLCJzIjo4LCJlIjowfSx7InIiOjExLCJzIjo4MDAzLCJlIjowfSx7InIiOjExLCJzIjozLCJlIjowfSx7InIiOjExLCJzIjo4MDAxLCJlIjowfSx7InIiOjExLCJzIjo4MDA1LCJlIjowfSx7InIiOjExLCJzIjo4MDAyLCJlIjowfSx7InIiOjExLCJzIjo4MDEwLCJlIjowfV0sInB1YyI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCJ9.SIOqTSRH8Mx_Xzb11QfJBWJQU7oj3W222TsmQsZOp-BQxq3D4ZwF_i6L5QkOxwg7YuZM563AepuBj49t-QLDH4I22PHPtjkdrR0LpA1asSQay4icOYJiPFUfKj6k75ifhM3WCay72RocMEs3HxHgYHxlv8iDmmQmDcJavLZ2lVPMyWUojlAIfY2BOGQ2oAZ022ppmJrV5WIRqx9Cs6HWZjcoCmqzEYIxIB3bhKNR1co-sEi3XMrUQrRx3ySUbtClyCbRxdJY1U3J8peuT9U6V-OufyVtRJMH1_9w33awpNVGIyeQ30oNSUEkRja5FchjgDXyOQVaKV4x-xYrGw21nc1CF505dcTS-cpxKk7cBtP1Nj_lDn2lB_OS-vi0-2yBuiH7grVnCGcbKGlYwGezWT5Kk2Vyjud3jPjwmwPJ_wcGNtDKdA7nzhBlgi-McjDwJLYo-6YPGvJkEa95ai1jyZHcPdiL8K1uw82ud6bHR0dGXN8eNsj5oPxw1rztv71S9uQnhUKploQefsLJ12u4uzu9KtSs_3C5PZpX9-J6wieYo1o1O_rMipTGFmhq7WtFTWZiE3bEUm49ZaVce7swpYFv-0vSPkecDRYhMTnSYBYcWmz3y7DDOvS8aTASSEbiDC_mgtPGF72B5CnpOnOtr_Bc3Tdfba38NVpTwaLAmV4";
let api = "https://api.vottun.tech/erc/v1/erc721/tokenUri";
let conAddress = "0x06ecD6557c0EDD1bE44810304A995FbB145314cB";

headersApi.append("X-application-vkn", appKey);
headersApi.append("Content-Type", "application/json");
headersApi.append("Authorization", apikey);

const rawApi = JSON.stringify({
  "contractAddress": conAddress,
  "network": 80001,
  "id": 1
});

const apiRequest = {
  method: "POST",
  headers: headersApi,
  body: rawApi,
  redirect: "follow"
};

    fetch(api, apiRequest)
        .then(response => response.json()) 
        .then(result => {
            const imgApi = document.createElement('img');
            imgApi.src = result.uri;
            document.getElementById('Result').innerHTML = ""; 
            document.getElementById('Result').appendChild(imgApi);
        }).catch(error => console.log('error', error));
