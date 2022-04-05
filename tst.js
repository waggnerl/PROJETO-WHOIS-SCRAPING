

{/*sites.map(e=>
    valor = e,
    valorUpdated = valor.replace('https://',''),
    hosts = [valorUpdated],
    hosts.forEach(function (host) {
    ping.promise.probe(host)
        .then(function (res) {
          e = res.numeric_host
        });        
    }),
    console.log(ip),
    ips.push(ip)
  )*/}
{/*}
  
    console.log(ips)
 //*/}

 //await page2.goto(`https://www.ipvoid.com/ip-to-asn/`)  
 //   await page2.type('.form-control', )
 //   await page2.screenshot({ path: 'example.png' });

 {/*}
  for (let index = 0; index < sites.length; index++) {
    valor = sites[index]
    valorUpdated = valor.replace('https://','')
    url = valorUpdated

    dns.resolve4(url, (err, addresses) => {
      if (err) {
        console.err(err);
        return;
      }      
      e.push(JSON.stringify(addresses[0]))})
  }
*/}

//let tst = sites.map(el=>{
//  
//})
{/*
$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=<semfronteiras.net.br>', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

*/}
//let tst = arrTst.map(url=>{
//  dns.resolve4(url, (err, addresses) => {
//    if (err) {
//      return;
//    }      
//    url = JSON.stringify(addresses[0])  
//  })
//    
//})

{/*sites.map(e=>
    valor = e,
    valorUpdated = valor.replace('https://',''),
    hosts = [valorUpdated],
    hosts.forEach(function (host) {
    ping.promise.probe(host)
        .then(function (res) {
          e = res.numeric_host
        });        
    }),
    console.log(ip),
    ips.push(ip)
  )*/}

    {/*htmlSite = await page.evaluate(() => {
    return {
     siteProvedor : document.querySelector('.iUh30.tjvcx').innerHTML}
  });
sites.push(htmlSite.siteProvedor)*/}
})

{/*}
  for (let index = 0; index < arrTst.length; index++) {
    arr[index] = arr[index].replace(' ','')
    if (arr[index] === 'Lei Telecom'){arr[index] = 'Lci Telecom'}
    empresas.push(arr[index])
    arr[index] = arr[index].replace(' ','+')
    let valor = arr[index] 
    if(index === 0){valor = `${arr[index]}+provedor+de+internet+acre`}
     if (index === 10) { valor = `${arr[index]}+provedor+de+internet+mato+grosso` }
    await page.goto(`https://www.google.com/search?q=${valor}&rlz=1C1GCEU_pt-BRBR999BR999&oq=vivo&aqs=chrome..69i57j46i199i291i433i512j0i433i512l2j0i131i433i512j0i433i512j69i61l2.574j0j7&sourceid=chrome&ie=UTF-8`);
    htmlSite = await page.evaluate(() => {
      return {
       siteProvedor : document.querySelector('.iUh30.tjvcx').innerHTML}
    });
   sites.push(htmlSite.siteProvedor)
  }

console.log(tst)
    await page.screenshot({ path: 'example.png' });

*/}

{/*}
await page.goto(`https://ipinfo.io/${htmlSite.ip}`);
    await page.screenshot({ path: 'example.png' });

    asn = await page.evaluate(() => {
      return {
       asnCode : document.querySelector('.table.table-striped.table-borderless.table-sm.two-column-table.mb-0 a').innerHTML,
       company: document.querySelector('tbody :nth-child(6)'),
       email: document.querySelector('tbody :nth-child(9) :nth-child(2) a').innerHTML,
       city: document.querySelector('table.table-borderless.table-xs.geo-table tbody :nth-child(1) :nth-child(2)').innerHTML,
       state: document.querySelector('table.table-borderless.table-xs.geo-table tbody :nth-child(2) :nth-child(2)').innerHTML,
       country: document.querySelector('table.table-borderless.table-xs.geo-table tbody :nth-child(3) :nth-child(2) a').innerHTML,
       Postal_Code: document.querySelector('table.table-borderless.table-xs.geo-table tbody :nth-child(4) :nth-child(2)').innerHTML,       
      }
    });''
    ips.push(asn)

  */}