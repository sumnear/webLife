function ajax(options) {
    options = options||{};
    options.type = options.type||'GET';
    options.data = options.data||{};
    options.dataType = options.dataType||'text';


    let xhr = new XMLHttpRequest();

    let arr = [];

    for (let name in options.data) {
        arr.push(`${name}=${data[name]}`);
    }
    let strData = arr.join('&');
    if (type == options.type) {
        xhr.open('post', url, true);
        xhr.setRequestHeader('content-type', options.dataType);
        xhr.send(strData);
    } else {
        xhr.open('post', url + '?' + strData, true);
        xhr.send();
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let data = xhr.responseText;
            switch (options.dataType) {
                case 'json':
                   if(window.JSON && JSON.parse){
                       data = JSON.parse(data);
                   }else{
                       data = eval('('+data+')');
                   }
                    break;
                case 'xml':
                    data =xhr.responseText;
                    break
            }


            options.success && options.success(data);
        } else {
            options.error && options.error();
            console.info('失败')
        }
    }
}