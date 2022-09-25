//all functions related to the buttons in .html
//the animations work individually if you refresh the page, would be nice if we had more of a base to work on it had a bit more of an informative lecture for this animation stuff. I literally spent more time trying to find information on how to do this animation stuff than doing it, there's no information out anywhere and not much we can work on from the lectures. Anything I could find was stuff relating to animation within the svg class and how to animate using .js libraries.
var animation = document.createElementNS("http://www.w3.org/2000/svg", "animate");

function ani(){
    
}
function showsource(){
    
}
function rgbEyes(){
    //works on one eye
    animation.setAttribute("id","eyeAnimation");
    animation.setAttribute("attributeName", "fill");
    animation.setAttribute("values", "red;green;blue;red");
    animation.setAttribute("dur", "3s");
    animation.setAttribute("repeatCount", "indefinite");

    var curElement = document.getElementById("eye-r-ball");
    curElement.appendChild(animation);
}
function thickEyebrows(){
    //doesn't work
    animation.setAttribute("id","eyebrows")
    animation.setAttribute("attributeName", "stroke-width");
    animation.setAttribute("values", "0.5;1;");
    animation.setAttribute("dur", "3s");
    animation.setAttribute("repeatCount", "1");
    
    var curElement1 = document.getElementById("eye-l-brow");
    curElement1.appendChild(animation);
}
function hoverGhost(){
    //doesn't worl
    animation.setAttribute("id","hover")
    animation.setAttribute("attributeName", "transform");
    animation.setAttribute("type", "translate")
    animation.setAttribute("values", "translate(0,0;0,10;0,0;0,-10;)");
    animation.setAttribute("dur", "3s");
    animation.setAttribute("repeatCount", "indefinite");
    var curElement2 = document.getElementById("ghost");
    curElement2.appendChild(animation);
}

function peekGhost() {
    //works
    var svgObject = document.getElementById('mySVGExternal');
    svgObject.getElementById('ghost').setAttribute('transform', 'rotate(35), translate(0,0), scale (1.0)');
    
    //all of this stuff is experimental, none of it works.
    
    /*animation.setAttribute("id","peek")
    animation.setAttribute("attributeType", "XML");
    animation.setAttribute("attributeName", "transform");
    animation.setAttribute("values", "rotate(0),translate(0,0),	scale (1.0);rotate(10), translate(0,0), scale (1.0)");
    animation.setAttribute("dur", "3s");
    animation.setAttribute("repeatCount", "indefinite");
    
    var curElement3 = document.getElementById("ghost");
    curElement3.appendChild(animation);*/
    
    /*animation.setAttribute("id","rotation")
    animation.setAttribute("attributeName", "transform");
    animation.setAttribute("type", "rotate")
    animation.setAttribute("values", "30");
    
    var curElement2 = document.getElementById("ghost");
    curElement2.appendChild(animation);*/
}
function longerEyes(){
    //works on one eye
    animation.setAttribute("id","enlargeeyes")
    animation.setAttribute("attributeName", "ry");
    animation.setAttribute("type", "translate")
    animation.setAttribute("values", "6;9;");
    animation.setAttribute("dur", "3s");
    animation.setAttribute("repeatCount", "1");
    console.log("x");
    var curElement4 = document.getElementById("eye-r-ball");
    curElement4.appendChild(animation);
}
function widerEyes(){
    //works on one eye
    animation.setAttribute("id","enlargeeyes")
    animation.setAttribute("attributeName", "rx");
    animation.setAttribute("type", "translate")
    animation.setAttribute("values", "4;6;");
    animation.setAttribute("dur", "3s");
    animation.setAttribute("repeatCount", "1");
    console.log("x");
    var curElement5 = document.getElementById("eye-r-ball");
    curElement5.appendChild(animation);
}