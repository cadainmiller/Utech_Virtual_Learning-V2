"use strict";

var express = require("express");

var router = express.Router();

var bodyParser = require("body-parser");

var Complex = require("complex.js");

var _require = require("mathjs"),
    complex = _require.complex,
    add = _require.add,
    multiply = _require.multiply,
    divide = _require.divide,
    matrix = _require.matrix,
    sin = _require.sin,
    sqrt = _require.sqrt,
    pi = _require.pi,
    equal = _require.equal,
    sort = _require.sort,
    format = _require.format,
    compareNatural = _require.compareNatural;

var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
/* GET Routes Page. */

router.get("/", function (req, res, next) {
  res.render("pages/index", {
    title: "Express"
  });
});
router.get("/lab1", function (req, res, next) {
  res.render("pages/lab1", {
    title: "Express"
  });
});
router.get("/lab2", function (req, res, next) {
  res.render("pages/lab2", {
    title: "Express"
  });
});
router.get("/lab3", function (req, res, next) {
  res.render("pages/lab3", {
    title: "Express"
  });
});
router.get("/lab4", function (req, res, next) {
  res.render("pages/lab4", {
    title: "Express"
  });
});
router.get("/lab5", function (req, res, next) {
  res.render("pages/lab5", {
    title: "Express"
  });
});
router.get("/lab1_result", function (req, res, next) {
  res.render("pages/lab1_result", {
    title: "Express"
  });
});
router.get("/lab2_result", function (req, res, next) {
  res.render("pages/lab2_result", {
    title: "Express"
  });
});
router.get("/lab3_result", function (req, res, next) {
  res.render("pages/lab3_result", {
    title: "Express"
  });
});
router.get("/lab4_result", function (req, res, next) {
  res.render("pages/lab4_result", {
    title: "Express"
  });
});
router.get("/lab5_result", function (req, res, next) {
  res.render("pages/lab5_result", {
    title: "Express"
  });
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
  rtotal_1 = r3 * r2 / (r3 + r2) + r1;
  itotal_1 = e1 / rtotal_1;
  Ia = itotal_1 * (r2 / (r2 + r3));
  IaM = (Ia * 1000).toFixed(4);
  rtotal_2 = r1 * r3 / (r1 + r3) + r2;
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
    e2: e2
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
  RT = r1 * r2 / (r1 + r2);
  Rl_total = r3 * rl / (r3 + rl);
  I = (e2 - e1) / (r1 + r2);
  V = e2 - r2 * I;
  Itotal = V / (RT + Rl_total);
  IaM = (Itotal * 1000).toFixed(4);
  Vl1 = (Itotal * Rl_total).toFixed(4);
  res.render("pages/lab2_result", {
    IaM: IaM,
    Vl1: Vl1
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
    VlD: VlD
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
    VlD: VlD
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
  var xl5 = 0; //Calculate Reactances
  // xl2 = 2 * pi * l2;
  // xc4 = Math.pow((2 * pi * c4), -1);
  // xc5 = Math.pow((2 * pi * c5), -1);
  // xl5 = 2 * pi * l5;
  //Total Impedances Branches
  //Calculations for reactances
  //Branch 4

  xl2 = 2 * Math.PI * f * l2; //Branch 4

  xc4 = 1 / (2 * Math.PI * f * c4);
  console.log(xc4); //Branch 5

  xc5 = 1 / (2 * Math.PI * f * c5);
  xl5 = 2 * Math.PI * f * l5;
  console.log(xc5);
  console.log(xl5); //Total impedances in branches
  //branch 2

  z2 = complex(r2, xl2); // (r2+jxl2)ohms

  console.log(z2); //branch 4

  z4 = complex(r4, -xc4);
  console.log(z4); //branch 5

  xlc5 = xl5 - xc5;
  console.log(xlc5);
  z5 = complex(r5, xlc5);
  console.log(z5); //const d = complex(3, 4);
  //console.log(d.abs(), d.arg()); // radius = 5, phi = 0.9272952180016122
  //degrees = d.arg() * (180 / Math.PI);
  //console.log(d.abs(), degrees);
  //Calculation for input supply voltage

  z4xz5Re = complex(z5.re, z5.im);
  z4xz5Im = complex(z4.re, z4.im); //console.log( complex(z5.re, z5.im));
  //mutiz4andz5 = z4xz5Re * z4xz5Im;
  //console.log(mutiz4andz5);
  // addz4andz5 = Complex.add(z4xz5Re, z4xz5Im);
  // console.log(add(z5, z4));

  addz4andz5 = add(z5, z4); // console.log(multiply(z4, z5));

  mutiz4andz5 = multiply(z5, z4);
  zz_val = divide(mutiz4andz5, addz4andz5); //addz4andz5 = z4xp5Re + z4xp5Im;
  //console.log("Add" + addz4andz5);
  //zz_val = mutiz4andz5 / addz4andz5;
  // console.log(mutiz4andz5);
  //zz_val = complex(z4xz5Re, z4xz5Im);

  console.log(zz_val); // degrees = zz_val.arg() * (180 / Math.PI);
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
  console.log(V1a_val.abs(), degrees); //V1a_val = (V1a_val.abs(), degrees);
  // V1a = complex.toPolar(V1a_val);
  // console.log(V1a);

  Iz2a = divide(V1a_val, z2);
  degrees = Iz2a.arg() * (180 / Math.PI);
  console.log(Iz2a.abs(), degrees); //Itotal_a_val = Ir3a + Iz2a;

  Itotal_a = add(Ir3a, Iz2a);
  degrees = Itotal_a.arg() * (180 / Math.PI);
  console.log(Itotal_a.abs(), degrees);
  vsupply_val = multiply(r1, Itotal_a);
  vsupply_val = add(vsupply_val, V1a_val);
  degrees = vsupply_val.arg() * (180 / Math.PI);
  console.log(vsupply_val.abs(), degrees); // vsupply = complex.toPolar(vsupply_val);

  vin_val = vsupply_val.abs();
  z2 = divide(add(z2, r1, r3), 1);
  r3a = divide(add(r3, z4, z5), 1);
  y = matrix([[z2.arg(), z2.abs(), -1 / r3], [-1 / r3, r3a]]);
  console.log(y); // i = matrix([[vin_val / r1], [0]]);
  // console.log(y);
  // console.log(multiply(y ^ -1, i));
  // res.render("pages/lab4_result", {
  //   VlD: VlD,
  // });
});
module.exports = router;