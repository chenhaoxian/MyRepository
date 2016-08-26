/**
 * Created by LIAV2 on 8/25/2016.
 */
const fs = require('fs')

exports.saveImage = function (fileName, filePath) {
    var out1 = fs.createWriteStream("D:/MerchantUploadFiles/"+fileName);
    var in1 = fs.createReadStream(filePath);
    in1.pipe(out1);
    fs.unlink(filePath, function(args) {});
}

// exports.saveFoodImg = function (fileName, filePath, mTel) {
//     var out1 = fs.createWriteStream("D:/MerchantUploadFiles/"+mTel+"/"+fileName);
//     var in1 = fs.createReadStream(filePath);
//     in1.pipe(out1);
//     fs.unlink(filePath, function(args) {});
// }