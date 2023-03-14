/**
 * 享元树内部特点类
 */
class TreeType { 
  name: string;
  constructor(name) {
    this.name = name
  }
}

/**
 * 树外部特点类
 */
class Tree { 
  treeType: TreeType
  x: number
  y: number
  constructor(x, y, treeType) {
    this.x = x;
    this.y = y;
    this.treeType = treeType
  }
}


type TTreeTypeMap = {
  [key: string]: TreeType;
}

/**
 * 树类型工厂，复用树类型
 */
class FactoryTreeType { 
  treeTypeMap: TTreeTypeMap;
  getTreeType(treeTypeName) { 
    return this.treeTypeMap[treeTypeName] ?? new TreeType(treeTypeName)
  }
}


/**
 * 创建一片森林
 */
let treeList: Array<Tree> = []
for (let i = 0; i < 20; i++) { 
  let _tree = new Tree(i, 20 - i, Math.random() > 0.5 ? 'yang' : 'song')
  treeList.push(_tree)
}

// 以第一颗树为例
let a = treeList[0]
for (let j = 1; j < treeList.length; j++) { 
  if (a.treeType === treeList[j].treeType) { 
    console.log(`第${j}颗树和第一棵树同时复用了${a.treeType}树类型`)
  }
}

