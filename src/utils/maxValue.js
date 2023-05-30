//获取每个对象的最大值
export function objectMaxValue() {
  let list = [
    { a: 1, b: 4, c: 9, d: 0 },
    { c: 1, a: 3, b: 5 },
  ];

  const listKey = (list) => {
    //将对象里的每个key去重放入keyArrs中
    let keyArrs = [];
    list.forEach((k) => {
      keyArrs = [...new Set([...keyArrs, ...Object.keys(k)])];
    });

    //将listKey中的每个key匹配对应的值 存入keyObj对象中
    let keyObj = {};
    keyArrs.map((key) => {
      let arrKey = [];
      list.forEach((obj) => {
        obj[key] !== undefined && arrKey.push(obj[key]);
      });
      keyObj[key] = arrKey;
    });

    // 将listKey中的每个key的值取最大
    Object.keys(keyObj).map((key) => {
      if (keyObj[key].length > 1) keyObj[key].sort((a, b) => b - a);
      keyObj[key] = keyObj[key][0];
    });
    return keyObj;
  };

  console.log(listKey(list));
}
