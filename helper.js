const {nanoid} = require('nanoid');



function shortner(aajao){
    const newid=nanoid(8);
    return newid;
}
module.exports = shortner;