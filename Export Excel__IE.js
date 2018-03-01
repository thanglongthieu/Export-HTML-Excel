function exportHtmlToExcel( html , name ){
        let uri = 'data:application/vnd.ms-excel;base64,',
        template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>'
        +'<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><style> td {mso-number-format:\\@ } </style></head><body>'+ html +'</body></html>';
        saveUrl( uri + window.btoa(unescape(encodeURIComponent( template ))) , name );
}

function saveUrl( html , name ){
	let a = document.createElement('a');
	a.href = html ;
	a.download = name || 'download';
	a.click() ;
}

function getDateString( date ){
	let dateString = ( date || new Date() ).toLocaleDateString( 'ja', { year: 'numeric', month: '2-digit', day: '2-digit' } );
	return dateString.replace(/\//g, '');
	// Expect 20180201
}
