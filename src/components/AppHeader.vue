<template>
<div>
    <link rel="stylesheet" href="/fresh/css/datepicker.css">
    <link rel="stylesheet" href="/fresh/css/bootstrap.min.css">
    <link rel="stylesheet" href="/fresh/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/fresh/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="/fresh/css/style2.css">
    <link rel="stylesheet" href="/fresh/css/csswickedpicker.css">
    <link rel="stylesheet" href="/fresh/css/font-awesome.min.css" />
    <link href="/fresh/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
    <div class="top-bar">
        <div class="container">
            <ul class="inline left">
                <li class="hide-on-mid hide-on-small">
                    Mon Mar 07 18:25:30 IST 2022
                </li>
            </ul>
            <ul class="inline right">
                <li class="hide-on-mid hide-on-small" style="font-weight: bold">
                    <a href="#">For Academic Year 2021-22</a>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <li class="hide-on-mid hide-on-small">|</li>

                <li class="hide-on-mid hide-on-small">Home</li>
                <li class="hide-on-mid hide-on-small">|</li>
                <li style="background-color: #565656; padding: 2px 5px">
                    <a href="#">A-</a>
                </li>
                <li style="background-color: #565656; padding: 2px 5px">
                    <a href="#">A</a>
                </li>
                <li style="background-color: #565656; padding: 2px 5px">
                    <a href="#">A+</a>
                </li>
                <li style="margin-left: 5px">Hindi</li>
            </ul>
            <div class="clear"></div>
        </div>
    </div>

    <div class="flex-header">
        <div style="
          margin: 0;
          padding-left: 0px;
          padding-top: 20px;
          padding-right: 0px;
        ">
            <img src="../../public/nsp1.png" height="70px" />
        </div>
        <div style="margin: 0; padding-left: 10px; padding-top: 20px">
            <h2 style="
            margin: 0;
            color: #d05241;
            font-weight: 400;
            font-size: 26px;
            padding-left: 0px;
          ">
                National Scholarship Portal
            </h2>
            <span style="font-size: 0.9em; font-weight: 400">
                Ministry Of Electronics &amp; Information Technology,<br />
                <span style="text-align: center"> Government of India</span>
            </span>
        </div>

        <div style="padding-left: 7%">
            <img src="../../public/nsp2.png" height="100px" />
        </div>
        <div style="padding-left: 7%">
            <img src="../../public/nsp4.png" height="80px" width="130px" />
        </div>
        <!--                            <div style=" width: 130px; background-image: url('/fresh/img/dilogo.jpg'); background-repeat: no-repeat; height: 100px; background-position: right center; background-size: contain" class="right hide-on-mid  hide-on-small"></div>-->
    </div>

    <nav>
        <div class="container">
            <div class="bg-orange">
                <a class="hide-on-large-only" id="mobile-nav-handle" href="homePage" style="border: none; padding: 10px 20px; color: #f2f2f2">
                    <i class="fa fa-bars fa-lg"></i>
                </a>
            </div>
            <ul class="top-menu heightinc"></ul>

            <div class="clear"></div>
        </div>
    </nav>

    <div class="top-bar-1">

        <div class="container" style="width: 984px; padding: 0 20px; text-align: left;">
            <ul>
                <li style="background-color: #fff; font-weight: 500">
                    <a href="newstdRegfrmInstruction" data-tooltip="Student Applying for first time should compulsorily register. Application Id will be Login Id and Password is Date of Birth. Don't Share Application Id &amp; PAssword with Others." id="newuserType" onclick="alert('1. Student Applying for first time should compulsorily register. Application Id will be Login Id and Password is Date of Birth. Don't Share Application Id &amp; Password with Others.\n \n 2. Renewal will be opened soon.The students who got Scholarship in academic year 2016 - 17 &amp; continuing the same course are eligible to apply for Renewal only.Students whose status is under process in NSP 2.0 for the academic year 2016 - 17 are requested to wait till renewal is open.');">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <i class="fa fa-user-plus fa-2x" style="color: #21c465"></i>
                                    </td>
                                    <td> New User?Register</td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                </li>
                <li class="" style="background-color: #fff; font-weight: 500">

                    <a href="loginPage" data-tooltip="Those Student who is applying first time or did not get Scholarship last year through NSP.">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <i class="fa fa-sign-in fa-2x blink_text" style="color: #004892"></i>
                                    </td>
                                    <td>Login to Apply</td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                </li>
                <li style="background-color: #fff; font-weight: 500">
                    <a href="http://scholarships.gov.in/renewal/loginPage.action" data-tooltip="Those student who got Scholarship last year through NSP willing to Renew for Current Session in the same Course. Login Id &amp; Password are same as last year.">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <i class="fa fa-retweet fa-2x blink_text" style="color: #996300"></i>
                                    </td>
                                    <td>Apply for Renewal</td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                </li>
                <li style="background-color: #fff; font-weight: 500">
                    <a href="onlineInstituteSearchIndex">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <i class="fa fa-adn fa-2x" style="color: #21c465"></i>
                                    </td>
                                    <td>Search Institute/School/ITI</td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                </li>
                <li style="background-color: #fff; font-weight: 500">
                    <a href="onlineSanctionedList">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <i class="fa fa-adn fa-2x" style="color: #21c465"></i>
                                    </td>
                                    <td>Scheme Wise Scholarship Sanctioned List</td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</div>
</template>

<script>
var _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function () {
    var u = "//nsp.gov.in/esupport/";
    _paq.push(["setTrackerUrl", u + "matomo.php"]);
    _paq.push(["setSiteId", "2"]);
    var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
    g.type = "text/javascript";
    g.async = true;
    g.defer = true;
    s.parentNode.insertBefore(g, s);
})();
</script>

<style>
.keep-spaces {
    white-space: pre-wrap;
}

body {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    background-color: #f2f2f2;
}

.top-bar {
    background-color: #272727;
    color: #e8e8e8;
    padding: 10px 0;
    font-size: .9em;
    box-shadow: 0px 2px 3px #999;
}

.top-bar ul.inline {
    padding: 0;
    margin: 0;
    list-style: none;
}

.top-bar ul.inline li {
    display: inline;
}

.top-bar a {
    color: #e2e2e2;
    text-decoration: none;
}

.container {
    width: 984px;
    padding: 0 20px;
    text-align: left;
}

/**
            Helper Classes
            **/
.inline {
    display: inline;
}

.block {
    display: block;
}

.inline-block {
    display: inline-block;
}

.left {
    float: left;
}

.right {
    float: right;
}

.clear {
    clear: both;
}

.tp-bg {
    background-color: rgba(0, 0, 0, .5) !important;
}

.bg-orange {
    background-color: #f36e21 !important;
}

.bg-grey {
    background-color: #dadada !important;
}

.white-text {
    color: #fff !important;
}

.padding-5 {
    padding: 5px;
}

.padding-10 {
    padding: 10px;
}

.padding-15 {
    padding: 15px;
}

.padding-20 {
    padding: 20px;
}

.padding-25 {
    padding: 25px;
}

.padding-30 {
    padding: 30px;
}

.no-padding {
    padding: 0;
}

.no-margin {
    margin: 0;
}

.gap-type-default {
    height: .75em;
}

.gap-type-1 {
    height: 5px;
}

.gap-type-2 {
    height: 10px;
}

.gap-type-3 {
    height: 15px;
}

.gap-type-4 {
    height: 20px;
}

a:hover {
    text-decoration: none;
}

[data-tooltip] {
    position: relative;
    z-index: 2;
    cursor: pointer;
}

/* Hide the tooltip content by default */
[data-tooltip]:before,
[data-tooltip]:after {
    visibility: hidden;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    pointer-events: none;
}

/* Position tooltip above the element */
[data-tooltip]:before {
    position: absolute;
    bottom: 150%;
    left: 50%;
    margin-bottom: 5px;
    margin-left: -80px;
    padding: 7px;
    width: 160px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: #000;
    background-color: hsla(0, 0%, 20%, 0.9);
    color: #fff;
    content: attr(data-tooltip);
    text-align: center;
    font-size: 14px;
    line-height: 1.2;
}

/* Triangle hack to make tooltip look like a speech bubble 
    [data-tooltip]:after {
      position: absolute;
      bottom: 150%;
      left: 50%;
      margin-left: -5px;
      width: 0;
      border-top: 5px solid #000;
      border-top: 5px solid hsla(0, 0%, 20%, 0.9);
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      content: " ";
      font-size: 0;
      line-height: 0;
    }
    */
/* Show tooltip content on hover */
[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
    visibility: visible;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
    opacity: 1;
}

.swal-icon--error {
    border-color: #f27474;
    -webkit-animation: animateErrorIcon 0.5s;
    animation: animateErrorIcon 0.5s;
}

.swal-icon--error__x-mark {
    position: relative;
    display: block;
    -webkit-animation: animateXMark 0.5s;
    animation: animateXMark 0.5s;
}

.swal-icon--error__line {
    position: absolute;
    height: 5px;
    width: 47px;
    background-color: #f27474;
    display: block;
    top: 37px;
    border-radius: 2px;
}

.swal-icon--error__line--left {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    left: 17px;
}

.swal-icon--error__line--right {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    right: 16px;
}

@-webkit-keyframes animateErrorIcon {
    0% {
        -webkit-transform: rotateX(100deg);
        transform: rotateX(100deg);
        opacity: 0;
    }

    to {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        opacity: 1;
    }
}

@keyframes animateErrorIcon {
    0% {
        -webkit-transform: rotateX(100deg);
        transform: rotateX(100deg);
        opacity: 0;
    }

    to {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        opacity: 1;
    }
}

@-webkit-keyframes animateXMark {
    0% {
        -webkit-transform: scale(0.4);
        transform: scale(0.4);
        margin-top: 26px;
        opacity: 0;
    }

    50% {
        -webkit-transform: scale(0.4);
        transform: scale(0.4);
        margin-top: 26px;
        opacity: 0;
    }

    80% {
        -webkit-transform: scale(1.15);
        transform: scale(1.15);
        margin-top: -6px;
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        margin-top: 0;
        opacity: 1;
    }
}

@keyframes animateXMark {
    0% {
        -webkit-transform: scale(0.4);
        transform: scale(0.4);
        margin-top: 26px;
        opacity: 0;
    }

    50% {
        -webkit-transform: scale(0.4);
        transform: scale(0.4);
        margin-top: 26px;
        opacity: 0;
    }

    80% {
        -webkit-transform: scale(1.15);
        transform: scale(1.15);
        margin-top: -6px;
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
        margin-top: 0;
        opacity: 1;
    }
}

.swal-icon--warning {
    border-color: #f8bb86;
    -webkit-animation: pulseWarning 0.75s infinite alternate;
    animation: pulseWarning 0.75s infinite alternate;
}

.swal-icon--warning__body {
    width: 5px;
    height: 47px;
    top: 10px;
    border-radius: 2px;
    margin-left: -2px;
}

.swal-icon--warning__body,
.swal-icon--warning__dot {
    position: absolute;
    left: 50%;
    background-color: #f8bb86;
}

.swal-icon--warning__dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-left: -4px;
    bottom: -11px;
}

@-webkit-keyframes pulseWarning {
    0% {
        border-color: #f8d486;
    }

    to {
        border-color: #f8bb86;
    }
}

@keyframes pulseWarning {
    0% {
        border-color: #f8d486;
    }

    to {
        border-color: #f8bb86;
    }
}

.swal-icon--success {
    border-color: #a5dc86;
}

.swal-icon--success:after,
.swal-icon--success:before {
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 60px;
    height: 120px;
    background: #fff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.swal-icon--success:before {
    border-radius: 120px 0 0 120px;
    top: -7px;
    left: -33px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 60px 60px;
    transform-origin: 60px 60px;
}

.swal-icon--success:after {
    border-radius: 0 120px 120px 0;
    top: -11px;
    left: 30px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 60px;
    transform-origin: 0 60px;
    -webkit-animation: rotatePlaceholder 4.25s ease-in;
    animation: rotatePlaceholder 4.25s ease-in;
}

.swal-icon--success__ring {
    width: 80px;
    height: 80px;
    border: 4px solid hsla(98, 55%, 69%, 0.2);
    border-radius: 50%;
    box-sizing: content-box;
    position: absolute;
    left: -4px;
    top: -4px;
    z-index: 2;
}

.swal-icon--success__hide-corners {
    width: 5px;
    height: 90px;
    background-color: #fff;
    padding: 1px;
    position: absolute;
    left: 28px;
    top: 8px;
    z-index: 1;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.swal-icon--success__line {
    height: 5px;
    background-color: #a5dc86;
    display: block;
    border-radius: 2px;
    position: absolute;
    z-index: 2;
}

.swal-icon--success__line--tip {
    width: 25px;
    left: 14px;
    top: 46px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: animateSuccessTip 0.75s;
    animation: animateSuccessTip 0.75s;
}

.swal-icon--success__line--long {
    width: 47px;
    right: 8px;
    top: 38px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: animateSuccessLong 0.75s;
    animation: animateSuccessLong 0.75s;
}

@-webkit-keyframes rotatePlaceholder {
    0% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    5% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    12% {
        -webkit-transform: rotate(-405deg);
        transform: rotate(-405deg);
    }

    to {
        -webkit-transform: rotate(-405deg);
        transform: rotate(-405deg);
    }
}

@keyframes rotatePlaceholder {
    0% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    5% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    12% {
        -webkit-transform: rotate(-405deg);
        transform: rotate(-405deg);
    }

    to {
        -webkit-transform: rotate(-405deg);
        transform: rotate(-405deg);
    }
}

@-webkit-keyframes animateSuccessTip {
    0% {
        width: 0;
        left: 1px;
        top: 19px;
    }

    54% {
        width: 0;
        left: 1px;
        top: 19px;
    }

    70% {
        width: 50px;
        left: -8px;
        top: 37px;
    }

    84% {
        width: 17px;
        left: 21px;
        top: 48px;
    }

    to {
        width: 25px;
        left: 14px;
        top: 45px;
    }
}

@keyframes animateSuccessTip {
    0% {
        width: 0;
        left: 1px;
        top: 19px;
    }

    54% {
        width: 0;
        left: 1px;
        top: 19px;
    }

    70% {
        width: 50px;
        left: -8px;
        top: 37px;
    }

    84% {
        width: 17px;
        left: 21px;
        top: 48px;
    }

    to {
        width: 25px;
        left: 14px;
        top: 45px;
    }
}

@-webkit-keyframes animateSuccessLong {
    0% {
        width: 0;
        right: 46px;
        top: 54px;
    }

    65% {
        width: 0;
        right: 46px;
        top: 54px;
    }

    84% {
        width: 55px;
        right: 0;
        top: 35px;
    }

    to {
        width: 47px;
        right: 8px;
        top: 38px;
    }
}

@keyframes animateSuccessLong {
    0% {
        width: 0;
        right: 46px;
        top: 54px;
    }

    65% {
        width: 0;
        right: 46px;
        top: 54px;
    }

    84% {
        width: 55px;
        right: 0;
        top: 35px;
    }

    to {
        width: 47px;
        right: 8px;
        top: 38px;
    }
}

.swal-icon--info {
    border-color: #c9dae1;
}

.swal-icon--info:before {
    width: 5px;
    height: 29px;
    bottom: 17px;
    border-radius: 2px;
    margin-left: -2px;
}

.swal-icon--info:after,
.swal-icon--info:before {
    content: "";
    position: absolute;
    left: 50%;
    background-color: #c9dae1;
}

.swal-icon--info:after {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-left: -3px;
    top: 19px;
}

.swal-icon {
    width: 80px;
    height: 80px;
    border-width: 4px;
    border-style: solid;
    border-radius: 50%;
    padding: 0;
    position: relative;
    box-sizing: content-box;
    margin: 20px auto;
}

.swal-icon:first-child {
    margin-top: 32px;
}

.swal-icon--custom {
    width: auto;
    height: auto;
    max-width: 100%;
    border: none;
    border-radius: 0;
}

.swal-icon img {
    max-width: 100%;
    max-height: 100%;
}

.swal-title {
    color: rgba(0, 0, 0, 0.65);
    font-weight: 600;
    text-transform: none;
    position: relative;
    display: block;
    padding: 13px 16px;
    font-size: 27px;
    line-height: normal;
    text-align: center;
    margin-bottom: 0;
}

.swal-title:first-child {
    margin-top: 26px;
}

.swal-title:not(:first-child) {
    padding-bottom: 0;
}

.swal-title:not(:last-child) {
    margin-bottom: 13px;
}

.swal-text {
    font-size: 16px;
    position: relative;
    float: none;
    line-height: normal;
    vertical-align: top;
    text-align: left;
    display: inline-block;
    margin: 0;
    padding: 0 10px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.64);
    max-width: calc(100% - 20px);
    overflow-wrap: break-word;
    box-sizing: border-box;
}

.swal-text:first-child {
    margin-top: 45px;
}

.swal-text:last-child {
    margin-bottom: 45px;
}

.swal-footer {
    text-align: right;
    padding-top: 13px;
    margin-top: 13px;
    padding: 13px 16px;
    border-radius: inherit;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.swal-button-container {
    margin: 5px;
    display: inline-block;
    position: relative;
}

.swal-button {
    background-color: #7cd1f9;
    color: #fff;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 24px;
    margin: 0;
    cursor: pointer;
}

.swal-button[not:disabled]:hover {
    background-color: #78cbf2;
}

.swal-button:active {
    background-color: #70bce0;
}

.swal-button:focus {
    outline: none;
    box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(43, 114, 165, 0.29);
}

.swal-button[disabled] {
    opacity: 0.5;
    cursor: default;
}

.swal-button::-moz-focus-inner {
    border: 0;
}

.swal-button--cancel {
    color: #555;
    background-color: #efefef;
}

.swal-button--cancel[not:disabled]:hover {
    background-color: #e8e8e8;
}

.swal-button--cancel:active {
    background-color: #d7d7d7;
}

.swal-button--cancel:focus {
    box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(116, 136, 150, 0.29);
}

.swal-button--danger {
    background-color: #e64942;
}

.swal-button--danger[not:disabled]:hover {
    background-color: #df4740;
}

.swal-button--danger:active {
    background-color: #cf423b;
}

.swal-button--danger:focus {
    box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(165, 43, 43, 0.29);
}

.swal-content {
    padding: 0 20px;
    margin-top: 20px;
    font-size: medium;
}

.swal-content:last-child {
    margin-bottom: 20px;
}

.swal-content__input,
.swal-content__textarea {
    -webkit-appearance: none;
    background-color: #fff;
    border: none;
    font-size: 14px;
    display: block;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.14);
    padding: 10px 13px;
    border-radius: 2px;
    transition: border-color 0.2s;
}

.swal-content__input:focus,
.swal-content__textarea:focus {
    outline: none;
    border-color: #6db8ff;
}

.swal-content__textarea {
    resize: vertical;
}

.swal-button--loading {
    color: transparent;
}

.swal-button--loading~.swal-button__loader {
    opacity: 1;
}

.swal-button__loader {
    position: absolute;
    height: auto;
    width: 43px;
    z-index: 2;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    pointer-events: none;
    opacity: 0;
}

.swal-button__loader div {
    display: inline-block;
    float: none;
    vertical-align: baseline;
    width: 9px;
    height: 9px;
    padding: 0;
    border: none;
    margin: 2px;
    opacity: 0.4;
    border-radius: 7px;
    background-color: hsla(0, 0%, 100%, 0.9);
    transition: background 0.2s;
    -webkit-animation: swal-loading-anim 1s infinite;
    animation: swal-loading-anim 1s infinite;
}

.swal-button__loader div:nth-child(3n + 2) {
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
}

.swal-button__loader div:nth-child(3n + 3) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
}

@-webkit-keyframes swal-loading-anim {
    0% {
        opacity: 0.4;
    }

    20% {
        opacity: 0.4;
    }

    50% {
        opacity: 1;
    }

    to {
        opacity: 0.4;
    }
}

@keyframes swal-loading-anim {
    0% {
        opacity: 0.4;
    }

    20% {
        opacity: 0.4;
    }

    50% {
        opacity: 1;
    }

    to {
        opacity: 0.4;
    }
}

.swal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10000;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
}

.swal-overlay:before {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
}

.swal-overlay--show-modal {
    opacity: 1;
    pointer-events: auto;
}

.swal-overlay--show-modal .swal-modal {
    opacity: 1;
    pointer-events: auto;
    box-sizing: border-box;
    -webkit-animation: showSweetAlert 0.3s;
    animation: showSweetAlert 0.3s;
    will-change: transform;
}

.swal-modal {
    width: 478px;
    opacity: 0;
    pointer-events: none;
    background-color: #fff;
    text-align: center;
    border-radius: 5px;
    position: static;
    margin: 20px auto;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    z-index: 10001;
    transition: opacity 0.2s, -webkit-transform 0.3s;
    transition: transform 0.3s, opacity 0.2s;
    transition: transform 0.3s, opacity 0.2s, -webkit-transform 0.3s;
}

@media (max-width: 500px) {
    .swal-modal {
        width: calc(100% - 20px);
    }
}

@-webkit-keyframes showSweetAlert {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    1% {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
    }

    45% {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }

    80% {
        -webkit-transform: scale(0.95);
        transform: scale(0.95);
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes showSweetAlert {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    1% {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
    }

    45% {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }

    80% {
        -webkit-transform: scale(0.95);
        transform: scale(0.95);
    }

    to {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

body {
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
    background-color: #f2f2f2;
}

.top-bar {
    background-color: #272727;
    color: #e8e8e8;
    padding: 10px 0;
    font-size: 0.9em;
    box-shadow: 0px 2px 3px #999;
}

.top-bar ul.inline {
    padding: 0;
    margin: 0;
    list-style: none;
}

.top-bar ul.inline li {
    display: inline;
}

.top-bar a {
    color: #e2e2e2;
    text-decoration: none;
}

.container {
    width: 984px;
    padding: 0 20px;
    text-align: left;
}

/**
            Helper Classes
            **/
.inline {
    display: inline;
}

.block {
    display: block;
}

.inline-block {
    display: inline-block;
}

.left {
    float: left;
}

.right {
    float: right;
}

.clear {
    clear: both;
}

.tp-bg {
    background-color: rgba(0, 0, 0, 0.5) !important;
}

.bg-orange {
    background-color: #f36e21 !important;
}

.bg-grey {
    background-color: #dadada !important;
}

.white-text {
    color: #fff !important;
}

.padding-5 {
    padding: 5px;
}

.padding-10 {
    padding: 10px;
}

.padding-15 {
    padding: 15px;
}

.padding-20 {
    padding: 20px;
}

.padding-25 {
    padding: 25px;
}

.padding-30 {
    padding: 30px;
}

.no-padding {
    padding: 0;
}

.no-margin {
    margin: 0;
}

.gap-type-default {
    height: 0.75em;
}

.gap-type-1 {
    height: 5px;
}

.gap-type-2 {
    height: 10px;
}

.gap-type-3 {
    height: 15px;
}

.gap-type-4 {
    height: 20px;
}
</style>

<style>
<meta http-equiv="Pragma"content="no-cache"/><meta http-equiv="Cache-Control"content="no-cache"/><meta http-equiv="Cache-Control"content="must-revalidate"/><meta http-equiv="X-Frame-Options"content="DENY"/><meta name="DownloadOptions"content="nosave"/></head><body><link href="/fresh/css/font-awesome.min.css"
rel="stylesheet"
type="text/css"

/>a:hover {
    text-decoration: none;
}

[data-tooltip] {
    position: relative;
    z-index: 2;
    cursor: pointer;
}

/* Hide the tooltip content by default */
[data-tooltip]:before,
[data-tooltip]:after {
    visibility: hidden;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    pointer-events: none;
}

/* Position tooltip above the element */
[data-tooltip]:before {
    position: absolute;
    bottom: 150%;
    left: 50%;
    margin-bottom: 5px;
    margin-left: -80px;
    padding: 7px;
    width: 160px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: #000;
    background-color: hsla(0, 0%, 20%, 0.9);
    color: #fff;
    content: attr(data-tooltip);
    text-align: center;
    font-size: 14px;
    line-height: 1.2;
}

[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
    visibility: visible;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
    opacity: 1;
}

.flex-header {
    display: flex;
    justify-content: center;
    justify-content: flex-start;
    background-color: #ffffff;
    flex-wrap: wrap;
    padding-left: 7%;
    align-items: stretch;
    /*     border: 1px solid black;*/
}

.flex-header2 {
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    flex-direction: column;
    align-items: baseline;
}

.flex-container>div {
    background-color: #ffffff;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
}

nav {
    background-color: #f85b5b;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

nav ul li {
    float: left;
}

nav ul li a {
    display: inline-block;
    color: #e8e8e8;
    text-decoration: none;
    padding: 10px 20px;
}

nav ul li a:hover {
    background-color: #004892;
}

nav ul li:nth-child(1) a {
    background-color: rgba(162, 49, 44, 0.7);
}

.hide-on-large-only {
    display: none !important;
}

/**
        Sub Menu CSS
        **/
nav ul li.has-sub-menu ul {
    display: none;
    position: absolute;
    box-shadow: 0px 2px 2px #444;
    z-index: 9;
}

nav ul li.has-sub-menu ul li {
    float: none;
}

nav ul li.has-sub-menu ul li a {
    background-color: #4866af;
    border-bottom: 1px solid #607abe;
    display: block;
}

nav ul li.has-sub-menu ul li a:hover {
    background-color: #004892;
}

nav ul li.has-sub-menu:hover>ul {
    display: block;
}

nav ul li.has-sub-menu:hover>ul.sub-menu-l2 {
    right: -450px;
    bottom: -120px;
}

nav ul li.has-sub-menu:hover>ul.sub-menu-l3 {
    right: -270px;
    bottom: -40px;
}

/********/

.heightinc {
    height: 35px;
}

.top-bar {
    background-color: #272727;
    color: #e8e8e8;
    padding: 5px 0;
    font-size: 0.9em;
    box-shadow: 0px 2px 3px #999;
}

.top-bar-1 {
    background-color: #fff;
    box-shadow: 0px 2px 3px #999;
    padding: 10px 0;
    z-index: 1;
    border-bottom: 1px solid #dadada;
}

.top-bar-1 ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.top-bar-1 ul li {
    display: inline-block;
    margin-right: 20px;
}

.top-bar-1 ul li a {
    text-decoration: none;
    color: #444;
    font-size: 14px;
}

.top-bar-1 ul li i {
    margin-right: 5px;
}
</style>

<style>
.blink_text {
    -webkit-animation-name: blinker;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;

    -moz-animation-name: blinker;
    -moz-animation-duration: 1s;
    -moz-animation-timing-function: linear;
    -moz-animation-iteration-count: infinite;
    animation-name: blinker;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    color: red;
}

@-moz-keyframes blinker {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-webkit-keyframes blinker {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes blinker {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.center {
    text-align: center;
}

.div-outer li {
    line-height: 26px;
    list-style: none;
}

.div-outer p {
    margin-bottom: 1%;
    line-height: 22px;
}

.breifNotes table {
    width: 100%;
}

.breifNotes tr,
.breifNotes td {
    border: 1px solid #000;
    padding: 6px;
}

.div-outer {
    margin: auto;
    max-width: 1138px;
    min-width: 300px;
    margin-top: 10px !important;
    z-index: 10;
    height: auto;
    background-color: #ffffff;
    padding-top: 30px !important;
    padding-left: 30px !important;
    padding-right: 20px !important;
    border-radius: 15px;
    -moz-border-radius: 4px;
    border: 2px solid #0db7c4;
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    -moz-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    background-clip: padding-box;
    opacity: 0.97;
    filter: alpha(opacity=97);
}

.txt_head_color {
    color: #f85b5b;
}

.highlight {
    color: #0db7c4;
}

/* CSS animation */

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
        transform: scale(0.6);
    }

    100% {
        opacity: 100%;
        transform: scale(1);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 100%;
    }
}

.btn2 {
    background: #4caf50;
    background-image: -webkit-linear-gradient(top, #4caf50, #4caf50);
    background-image: -moz-linear-gradient(top, #4caf50, #4caf50);
    background-image: -ms-linear-gradient(top, #4caf50, #4caf50);
    background-image: -o-linear-gradient(top, #4caf50, #4caf50);
    background-image: linear-gradient(to bottom, #4caf50, #4caf50);
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    font-family: Arial;
    color: #ffffff;
    font-size: 20px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
}

.btn2:hover {
    background: #f85b5b;
    background-image: -webkit-linear-gradient(top, #f85b5b, #f85b5b);
    background-image: -moz-linear-gradient(top, #f85b5b, #f85b5b);
    background-image: -ms-linear-gradient(top, #f85b5b, #f85b5b);
    background-image: -o-linear-gradient(top, #f85b5b, #f85b5b);
    background-image: linear-gradient(to bottom, #f85b5b, #f85b5b);
    text-decoration: none;
    color: #ffffff;
}

.btn-success {
    color: white;
    height: 29px;
    border: none;
    background-image: -webkit-linear-gradient(top, #5cb85c 0, #419641 100%);
    background-image: -o-linear-gradient(top, #5cb85c 0, #419641 100%);
    background-image: -webkit-gradient(linear, left top, left bottom, from(#5cb85c), to(#419641));
    background-image: linear-gradient(to bottom, #5cb85c 0, #419641 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    background-repeat: repeat-x;
    border-color: #3e8f3e;
    border-radius: 2px;
}
</style>
