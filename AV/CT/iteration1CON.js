/*global ODSA */
// Written by Jieun Chon
//Array-Based list introduction


var it1_midblue1,
    it1_midblue2,
    it1_midblue3,
    it1_arr;

$(document).ready(function() {
  "use strict";
  var arrValues = [4, 13, 6, 9, 11];
  var av_name = "iteration1CON";
  var interpret = ODSA.UTILS.loadConfig({av_name: av_name}).interpreter;

  //blueStepAnim :This should come before JSAV Initialize
      JSAV.ext.blueStepAnim = JSAV.anim(function doBlueStep() {
      if (this._shouldAnimate()) {

          //  midblue 1 start
          it1_midblue1.addClass("blueboxh", {record: false});
          setTimeout(function() {
            it1_midblue1.removeClass("blueboxh", {record: false});

              // midblue 2 animation start -----------------
              setTimeout(function() {
                it1_midblue2.addClass("blueboxh", {record: false});
                setTimeout(function() {
                  it1_midblue2.removeClass("blueboxh", {record: false});

                  // midblue 3 animation start -----------------
                  setTimeout(function() {
                    it1_midblue3.addClass("blueboxh", {record: false});
                    setTimeout(function() {
                      it1_midblue3.removeClass("blueboxh", {record: false});
                    }, 200);
                  }, 200);
                  // midblue 3 animation close ---------------------

                }, 200);
              }, 200);
              // midblue 2 animation close

          }, 200);

      }
    }, function undoBlueStep() {});
    // BlueStepAnim END -----------------------------------------------


    //BlueStepAnim :This should come before JSAV Initialize
        JSAV.ext.bluehigh = JSAV.anim(function doBlueStep(item) {
        if (this._shouldAnimate()) {
            item.addClass("blueboxh", {record: false});
            setTimeout(function() {
              item.removeClass("blueboxh", {record: false});
            }, 200);
        }
      }, function undoBlueStep(item) {});
      // BlueStepAnim END -----------------------------------------------

  var av = new JSAV(av_name);
  var leftMargin = 450,
      rect_left = 300,
      rect0_top = 0,
      rect_top = 40,
      topMargin = rect_top + 20;

  var nodegap = 40;


  // blue boxes, floor 1, last floor
  var topblue = av.g.rect(rect_left, rect0_top, 280, 35, 10).addClass("bluebox");
  var botblue = av.g.rect(rect_left, rect0_top + 295, 280, 35, 10).addClass("bluebox");

  // floor 2
  av.g.rect(rect_left, rect_top, 250, 35, 10).addClass("box")
  av.g.rect(rect_left, rect_top + 20, 50, 15).addClass("box"); // for no-roung on the corner

  //floor 3
  av.g.rect(rect_left, rect_top + 25, 30, 60).addClass("box").css({opacity: 0.9});
  av.g.rect(rect_left + 73, rect_top + 25, 30, 60).addClass("box").css({opacity: 0.9});
  //create array contains 5 values.
  arr = av.ds.array(arrValues, {indexed: false, left: leftMargin, top: topMargin, position: "absolute"});

  //floor 4, long purple
  av.g.rect(rect_left, rect_top + 76, 300, 30, 10).addClass("box");
  av.g.rect(rect_left, rect_top + 76, 50, 15).addClass("box"); // for no-roung on the corner

  //floor 5, left big purple box and 3 blue boxes
  av.g.rect(rect_left, rect_top + 80, 110, 170, 10).addClass("box");

  //floor 5, right big putple box below blue boxes
  av.g.rect(rect_left + 90, rect_top + 200, 230, 50, 10).addClass("box");

  it1_midblue1 = av.g.rect(rect_left + 130, rect_top + 110, 180, 25, 10).addClass("bluebox");
  it1_midblue2 = av.g.rect(rect_left + 130, rect_top + 140, 180, 25, 10).addClass("bluebox");
  it1_midblue3 = av.g.rect(rect_left + 130, rect_top + 170, 180, 25, 10).addClass("bluebox");

// create labels
  var label1 = av.label("for each item", {left: rect_left + 5, top: rect_top - 30});
  label1.addClass("labels");

  var label2 = av.label("price", {left: rect_left + 19, top: rect_top + 45});
  label2.addClass("labels");

  var label3 = av.label("do", {left: rect_left + 35, top: rect_top + 100});
  label3.addClass("labels");


// Create Iteration Property box and text
  var iplabel = av.label("Iteration<br>Property", {left: rect_left - 120, top: rect_top + 120}).css({'font-weight': '600'});
  iplabel.addClass("hiding");
  var iprec = av.g.rect(rect_left - 140, rect_top + 125, 100, 70).addClass("fourRoundBox");
  iprec.addClass("hiding");
  var ipline = av.g.line(rect_left - 40, rect_top + 150, rect_left + 5, rect_top + 110, {'arrow-end': 'classic-wide-long', 'stroke-width': 3});
  ipline.addClass("hiding");

// ------------------- slide show start -------------------------

  // Slide 1
  av.umsg(interpret("sc1"));
  var nextleft = leftMargin - 120;
  av.displayInit();

  // Slide 2
  av.umsg(interpret("sc2"));
  iplabel.removeClass("hiding");
  iprec.removeClass("hiding");
  ipline.removeClass("hiding");
  av.step();

  // Slide 3
  av.umsg(interpret("sc3"));
  av.bluehigh(topblue);
  av.step();

  // Slide 4
  av.umsg(interpret("sc4"));
  arr.css({left: nextleft});
  av.blueStepAnim();
  nextleft -= nodegap;
  av.step();

  // // Slide 5
  // av.umsg(interpret("sc5"));
  // av.step();

  // Slide 6
  av.umsg(interpret("sc6"));
  arr.css({left: nextleft});
  nextleft -= nodegap;
  av.step();

  // Slide 7
  av.umsg(interpret("sc7"));
  av.blueStepAnim();
  av.step();

  // Slide 8
  av.umsg(interpret("sc8"));
  arr.css({left: nextleft});
  nextleft -= nodegap;
  av.step();

  // Slide 9
  av.umsg(interpret("sc9"));
  av.blueStepAnim();
  av.step();

  // Slide 10
  av.umsg(interpret("sc10"));
  arr.css({left: nextleft});
  nextleft -= nodegap;
  av.step();

  // Slide 11
  av.umsg(interpret("sc11"));
  av.blueStepAnim();
  av.step();

  // Slide 12
  av.umsg(interpret("sc12"));
  arr.css({left: nextleft});
  nextleft -= (nodegap + 50);
  av.step();

  // Slide 13
  av.umsg(interpret("sc13"));
  av.blueStepAnim();
  av.step();

  // Slide 14
  av.umsg(interpret("sc14"));
  arr.css({left: nextleft});
  nextleft -= (nodegap + 100);
  av.step();

  // Slide 15
  av.umsg(interpret("sc15"));
  av.bluehigh(botblue);
  av.recorded();
});
