/**
 * [
    {
        id: 1,
        text: '节点1',
        parentId: 0 //这里用0表示为顶级节点
    },
    {
        id: 2,
        text: '节点1_1',
        parentId: 1 //通过这个字段来确定子父级
    }
    ...
]

转成
[
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id:2,
                text: '节点1_1',
                parentId:1
            }
        ]
    }
]
 */

const a = (arr) => {
  let tempMap = {};
  let treeData = [];
  arr?.forEach((element) => {
    tempMap[element.id] = element;
  });
};
const convertToMenu = (arr) => {
  const newArr = arr?.map((item) => {
    if (item.parentId == 0) {
      item.children = [];
    }
  });
  arr?.map((item) => {
    if (item.parentId) {
      newArr?.map((parent) => {
        if (parent.id == item.id) {
          parent.children.push(item);
        }
      });
    }
  });
};
