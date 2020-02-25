const data = require('./data.js');
const { trash, binColorMap, trashBins } = data;

function findBinFor(material, binColorMap) {
  return binColorMap[material];
}

function addItemToBin(item, bin) {
  bin.push(item.name);
}

function sortTrash(trash, binColorMap, trashBins) {
  trash.forEach(item => {
    const binColor = findBinFor(item.material, binColorMap);
    addItemToBin(item, trashBins[binColor]);
  })
}

function showTrash(trashBins) {
  console.log(trashBins);
}

sortTrash(trash, binColorMap, trashBins);
showTrash(trashBins);