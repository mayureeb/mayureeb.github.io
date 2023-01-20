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

{% assign button_style = 'margin: 10px;font-size: 14px;font-weight: bold;width: 100px;height: 30px;padding:1px;background:#505050;color:#efeded;outline:none;
    border-radius: 5px;border: 2px solid black;transition: 0.3s;' %}
<div>
    <button id = "b_tag1" onclick="checked('tag1')" style="{{button_style}}" onmouseover="func_hover('b_tag1')" onmouseout= "func_out('tag1')">
	    <input type="checkbox" id="tag1" disabled="disabled" checked=checked style="display:none">Tag 1</button>
    <button id = "b_tag2" onclick="checked('tag2')" style="{{button_style}}" onmouseover="func_hover('b_tag2')" onmouseout= "func_out('tag2')">
	    <input type="checkbox" id="tag2" disabled="disabled" checked=checked style="display:none">Tag 2</button>
    <button id = "b_tag3" onclick="checked('tag3')" style="{{button_style}}" onmouseover="func_hover('b_tag3')" onmouseout= "func_out('tag3')">
	    <input type="checkbox" id="tag3" disabled="disabled" checked=checked style="display:none">Tag 3</button>
    <button id = "b_tag4" onclick="checked('tag4')" style="{{button_style}}" onmouseover="func_hover('b_tag4')" onmouseout= "func_out('tag4')">
	    <input type="checkbox" id="tag4" disabled="disabled" checked=checked style="display:none">Tag 4</button>
</div>
  <div><h2> Publications </h2></div>
{% for post in site.research reversed %}
  {% if post.working == 0 %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}


<div><h2> Working Papers </h2> </div>
{% for post in site.research reversed %}
  {% if post.working == 1 %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
 
 
 <div><h2> Work in Progress </h2></div>
{% for post in site.research reversed %}
  {% if post.working == 2 %}
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
	      button_tag.style.border = "2px solid black";
	      button_tag.style.backgroundColor = "#505050";
              
          }
          else if (chec.checked == true) {
              chec.checked = false;
              toggle(tag,'none');
	      button_tag.style.border = "0px solid black";
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
    elemento.style.border = "#2px solid black";
					      
    
    
  }
    
  function func_out(tag){
    
    let b_tag = 'b_'+tag;
    let chec = document.getElementById(tag);
    let elemento = document.getElementById(b_tag);
    if (chec.checked == false){elemento.style.border = "#0px solid black";}	
    else {elemento.style.backgroundColor = "#505050";}
   
    
	}
 
            
</script>
