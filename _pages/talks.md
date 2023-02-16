---
layout: archive
title: "Publications & Presentations"
permalink: /talks/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}




{% assign button_style = 'margin: 5px;font-size: 12px; ;;padding:5px 10px 5px 10px;background:white;color:#black;outline:none;border-radius:3px;border: 1px solid black;' %}
<div>
    {% for tag_sample in tags_names %}
  	<button id = "b_{{tag_sample}}" onclick="checked('{{tag_sample}}')" style="{{button_style}}" onmouseover="func_hover('b_{{tag_sample}}')" onmouseout= "func_out('{{tag_sample}}')">
	<input type="checkbox" id="{{tag_sample}}"  checked=checked style="margin-right:8px">{{tag_sample}}</button>
    {%endfor%}
    
</div>

<div><h2> Work in Progess </h2></div>
<hr style="border-color:black;">
{% for post in site.research reversed %}
  {% if post.PublicationStatus == 'Published' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}



Understanding Factors Related to Driver Distraction at Pedestrian Crosswalks, Mayuree Binjolkar, Linda Boyle, In-preparation, Transportation Research – Part F

Kristina E. Patrick, Emily Kroshus, Linda Ng Boyle, Jin Wang, Mayuree Binjolkar, Beth Ebel, Frederick P. Rivara, Characteristics of Young Adults Prior to Sustaining Concussion, Submitted to Injury Prevention, 2023

<div><h2>Publications and Presentations</h2> </div>
<hr style="border-color:black;">
{% for post in site.research reversed %}
  {% if post.PublicationStatus == 'WorkingPaper' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
 
Rivara, Frederick, Beth Ebel , Mayuree Binjolkar, Amelia Hanron, Emily Kroshus, Linda Boyle, Kristina Patrick. Cognitive impairment and driving skills in youth after concussion, Journal of Neurotrauma, 2022

Binjolkar, M., & Boyle, L. N. (2022, September). Capturing driver status using naturalistic driving study data: implications for assessing health and safety. In Proceedings of the Human Factors and Ergonomics Society Annual Meeting (Vol. 66, No. 1, pp. 1360-1364). Sage CA: Los Angeles, CA: SAGE Publications

Rivara, Frederick, Mayuree Binjolkar, Brianna Mills, Jin Wang, Linda Boyle, Emily Kroshus, Kristina Patrick, Amelia Hanron, and Beth Ebel. "079 Driving by youth after a concussion." (2022): A27-A27. The Society for Advancement of Violence and Injury Research (SAVIR) 2022 Conference

Using Inverse Reinforcement Learning to predict the impact of distraction on future driver performance, Joint Statistical Meeting, JSM, 2020

Viruses, Visualization, and Validation: Interactive mining of COVID-19 literature, Varun Mittal, Naveen Garg, Yos Wagenmans, Mayuree Binjolkar, Rashad Hatchett, Varik Hoang, Emma Biggs Lanier, Ling-Hong Hung and Ka Yee Yeung, presented at Intelligent Systems for Molecular Biology (ISMB) 2020 Conference, Organized by International Society for Computational Biology (ISCB)

Human Factors and Autonomous Vehicles, Invited Speaker, ITE and IMSA Joint Conference, 2020

Developing A Geospatial Database Covering Posted Speed Limit Information for the Full Extent of the National Highway System: Mayuree Binjolkar, Yinhai Wang. Invited Speaker at the GIS-T Symposium, Orlando, Florida, April 2019

Developing A Geospatial Database Covering Posted Speed Limit Information for the Full Extent of the National Highway System: Mayuree Binjolkar, John Ash, Ziqiang Zeng and Yinhai Wang. Presented in Annual PacTrans Region 10 Transportation Conference, 2018

Improving Urban Mobility Through Urban Analytics Using Electronic Smart Card Data: Mayuree Binjolkar, Daniel Dylewsky, Andrew Ju, Wenonah Zhang, Mark Hallenbeck. Presented in Data Science for Social Good Conference, University of Chicago, 2017  

Handling Bias in Large Urban Datasets: Mayuree Binjolkar, Mark Hallenbeck, Presented at Cascadia Urban Analytics Cooperative Summit, 2017

<script> 
  
  function checked(tag){
         
          let chec = document.getElementById(tag);
	  let b_tag = 'b_'+tag;
	  let button_tag = document.getElementById(b_tag);
	  
          
  
          if (chec.checked == false){
              chec.checked = true; 
              toggle(tag,'block');
	      button_tag.style.border = "1px solid black";
	      button_tag.style.backgroundColor = "white";
              
          }
          else if (chec.checked == true) {
              chec.checked = false;
              toggle(tag,'none');
	      button_tag.style.border = "1px solid black";
	      button_tag.style.backgroundColor = "#878484";
              
          }
  }
  
  function toggle(className, displayState){
          
          var elements = document.getElementsByClassName(className);
          for (var i = 0; i < elements.length; i++){
               elements[i].style.display = displayState;
          }
  }
     
  function func_hover(tag){
    let elemento = document.getElementById(tag);
    elemento.style.backgroundColor = "#878484";
    elemento.style.border = "1px solid black";
					      
    
    
  }
    
  function func_out(tag){
    
    let b_tag = 'b_'+tag;
    let chec = document.getElementById(tag);
    let elemento = document.getElementById(b_tag);
    if (chec.checked == false){elemento.style.border = "1px solid black";}	
    else {elemento.style.backgroundColor = "white";}
   
    
	}
 
            
</script>
