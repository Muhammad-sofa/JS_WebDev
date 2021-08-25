import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";

import { DateRange } from "react-date-range";

import "./index.scss";
import "react-date-range/dist/styles.css"; //main css file
import "react-date-range/dist/theme/default.css"; //theme css file

import formatDate from "utils/formatDate";
import iconCalender from "assets/images/ic_calendar.svg";

componentDidMount() {
window.title = "Home"
}

componentDidUpdate(prevProps, prevState) {
     if(prevProps !== this.props){

     }
     if(prevState !== this.state){

     }
}

useEffect(() => {
     window.title = "Home"
}, [state])