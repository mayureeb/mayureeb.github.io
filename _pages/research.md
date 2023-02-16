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



<div><h2>Past Researh Projects </h2> </div>
<hr style="border-color:black;">
{% for post in site.research reversed %}
  {% if post.PublicationStatus == 'WorkingPaper' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
 


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
