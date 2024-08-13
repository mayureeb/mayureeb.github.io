---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% if author.googlescholar %}
  You can explore my work further on <u><a href="{{author.googlescholar}}" target="_blank" style="color: #1a73e8;">Google Scholar</a></u>.
{% endif %}

{% include base_path %}

<div style="display: flex; flex-wrap: wrap; margin-top: 20px;">
  {% assign button_style = 'margin: 5px; font-size: 14px; padding: 6px 12px; background-color: #f7f7f7; color: #333; border: 2px solid #333; border-radius: 4px; transition: background-color 0.3s ease;' %}
  {% for tag_sample in tags_names %}
    <button id="b_{{tag_sample}}" onclick="checked('{{tag_sample}}')" style="{{button_style}}" onmouseover="func_hover('b_{{tag_sample}}')" onmouseout="func_out('{{tag_sample}}')">
      <input type="checkbox" id="{{tag_sample}}" checked style="margin-right: 8px;">{{tag_sample}}
    </button>
  {% endfor %}
</div>

<hr style="border-color: #333; margin: 40px 0;">

<h2>Memo: Cognitive Impairment and Driving Performance in Youth After Concussion</h2>
<p>This memo synthesizes findings from three pivotal studies that shed light on the impact of concussions on driving performance among young adults. These studies pave the way for the development of a fitness-to-drive assessment tool with far-reaching public health implications.</p>

<div style="margin-top: 20px;">
  <h3 style="color: #1a73e8;">Cognitive Impairment and Driving Skills in Youth After Concussion</h3>
  <p><strong>Journal of Neurotrauma, 2023. DOI: 10.1089/neu.2022.0308</strong></p>
  <p>This study explores how concussions affect cognitive processes critical to driving in young adults aged 16-25, highlighting the potential of neurocognitive screening for post-concussion driving readiness.</p>

  <h3 style="color: #1a73e8;">Driving Characteristics of Young Adults Prior to and Following Concussion</h3>
  <p><strong>Traffic Injury Prevention, 2024. DOI: 10.1080/15389588.2023.2250493</strong></p>
  <p>This research examines the driving behavior of young adults pre- and post-concussion, underlining the necessity for evidence-based guidelines for post-concussion driving.</p>

  <h3 style="color: #1a73e8;">Neurocognitive Markers and Driving Performance: A Cluster Analysis</h3>
  <p><strong>Transportation Research Part F: Traffic Psychology and Behaviour, 2024. DOI: 10.1016/j.trf.2024.03.018</strong></p>
  <p>Using cluster analysis, this study categorizes drivers based on neurocognitive performance, reinforcing the use of neurocognitive tests in identifying at-risk drivers post-concussion.</p>
</div>

<hr style="border-color: #333; margin: 40px 0;">

<h2>Past Research Projects</h2>

{% for post in site.research reversed %}
  {% if post.PublicationStatus == 'WorkingPaper' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

<ul style="list-style-type: disc; margin-top: 20px;">
  <li><strong>Artificial Intelligence-Based Framework:</strong> Collaborating with DENSO International America Inc., we developed a framework to analyze in-vehicle driver/occupant status.</li>
  <li><strong>Driver Behavior Modeling:</strong> In partnership with the Toyota Safety Research Center, we devised a study to model driver behaviors across varying complexities, utilizing a One-Class SVM model and a Reinforcement Learning framework to enhance decision-making in autonomous vehicles.</li>
  <li><strong>Geospatial Data Fusion:</strong> Created a geospatial database for the US National Highway System in collaboration with FHWA, contributing to an open database that advances linear-referencing-system-based datasets.</li>
  <li><strong>Machine Learning for Transit Analysis:</strong> Developed machine learning methodologies and a geospatial database to capture travel behavior, aiding transit agencies in decision-making processes.</li>
</ul>

<script>
  function checked(tag){
    let chec = document.getElementById(tag);
    let button_tag = document.getElementById('b_'+tag);

    if (chec.checked === false) {
      chec.checked = true;
      toggle(tag,'block');
      button_tag.style.backgroundColor = "#f7f7f7";
    } else {
      chec.checked = false;
      toggle(tag,'none');
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
    elemento.style.backgroundColor = "#ccc";
  }

  function func_out(tag){
    let b_tag = 'b_'+tag;
    let chec = document.getElementById(tag);
    let elemento = document.getElementById(b_tag);
    if (chec.checked == false) { elemento.style.backgroundColor = "#878484"; } 
    else { elemento.style.backgroundColor = "#f7f7f7"; }
  }
</script>
