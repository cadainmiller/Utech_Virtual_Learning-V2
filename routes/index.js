var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

var Complex = require("complex.js");
const {
  complex,
  add,
  subtract,
  multiply,
  divide,
  matrix,
  sin,
  sqrt,
  pi,
  equal,
  sort,
  format,
  compareNatural,
} = require("mathjs");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET Routes Page. */
router.get("/", function (req, res, next) {
  res.render("pages/index", { title: "Express" });
});

router.get("/lab1", function (req, res, next) {
  res.render("pages/lab1", { title: "Express" });
});

router.get("/lab2", function (req, res, next) {
  res.render("pages/lab2", { title: "Express" });
});

router.get("/lab3", function (req, res, next) {
  res.render("pages/lab3", { title: "Express" });
});

router.get("/lab4", function (req, res, next) {
  res.render("pages/lab4", { title: "Express" });
});

router.get("/lab5", function (req, res, next) {
  res.render("pages/lab5", { title: "Express" });
});

router.get("/lab1_result", function (req, res, next) {
  res.render("pages/lab1_result", { title: "Express" });
});

router.get("/lab2_result", function (req, res, next) {
  res.render("pages/lab2_result", { title: "Express" });
});

router.get("/lab3_result", function (req, res, next) {
  res.render("pages/lab3_result", { title: "Express" });
});

router.get("/lab4_result", function (req, res, next) {
  res.render("pages/lab4_result", { title: "Express" });
});

router.get("/lab5_result", function (req, res, next) {
  res.render("pages/lab5_result", { title: "Express" });
});

/* Post Routes Page. */
router.post("/cal_lab1", urlencodedParser, function (req, res, next) {
  var r1 = parseFloat(req.body.r1);
  var r2 = parseFloat(req.body.r2);
  var r3 = parseFloat(req.body.r3);

  var e1 = parseFloat(req.body.e1);
  var e2 = parseFloat(req.body.e2);

  var rtotal_1 = 0;
  var itotal_1 = 0;
  var rtotal_2 = 0;
  var itotal_2 = 0;
  var Ia,
    IaM = 0;
  var Ib,
    IbM = 0;
  var I3,
    I3M = 0;

  rtotal_1 = (r3 * r2) / (r3 + r2) + r1;
  itotal_1 = e1 / rtotal_1;
  Ia = itotal_1 * (r2 / (r2 + r3));
  IaM = (Ia * 1000).toFixed(4);
  rtotal_2 = (r1 * r3) / (r1 + r3) + r2;
  itotal_2 = e2 / rtotal_2;
  Ib = itotal_2 * (r1 / (r1 + r3));
  IbM = (Ib * 1000).toFixed(4);
  I3 = Ia + Ib;
  I3M = (I3 * 1000).toFixed(4);

  res.render("pages/lab1_result", {
    IaM: IaM,
    IbM: IbM,
    I3M: I3M,
    e1: e1,
    e2: e2,
  });
});

router.post("/cal_lab2", urlencodedParser, function (req, res, next) {
  var r1 = parseFloat(req.body.r1);
  var r2 = parseFloat(req.body.r2);
  var r3 = parseFloat(req.body.r3);
  var rl = parseFloat(req.body.rl);
  var e1 = parseFloat(req.body.e1);
  var e2 = parseFloat(req.body.e2);

  var RT = 0;
  var Rl_total = 0;
  var I = 0;
  var V = 0;
  var Itotal = 0;
  var IaM = 0;
  var Vl1 = 0;

  RT = (r1 * r2) / (r1 + r2);
  Rl_total = (r3 * rl) / (r3 + rl);
  I = (e2 - e1) / (r1 + r2);
  V = e2 - r2 * I;
  Itotal = V / (RT + Rl_total);
  IaM = (Itotal * 1000).toFixed(4);
  Vl1 = (Itotal * Rl_total).toFixed(4);

  res.render("pages/lab2_result", {
    IaM: IaM,
    Vl1: Vl1,
  });
});

router.post("/cal_lab3", urlencodedParser, function (req, res, next) {
  var rs = parseFloat(req.body.rs);
  var eth = parseFloat(req.body.eth);
  var rl = parseFloat(req.body.rl);

  var Rtotal = 0;
  var Ith = 0;
  var vl = 0;
  var VlD = 0;

  Rtotal = rs + rl;
  Ith = eth / Rtotal;
  vl = Ith * rl;

  VlD = vl.toFixed(4);

  res.render("pages/lab3_result", {
    VlD: VlD,
  });
});

router.post("/cal_lab4", urlencodedParser, function (req, res, next) {
  var rth1 = parseFloat(req.body.rth1);
  var eth = parseFloat(req.body.eth);
  var rll = parseFloat(req.body.rll);

  var Rtotal = 0;
  var Ith = 0;
  var vl = 0;
  var VlD = 0;

  Rtotal = rth1 + rll;
  Ith = eth / Rtotal;
  vl = Ith * rll;
  VlD = vl.toFixed(2);

  res.render("pages/lab4_result", {
    VlD: VlD,
  });
});

router.post("/cal_lab5", urlencodedParser, function (req, res, next) {
  var r1 = parseFloat(req.body.r1);
  var r2 = parseFloat(req.body.r2);
  var r3 = parseFloat(req.body.r3);
  var r4 = parseFloat(req.body.r4);
  var r5 = parseFloat(req.body.r5);

  var l2 = parseFloat(req.body.l2);
  var l5 = parseFloat(req.body.l5);

  var c4 = parseFloat(req.body.c4);
  var c5 = parseFloat(req.body.c5);
  var f = parseFloat(req.body.f);
  var v_diff = parseFloat(req.body.v_diff);

  var xl2 = 0;
  var xc2 = 0;
  var xc5 = 0;
  var xl5 = 0;

  //Calculate Reactances
  // xl2 = 2 * pi * l2;
  // xc4 = Math.pow((2 * pi * c4), -1);
  // xc5 = Math.pow((2 * pi * c5), -1);
  // xl5 = 2 * pi * l5;

  //Total Impedances Branches

  //Calculations for reactances

  //Branch 4
  xl2 = 2 * Math.PI * f * l2;

  //Branch 4
  xc4 = 1 / (2 * Math.PI * f * c4);
  console.log(xc4);

  //Branch 5
  xc5 = 1 / (2 * Math.PI * f * c5);
  xl5 = 2 * Math.PI * f * l5;
  console.log(xc5);
  console.log(xl5);
  //Total impedances in branches

  //branch 2
  z2 = complex(r2, xl2); // (r2+jxl2)ohms
  console.log(z2);

  //branch 4
  z4 = complex(r4, -xc4);
  console.log(z4);

  //branch 5
  xlc5 = xl5 - xc5;
  console.log(xlc5);
  z5 = complex(r5, xlc5);
  console.log(z5);

  //const d = complex(3, 4);
  //console.log(d.abs(), d.arg()); // radius = 5, phi = 0.9272952180016122
  //degrees = d.arg() * (180 / Math.PI);
  //console.log(d.abs(), degrees);

  //Calculation for input supply voltage
  z4xz5Re = complex(z5.re, z5.im);
  z4xz5Im = complex(z4.re, z4.im);

  //console.log( complex(z5.re, z5.im));
  //mutiz4andz5 = z4xz5Re * z4xz5Im;
  //console.log(mutiz4andz5);

  // addz4andz5 = Complex.add(z4xz5Re, z4xz5Im);
  // console.log(add(z5, z4));
  addz4andz5 = add(z5, z4);
  // console.log(multiply(z4, z5));
  mutiz4andz5 = multiply(z5, z4);

  zz_val = divide(mutiz4andz5, addz4andz5);
  //addz4andz5 = z4xp5Re + z4xp5Im;
  //console.log("Add" + addz4andz5);
  //zz_val = mutiz4andz5 / addz4andz5;
  // console.log(mutiz4andz5);
  //zz_val = complex(z4xz5Re, z4xz5Im);
  console.log(zz_val);
  // degrees = zz_val.arg() * (180 / Math.PI);
  // console.log(zz_val.abs(), degrees);

  Ir3a = v_diff / r3;

  V2a_val = multiply(Ir3a, zz_val);
  V2a = complex(V2a_val);
  console.log(V2a_val);

  degrees = V2a_val.arg() * (180 / Math.PI);
  console.log(V2a_val.abs(), degrees);

  V1a_val = add(V2a, v_diff);
  console.log(V1a_val);
  degrees = V1a_val.arg() * (180 / Math.PI);
  console.log(V1a_val.abs(), degrees);
  //V1a_val = (V1a_val.abs(), degrees);

  // V1a = complex.toPolar(V1a_val);
  // console.log(V1a);

  Iz2a = divide(V1a_val, z2);
  degrees = Iz2a.arg() * (180 / Math.PI);
  console.log(Iz2a.abs(), degrees);

  //Itotal_a_val = Ir3a + Iz2a;
  Itotal_a = add(Ir3a, Iz2a);
  degrees = Itotal_a.arg() * (180 / Math.PI);
  console.log(Itotal_a.abs(), degrees);

  vsupply_val = multiply(r1, Itotal_a);
  vsupply_val = add(vsupply_val, V1a_val);
  degrees = vsupply_val.arg() * (180 / Math.PI);
  console.log(vsupply_val.abs(), degrees);
  // vsupply = complex.toPolar(vsupply_val);

  vin_val = vsupply_val.abs();

  // z2 = divide(add(z2, r1, r3), 1);

  // r3a = divide(add(r3, z4, z5), 1);

  // y = matrix([
  //   [z2.arg(), z2.abs(), -1 / r3],
  //   [-1 / r3, r3a],
  // ]);

  // console.log(y);

  com_ad1 = divide(1, z2);
  com_ad2 = divide(1, r1);
  com_ad3 = divide(1, r3);
  m_add1 = add(com_ad1, com_ad2, com_ad3);
  com_ad4 = divide(1, r3);
  com_ad5 = divide(1, z4);
  com_ad6 = divide(1, z5);
  com_ad7 = divide(1, r3);
  m_add2 = add(com_ad4, com_ad5, com_ad6);
  com_ad8 = divide(vin_val, r1);

  com_ad10 = multiply(m_add1, m_add2);
  com_ad11 = multiply(com_ad4, com_ad7);
  com_ad12 = subtract(com_ad10, com_ad11);
  com_ad13 = divide(1, com_ad12);

  dom_1 = multiply(m_add2, com_ad13);
  dom_2 = multiply(m_add1, com_ad13);
  dom_3 = multiply(com_ad4, com_ad13);
  dom_4 = multiply(com_ad7, com_ad13);

  par1 = multiply(dom_1, com_ad8);
  par2 = multiply(dom_4, 0);
  par3 = multiply(dom_3, com_ad8);
  par4 = multiply(dom_2, 0);
  final_matr = [par1, par3]; //par1 result is v1 and par2 result is v2 this the final 2x1 matrix needed

  par1degrees = par1.arg() * (180 / Math.PI);
  console.log(par1.abs(), par1degrees);

  par3degrees = par3.arg() * (180 / Math.PI);
  console.log(par3.abs(), par3degrees);
  //Branch currents outputs must be in polar form
  //branch  1
  Itotal_rem = subtract(vin_val, par1);
  Itotal = divide(Itotal_rem, r1);
  Itotaldegrees = Itotal.arg() * (180 / Math.PI);
  console.log("branch 1 " + Itotal.abs(), Itotaldegrees);
  //branch 2
  Iz2 = divide(par1, z2);
  Iz2degrees = Iz2.arg() * (180 / Math.PI);
  console.log("branch 2 " + Iz2.abs(), Iz2degrees);
  //branch 3
  Ir3sub = subtract(par1, par3);
  Ir3 = divide(Ir3sub, r3);
  Ir3degrees = Ir3.arg() * (180 / Math.PI);
  console.log("branch 3 " + Ir3.abs(), Ir3degrees);

  //branch 4
  Iz4 = divide(par3, z4);
  Iz4degrees = Iz4.arg() * (180 / Math.PI);
  console.log("branch 4 " + Iz4.abs(), Iz4degrees);

  //branch 5
  Iz5 = divide(par3, z5);
  Iz5degrees = Iz5.arg() * (180 / Math.PI);
  console.log("branch 5 " + Iz5.abs(), Iz5degrees);

  //phase and voltage relationship w/ voltage supply
  //branch z2
  phase1 = divide(xl2, r2);
  phase_diff2 = Math.atan(phase1);
  phase_diff2 = phase_diff2 * (180 / Math.PI);
  console.log("branch z2 " + phase_diff2);

  //branch z4
  phase2 = divide(xc4, r4);
  phase_diff4 = Math.atan(phase2);
  phase_diff4 = phase_diff4 * (180 / Math.PI);
  console.log("branch z4 " + phase_diff4);

  //branch z5
  phase3 = divide(xlc5, r5);
  phase_diff5 = Math.atan(phase3);
  phase_diff5 = phase_diff5 * (180 / Math.PI);
  console.log("branch z5 " + phase_diff5);

  res.render("pages/lab5_result", {
    v1im: par1.abs().toFixed(4),
    v1po: par1degrees.toFixed(4),
    v2im: par3.abs().toFixed(4),
    v2po: par3degrees.toFixed(4),

    //Current Branch
    l1im: Itotal.abs().toFixed(4),
    l1po: Itotaldegrees.toFixed(4),

    lz2im: Iz2.abs().toFixed(4),
    lz2po: Iz2degrees.toFixed(4),

    lr3im: Ir3.abs().toFixed(4),
    lr3po: Ir3degrees.toFixed(4),

    lz4im: Iz4.arg().toFixed(4),
    lz4po: Iz4degrees.toFixed(4),

    lz5im: Iz5.arg().toFixed(4),
    lz5po: Iz5degrees.toFixed(4),

    //Branch Phase Differences
    z2: phase_diff2.toFixed(4),
    z4: phase_diff4.toFixed(4),
    z5: phase_diff5.toFixed(4),
  });
});

module.exports = router;
