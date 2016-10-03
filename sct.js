const ots =               "<";
const cts =               "</";
const gte =               ">";

const ptn =               "html";
const htn =               "head";
const btn =               "body";

const sop =               ots + ptn + gte;
const soh =               ots + htn + gte;
const sob =               ots + btn + gte;

const eop =               cts + ptn + gte;
const eoh =               cts + htn + gte;
const eob =               cts + btn + gte;

const utn =               "OK";
module.exports = {
	ots: ots,
	cts: cts,
	gte: gte,
	
	ptn: ptn,
	htn: htn,
	btn: btn,
	
	sop: sop,
	soh: soh,
	sob: sob,
	
	eop: eop,
	eoh: eoh,
	eob: eob,
	
	utn: utn
}