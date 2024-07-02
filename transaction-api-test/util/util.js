function sanitizedData (data) {
return data.map(({id, date, Comments })=> ({id, date, Comments }))
}

function filterTransactions (transactions) {
    const filteredData =  transactions.filter((transaction) => {
            return transaction.status === 'COMPLETED' 
                || transaction.status === 'IN PROGRESS'
                    || transaction.status === 'REJECTED'
    })
   const sortedData = filteredData.sort((a, b) => a.date - b.date);
   return sortedData;
}

function formatDate(transactions){
    transactions =  transactions.map((transaction)=>{
        return {
            ...transaction,
            date: new Date(transaction.date).toLocaleDateString(),
            id: Number(transaction.id)
       };
    });
    return transactions;
}

function sortByDate(transactions) {

}




module.exports = {
    sanitizedData,
    filterTransactions,
    formatDate,
    sortByDate
}