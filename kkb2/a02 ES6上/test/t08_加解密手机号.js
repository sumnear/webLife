
const encryptionNumA = (num) => {
    let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']; //changeNum[0] = "零"
        let strArr = num.toString().split("").reverse();
        let newNum = "";
        for (var i = 0; i < strArr.length; i++) {
            newNum = (i == 0 && strArr[i] == 0 ? "" : (i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? "" : changeNum[strArr[i]] )) + newNum;
        }
        return newNum;
}
const decryptNumA = (str) =>{
    let changeNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let changeNum2 = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    let strArr = str.split("");
    let getIndex = tempChar =>{
        let offset ;
        for(let i=0 ;i<changeNum2.length;i++) {
            if(tempChar == changeNum2[i]){
                offset = i;
                break;
            }
        }
        return offset;
    }
    return strArr.reduce((tmp,item,index)=>{
        if(index==1){
            tmp =changeNum[getIndex(strArr[0])];
        }
        return tmp+changeNum[getIndex(item)];
    });
    }

const encryptionNumB = (num) => {
    let changeNum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g']; //changeNum[0] = "零"
    let strArr = num.toString().split("").reverse();
    let newNum = "";
    for (var i = 0; i < strArr.length; i++) {
        newNum = (i == 0 && strArr[i] == 0 ? "" : (i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? "" : changeNum[strArr[i]] )) + newNum;
    }
    return newNum;
}
const decryptNumB = (str) =>{
    let changeNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let changeNum2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g'];
    let strArr = str.split("");
    let getIndex = tempChar =>{
        let offset ;
        for(let i=0 ;i<changeNum2.length;i++) {
            if(tempChar == changeNum2[i]){
                offset = i;
                break;
            }
        }
        return offset;
    }
    return strArr.reduce((tmp,item,index)=>{
        if(index==1){
            tmp =changeNum[getIndex(strArr[0])];
        }
        return tmp+changeNum[getIndex(item)];
    });
}
console.info(encryptionNumA(13306191795));
console.info(decryptNumA("一三三零六一九一七九五"));
console.info("===============================");
console.info(encryptionNumB(13306191795));
console.info(decryptNumB("bddagbgbhgf"));