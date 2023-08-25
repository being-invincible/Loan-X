const customer = {
    number:0,
    name:"N/A",
    emailId:"N/A",
    phoneNumber:0,
    address:"N/A",
    IdProof:"N/A",
    idproofNumber:"N/A",
    updated:"N/A",
    lastupdated:"N/A",
 };
 const emi = {
    number:0,
    customer:0,
    scheme:0,
    loan:0,
    number:0,
    status:"N/A",
    totalAmount:0,
    amountToPay:0,
    balanceAmount:0,
    dueDate:"",
    updated:"N/A",
    lastupdated:"N/A",
 };
 const fundDetails = {
    number:0,
   totalFund:0,
   interest:0,
   principle:0,
   updated:"N/A",
    lastupdated:"N/A",
};
const loans = {
    number:0,
    name:"N/A",
    customer:0,
    scheme:0,
    amount:0,
    duration:0,
    updated:"N/A",
    lastupdated:"N/A",
 };
 const schemes = {
    number:0,
    name:"N/A",
    type:"N/A",
    percentage:0,
    updated:"N/A",
    lastupdated:"N/A",
 };
 const statements = {
    number:0,
    user:"N/A",
    customer:"N/A",
    loan:"N/A",
    emi:"N/A",
    amount:0,
    type:"N/A",
    updated:"N/A",
    lastupdated:"N/A",
 };
 
const Module={
    fundDetails,
    emi,
    customer,
    loans,
    schemes,
    statements 
 }
 export default Module
