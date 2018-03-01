let exportHtmlToExcel = ( html , name ) => {
  //let header = '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">' + html,
  //blob = new Blob([header], {type: "data:application/vnd.ms-excel;charset=UTF-8"}),
  // url = URL.createObjectURL( blob );
  let uri = 'data:application/vnd.ms-excel;base64,',
      template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\
      <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><style> td {mso-number-format:\\@ } </style></head><body>'+ html +'</body></html>',
      base64 = s => window.btoa(unescape(encodeURIComponent(s))) ,
      url = uri + base64( template );
  saveUrl( url , name );
}

let saveUrl = ( html , name = 'download' ) => {
  let a = document.createElement('a');
  a.href = html ;
  a.download = name ;
  a.click() ;
}

let getDateString = ( date = new Date() ) => {
  let dateString = date.toLocaleDateString( 'ja', { year: 'numeric', month: '2-digit', day: '2-digit' } );
  return dateString.replace(/\//g, '');
  // Expect 20180201
}

let exportHtmlToExcel = ( html , name ) => {
    var header = '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">' + html;
    var blob = new Blob([header], {
        type: "data:application/vnd.ms-excel;charset=UTF-8"});
    saveAs(blob, "dddd.xls");
}
