const { initializeApp } = require("firebase-admin/app");
const { addRecord } = require('./addRecord');
const { onNewRecordCreated } = require('./triggers/onNewRecord/index');

initializeApp();

exports.addRecord = addRecord;
exports.onNewRecordCreated = onNewRecordCreated;
