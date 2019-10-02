function ajax(url,type='get',data = {},success,error) {
    let xhr = new XMLHttpRequest();

    let arr = [];

    for(let name in data){
        arr.push(`${name}=${data[name]}`);
    }
    let strData = arr.join('&');
    if(type=='post'){
        xhr.open('post', url, true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencode');
        xhr.send(strData);
    }else{
        xhr.open('post', url+'?'+strData, true);
        xhr.send();
    }
    xmlhttp.onreadystatechange = function() {
        // alert(xmlhttp.readyState);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            success && success(xhr.responseText);
            // alert(xmlhttp.responseText)
        }else{
            error&&error();
            console.info('失败')
        }
    }
}