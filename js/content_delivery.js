//Content+delivery: meant for the complete content delivery system
//Slightly buggy currently, will be resolved at a later date once this reaches saturation
//for flow control, goto content-flow or for design control refer to main.js
//Harshvardhan Singh 2019. All rights reserved. 

const subject = ["Technology", "Policy", "Business"];

const article_content=[
    {
        "id":"0",
        "subno":"",
        "title": "",
        "art_text": "",
        "author": "",
        "img_src":"",
        "like":""
    },
    
];

/*
document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll(".option").forEach(option => {
        option.onclick=() =>{
        let i=document.querySelector
        load_page();
        count();};
});*/

function count(){
    var title_part=article_content.id;
    document.querySelector(".gtco-blog_header #gtco-logo a").innerHTML = `<a href="index.html">
<img src="images/logo-green.png" height="50px" width="50px" alt="the SNU Review" ></a><em>SNU </em>${title_part}<em> Review</em>`;
}

function load_page(){
    document.querySelector("#question").innerHTML=questions[question_number].ques;
    const options = document.querySelector("#options");
    options.innerHTML='';

}
count();
