---
layout: archive
title: "Achievement and Services"
permalink: /services/
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

<div><h2> Achievements </h2></div>
<hr style="border-color:black;">
{% for post in site.research reversed %}
  {% if post.PublicationStatus == 'Published' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}


Member, ACP-70 Standing Committee on Highway Traffic Monitoring, Transportation Research Board, National Academies of Sciences, Engineering and Medicine, April 2022 - Present

Grace Hopper Celebration Scholarship 2021

Senator Scott White Memorial Scholarship 2020

ACM SIGKKD (Conference of Knowledge Discovery) 2020 Student Participation Award

Outstanding Graduate Student Scholarship, Institute of Transportation Engineers, 2020

William A. Bulley summer fellowship by the Department of Civil and Environmental Engineering, Summer – 2019

Data Science for Social Good Summer Research Fellowship, eScience Institute, Urban@UW & Microsoft, Summer – 2017

“Best Idea” award in the Norwegian Transportation Design Competition, June 2018

Provided full scholarship by the University of Washington for the Norwegian Transportation Design Competition, June 2018

1st Place, Student Competition, Institute of Transportation Engineers, Washington State Chapter, 2017

Received 3rd Place in the Annual Traffic Bowl competition from the Institute of Transportation Engineers, Portland, Oregon, October 2018

Technion – International School of Engineering Academic Scholarship (2011-2015)

<div><h2>Services </h2> </div>
<hr style="border-color:black;">
{% for post in site.research reversed %}
  {% if post.PublicationStatus == 'WorkingPaper' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
 
Member, ACP-70 Standing Committee on Highway Traffic Monitoring, Transportation Research Board, National Academies of Sciences, Engineering and Medicine, April 2022 - Present

President, Institute of Transportation Engineers, University of Washington Student Chapter, 2019-2020

President, Indian Student Organization (RSO) - Umang, 2019

Treasurer, Indian Student Organization (RSO) - Umang, 2018

Graduate and Professional Student Senate (GPPS) Representative, Foundation for International Understanding Through Students (FIUTS), 2019

Graduate Student Committee Member, Justice Equity Diversity and Inclusion (JEDI) committee, Department of Civil and Environmental Engineering, 2021-2022

Speaker, National Math and Science Initiative, July 2020

Committee Member, Artificial Intelligence Committee, Transportation and Development Institute, American Society of Civil Engineers (ASCE), 2020 - Present

Transportation Student Conference Chair, Pacific Transportation Consortium Region 10, United States Department of Transportation, October 2019

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
