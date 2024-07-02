const transactionData = require('../data/data.json');
const util = require('../util/util')


async function getAllTransactions() {
    const filterData = util.filterTransactions(transactionData.response)
    const sanitizedData = util.sanitizedData(filterData)
                            .map(obj => ({...obj, actions: 'View Bill'}));

    return util.formatDate(sanitizedData);    
}
module.exports =  {
 getAllTransactions
}