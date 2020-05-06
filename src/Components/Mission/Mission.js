import React, { Component } from 'react';
import './Mission.css';
import pic1 from '../../Media/mission/1.jpg';
import pic2 from '../../Media/mission/2.JPG';
import pic3 from '../../Media/mission/3.jpg';


export default function Mission() {
  return(

    <div class="outer">
      <div class="pre_title">They say a picture is worth a thousand words...<br/> How would you like 3,000?</div>
      <div class="main_title">Here's our mission:</div>
      <div class="pre_title small">(hover over the images!)</div>

      <div class="mid_canvas">
        <span class="holder1">
          <img id="pic1" src={pic1} />
          <div class="pic_text1">
            1Blah blah blah blah blah blah blah blah blah blah blah blah blah .blah blah blah blah blah blah blah blah blah blah blah .blah blah .
          </div>
        </span>
        <span class="holder2">
          <img id="pic2" src={pic2} />
          <div class="pic_text2">
            2Blah blah blah blah blah blah blah blah blah blah blah blah blah .blah blah blah blah blah blah blah blah blah blah blah .blah blah .
          </div>
        </span>
        <span class="holder3">
          <img id="pic3" src={pic3} />
          <div class="pic_text3">
            3Blah blah blah blah blah blah blah blah blah blah blah blah blah .blah blah blah blah blah blah blah blah blah blah blah .blah blah .
          </div>
        </span>

      </div>

    </div>

  );
}
