import path from 'path';

// fs for filesystem to handle the files
const fs = require('fs');

// for deside the path of the json file 
const dataFilePath = path.join(process.cwd(), '/lib/db.json');

// to get the json value 
const getFile = () => {
    return JSON.parse(fs.readFileSync(dataFilePath));
}
const gettime = () => {
    return new Date();
}

// to save the object to the json file
const saveFile = (json) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(json))
}

const getTable = (tableName) => {
    let record = getFile();
    let table = record[tableName];
    delete table[0];
    return table;
}

const getTablevalues = (tableName) => {
    let record = getFile();
    let table = record[tableName];
    return table;
}

const saveTable = (tableName, table) => {
    let file = getFile();
    file[tableName] = table;
    saveFile(file)
}

const insert = (tableName, record) => {
    let table = getTablevalues(tableName);
    table[0].number += 1
    record.number = table[0].number
    record.updated = gettime();
    table[table[0].number] = record;
    saveTable(tableName, table)
}

const insertbynumber = (tableName, number, record) => {
    let table = getTablevalues(tableName);
    table[0].number += 1
    record.number = number
    record.updated = gettime();
    table[number] = record;
    saveTable(tableName, table)
}

const update = (tableName, number, record) => {
    let table = getTablevalues(tableName);
    record.number = number
    record.lastupdated = record.updated;
    record.updated = gettime();
    table[number] = record;

    saveTable(tableName, table)
}

const filter = (tableName, condition) => {
    let out = {}
    let table = getTable(tableName);
    if(table===undefined){
        return undefined;
    }
    // getting the keys from the table
    let records = Object.keys(table)
    // run filter for every filter form the website
    condition.split(',').forEach(item => {
        // getting filter condition based on the condition selecting the switch cases 
        condition = item.split(' ');
        switch (condition[1]) {
            case "=":
                records = records.filter(key => {
                    return table[key][condition[0]] == condition[2];
                })
                break;
            case "!=":
                records = records.filter(key => {
                    return table[key][condition[0]] != condition[2];
                })
                break;

            case "<=":
                records = records.filter(key => {
                    return table[key][condition[0]] <= condition[2];
                })
                break;
            case ">=":
                records = records.filter(key => {
                    return table[key][condition[0]] >= condition[2];
                })
                break;
            case ">":
                records = records.filter(key => {
                    return table[key][condition[0]] > condition[2];
                })
                break;
            case "<":
                records = records.filter(key => {
                    return table[key][condition[0]] < condition[2];
                })
                break;
            default:
                break;
        }
    })
    // using the filtered keys select the records to output
    records.forEach(items => {
        out[items] = table[items]
    })
    return out;
}

// call the file for use the function outside
const Db = {
    getTable,
    saveTable,
    insert,
    insertbynumber,
    update,
    filter
}

export default Db