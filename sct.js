/*************************************
 *              sct.js               *
 *           By:  ItaySharon         *
 *          License: GPL-3.0         *
 *************************************/



/*************************************
 *              tag base             *
 *************************************/
const ots =               "<";
const cts =               "</";
const gte =               ">";

/*************************************
 *             tag names             *
 *************************************/
const ptn =               "html";
const htn =               "head";
const btn =               "body";

/*************************************
 *             open tags             *
 *************************************/
const sop =               ots + ptn + gte;
const soh =               ots + htn + gte;
const sob =               ots + btn + gte;

/*************************************
 *             close tags            *
 *************************************/
const eop =               cts + ptn + gte;
const eoh =               cts + htn + gte;
const eob =               cts + btn + gte;

/*************************************
 *          base page - TEST         *
 *************************************/
const bps =               sop + soh + eoh + sob;
const bpe =               eob + eop;

/*************************************
 *          Unit Test Node           *
 *************************************/
const utn =               "OK";

/*************************************
 *              exports              *
 *************************************/
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
	
	bps: bps,
	bpe: bpe,
	
	utn: utn
}
