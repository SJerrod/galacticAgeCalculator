import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GalacticAge } from './js/galacticage.js';

$(document).ready(function() {
  $(".contents").submit(function(event) {
    event.preventDefault();
    let age = $("input.age").val();
    let gender = $("option[name='gender']:selected").val();
    let region = $("option[name='continent']:selected").val();
    let galaxy = new GalacticAge(age, gender, region);
    galaxy.calcMercury();
    galaxy.calcVenus();
    galaxy.calcMars();
    galaxy.calcJupiter();
    galaxy.lifeExpectancy();

    $(".mercury").append("<p>" + galaxy.mercuryAge + " Mercurian Age" + "</p>");
    $(".mercury").append("<p>" + galaxy.remain[1] + " years left"  + "</p>");
    $(".mercury").append("<p>" + galaxy.extra[1] + " years extra" + "</p>");
    $(".venus").append("<p>" + galaxy.venusAge + " Venusian Age" + "</p>");
    $(".venus").append("<p>" + galaxy.remain[2] + " years left"  + "</p>");
    $(".venus").append("<p>" + galaxy.extra[2] + " years extra" + "</p>");
    $(".earth").append("<p>" + galaxy.earthAge + " Terran Age" + "</p>");
    $(".earth").append("<p>" + galaxy.remain[0] + " years left"  + "</p>");
    $(".earth").append("<p>" + galaxy.extra[0] + " years extra" + "</p>");
    $(".mars").append("<p>" + galaxy.marsAge + " Martian Age" + "</p>");
    $(".mars").append("<p>" + galaxy.remain[3] + " years left"  + "</p>");
    $(".mars").append("<p>" + galaxy.extra[3] + " years extra" + "</p>");
    $(".jupiter").append("<p>" + galaxy.jupiterAge + " Jovians Age" + "</p>");
    $(".jupiter").append("<p>" + galaxy.remain[4] + " years left"  + "</p>");
    $(".jupiter").append("<p>" + galaxy.extra[4] + " years extra" + "</p>");
  });
});