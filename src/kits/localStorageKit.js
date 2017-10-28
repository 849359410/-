const key = 'buyGoodsCount';

//1.0储存方法
export function setItem(key) {
    var goodsObj = getItem();
    if (goodsObj[goodinfo.gid]) {
        goodsObj[goodinfo.gid] += goodsinfo.bcount;
    } else {
        goodsObj[goodinfo.gid] = goodsinfo.bcount;
    }
    localStorage.setItem(key, JSON.stringify(goodsObj));
}

//2.0获取方法
export function getItem() {
    var gstr = localStorage.getItem(key);
    var obj = JSON.parse(gStr);

    return obj;
}
//3.0删除方法
export function remoteItem(goodsid) {
    var goodsObj = getItem();
    delete goodsObj[goodsid];
    localStorage.setItem(key, JSON.stringify(goodsObj));
}