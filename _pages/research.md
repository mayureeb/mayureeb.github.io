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
Memo: Cognitive Impairment and Driving Performance in Youth After Concussion

This memo synthesizes findings from three significant studies that collectively advance our understanding of how concussions impact driving performance among young adults, with implications for developing a fitness-to-drive assessment tool.

Cognitive Impairment and Driving Skills in Youth After Concussion
Journal of Neurotrauma, 2023. DOI: 10.1089/neu.2022.0308
This study investigated the impact of concussions on cognitive processes critical for driving in young adults aged 16-25. Through the use of a driving simulator and neurocognitive tests, the research revealed that concussed individuals exhibited impaired fluid cognitive skills and reported higher symptom severity compared to controls. Although the differences in simulated driving performance were minor, significant correlations between neurocognitive scores and driving tasks suggest the potential of neurocognitive screening to predict driving readiness post-concussion.
Driving Characteristics of Young Adults Prior to and Following Concussion
Traffic Injury Prevention, 2024. DOI: 10.1080/15389588.2023.2250493
This study focused on pre- and post-concussion driving behaviors in young adults. The findings revealed that concussed individuals had a history of more driving citations, higher rates of psychiatric disorders, and a greater likelihood of previous concussions compared to their uninjured peers. Post-concussion, most did not alter their driving habits, though some reported reduced night driving. The study highlights the need for clear, evidence-based guidelines for post-concussion driving.
Neurocognitive Markers and Driving Performance: A Cluster Analysis
Transportation Research Part F: Traffic Psychology and Behaviour, 2024. DOI: 10.1016/j.trf.2024.03.018
Using cluster analysis on neurocognitive test data from a driving simulator study, this research categorized drivers into high, moderate, and low-functioning groups. Both concussed and non-concussed individuals appeared in each group, with the low-functioning group demonstrating the highest concussion incidence and poorest driving performance. These findings underscore the potential of neurocognitive testing in identifying at-risk drivers and support the ongoing development of a fitness-to-drive assessment tool.
Together, these studies contribute valuable insights into the relationship between neurocognitive functioning and driving performance following a concussion. The results support the use of neurocognitive tests in assessing fitness to drive, with significant implications for public health and road safety.



<div><h2>Past Researh Projects </h2> </div>
<hr style="border-color:black;">
{% for post in site.research reversed %}
  {% if post.PublicationStatus == 'WorkingPaper' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}


• Developing Artificial Intelligence based framework to analyze in-vehicle driver/occupant status (In collaboration with DENSO International America Inc.).
 
• Risk Mitigation and Modeling of Driver Behaviors in Scenarios of Varying Complexities: Developed an experimental design for a Driving Simulator study with the Toyota Safety Research Center to identify "Risk Mitigation and Modeling of Driver Behaviors in Scenarios of Varying Complexities" and carried out data-collection for 38 human subjects. Developed a One-Class Support Vector Machine model for analyzing challenging acceleration/braking events in time-series driving data. This provided a basic understanding of the behavioral patterns of human driving at roadway intersections. Developed a Reinforcement Learning framework for understanding driver decision-making. This work is in progress and will be used to inform the decision-making for autonomous vehicles.

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
