---
layout: archive
title: "Research"
permalink: /research/
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

<div><h2> Ongoing Research Projects </h2></div>
<hr style="border-color:black;">
{% for post in site.research reversed %}
  {% if post.PublicationStatus == 'Published' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}



• Developing Artificial Intelligence based framework to analyze in-vehicle driver/occupant status (In collaboration with DENSO International America Inc.).

• Understanding the neurocognitive impact of concussion on simulated and real-world driving performance among young drivers (Funded by the National Institute of Health (NIH)).

<div><h2>Past Researh Projects </h2> </div>
<hr style="border-color:black;">
{% for post in site.research reversed %}
  {% if post.PublicationStatus == 'WorkingPaper' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
 
• Risk Mitigation and Modeling of Driver Behaviors in Scenarios of Varying Complexities: Developed an experimental design for a Driving Simulator study with the Toyota Safety Research Center to identify "Risk Mitigation and Modeling of Driver Behaviors in Scenarios of Varying Complexities" and carried out data-collection for 38 human subjects. Developed a One-Class Support Vector Machine model for analyzing challenging acceleration/braking events in time-series driving data. This provided a basic understanding of the behavioral patterns of human driving at roadway intersections.Developed a Reinforcement Learning framework for understanding driver decision-making. This work is in progress and will be used to inform the decision-making for autonomous vehicles.

• Developed a geospatial database and a data fusion methodology for capturing the speed limit on the National Highway System in the United States. This project was done in collaboration with the Federal Highway Administration (FHWA-USDOT). The database developed from this study is being used as an open database by FHWA to advance its linear-referencing-system-based datasets.

•Adapted machine learning-based methodologies to analyze transit data and capture travel behavior. Transit agencies used this work to inform their decision-making. Developed a geospatial database for storing the electronic smart card transit fare data for Seattle provided by nine transit agencies.

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
