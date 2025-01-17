---
title: Context-aware Geographic Information Systems for Real-time Security Event Forecasting
theme: white
revealOptions:
  transition: 'slide'
  controls: true
  slideNumber: true
---

# Context-aware Geographic Information Systems for Real-time Security Event Forecasting

<small>Richard Wen</small>  
<small>rwen@ryerson.ca</small>  
  
<small>Department of Civil Engineering<br>Ryerson University</small>  
  
<small>August 28, 2018</small>
  
<small>*Research proposal to fulfil a requirement for the degree of<br>Doctor of Philosophy in Civil Engineering*</small>  

---

# Outline

1. Introduction
2. Background
3. Methods
4. Preliminary Results
5. Conclusion
6. References

---

# 1. Introduction

---

## Over 40 Million Deaths Per Year

<!-- .slide: data-background="black" -->
<iframe data-src="./edit/visuals/global_deaths.html" width="100%" height="500px"></iframe>

---

## Security Events

<!-- .slide: data-background="black" data-background-transition="none" data-background-image="./edit/img/security_event.png" -->

* Disrupt society and daily life
* Economic burden
* Loss of life

---

### Frequent

<!-- .slide: data-state="frequent" data-background="black" data-background-transition="none" data-background-iframe-id="visual" data-background-iframe="./edit/visuals/ksi_cluster.html"  -->

---

### Non-random

<!-- .slide: data-state="non-random" data-background="black" data-background-transition="none" data-background-iframe="./edit/visuals/ksi_heat.html" -->

---

### Situational

<!-- .slide: data-state="situational" data-background="black" data-background-transition="none" data-background-iframe="./edit/visuals/ksi_bar.html" -->

---

## Forecasting Security Events

---

## Context

* Situation surrounding event
* What event and when will it occur?
* How probable is the event given the context?

---

<!-- .slide: data-state="context-data" data-background-iframe="./edit/visuals/context_data.html" -->

---

## Geographic Information Systems (GIS)

* Set of hardware and software
* Store, manage, and present spatial data
* Information extraction from data

---

## Context-aware GIS

* Enable GIS to use contextual data
* Adapt and react to context
* Improve security event forecasts

---

## Research Objectives

1. Develop methods/models for context-aware GIS
2. Conduct experiments with context-aware GIS

---

## Objective 1 Components

1. **Data Source**: contextual data extraction
2. **Database**: store and query 1.
3. **Data**: process and manipulate 2.
4. **Model**: forecast security events using 3.
5. **Visualization**: present outputs of 4.

---

## Objective 2 Criteria

1. **Relevant**: involves security event forecasting
2. **Practical**: uses non-artificial data
3. **Measurable**: uses qualitative or quantitative forecasting model assessments
4. **Reproducible**: results can be produced again given the same data

---

## Contributions

1. Conceptual framework for context-aware GIS
2. Software framework for context-aware GIS
3. Software architecture for context-aware GIS
4. Methods for forecasting security events

---

# 2. Background

---

## Web GIS and Architectures

---

## Client Server

<img data-src="./edit/img/client_server.svg"></img>

---

## Service-oriented

<img data-src="./edit/img/service_oriented.svg"></img>

---

## Cloud-based

<img data-src="./edit/img/cloud_based.svg"></img>

---

## Context-aware Systems

> "A system is context-aware if it uses context to provide relevant information and or services to the user, where relevancy depends on the user’s task."

<span class="reference">Ref: Dey (2001)</span>

---

## Natural Language Processing (NLP)

* Extracting useful data from text
* Structure contextual data
* N-grams, word distributions

---

## Machine Learning

* Discover and apply patterns from data
* **Supervised**: predict from known values
* **Clustering**: grouping similar data
* **Incremental Learning**: continuous model updates

---

## Problem Statement

* **Real-time GIS**: large continuous spatial data
* **Event-driven Architecture**: react to events
* **Context-aware GIS**: react and adapt to context

---

## Context-aware GIS Integration

<img data-src="./edit/img/figure_cagis.svg" width="100%"></img>

---

# 3. Methods

---

## Software Frameworks

* Produce applications in a standardized way
* Component interaction
* Reusable, consistent, comparable

---

## Software Development

* Object-oriented programming
* Test-driven approach
* Prototyping

---

## Software Components

<img data-src="./edit/img/figure_software_framework.svg"></img>

---

## Base Component

<img data-src="./edit/img/figure_base_component.svg"></img>

---

## Component Interaction

<img data-src="./edit/img/swframework_interaction.svg"></img>

---

## Component Extension

<img data-src="./edit/img/swframework_extension.svg"></img>

---

## Data Component

* Extract, store, process data
* Location, time, and numbers
* NLP methods for text

---

## NLP Word Distribution

Given `a a b c c d`:

| word | count |
|------|-------|
| a    | 2     |
| b    | 1     |
| c    | 2     |
| d    | 1     |

---

## Model Component

* Statistics and machine learning
* **Supervised classification**: linear regression, naive bayes, decision trees
* **Clustering**: k-means, mixture models
* **Incremental Learning**: neural networks

---

## Metric Component

| Metric    | Description                                     |
|-----------|-------------------------------------------------|
| Accuracy  | Proportion of correct values     |
| Precision | Correct values using model categories  |
| Recall    | Correct values using actual categories |
| F1 Score  | Accuracy using precision and recall             |
| RMSE      | Scaled diff. of actual and model values    |

---

## Interface Component

* Map
* Dashboard

---

<!-- .slide: data-background-iframe="./edit/visuals/dashboard-example/index-dev.html" -->

---

## Potential Experiments

1. Traffic Collision Forecasting
2. Crime Event Forecasting
3. Health Symptom Monitoring and Forecasting

---

## Traffic Collision and Crime Event Forecasting

* Data: social media, open data, government
* Methods: NLP, supervised learning
* Outcomes: web app and models for forecasts

---

## Health Symptom Monitoring and Forecasting

* Data: social media, open data, government
* Methods: NLP, supervised learning, clustering
* Outcomes: web app and models for monitoring and forecasts

---

# 4. Preliminary Results

---

## Software

* Developed Node.js packages for Twitter data, MongoDB, and PostgreSQL
* Explored potential software for framework components
* Hbase, GeoMesa, scikit-learn, Apache Kafka, D3.js

---

<!-- .slide: data-background="black" data-background-transition="none" data-background-iframe="http://geocolab.ryerson.ca/geosocial/" -->

---

# 5. Conclusion

* Context-aware GIS framework and architecture
* Experiments of context-aware GIS
* Methods for forecasting and monitoring security events

---

<!-- .slide: data-state="summary" data-background-iframe="./edit/visuals/summary.html" -->

---

# 6. References

---

<small>
* Dey, A. K. (2001). Understanding and using context. Personal and ubiquitous computing, 5(1), 4–7.
* World Health Organization. (2015). Global status report on road safety 2015: Monitoring health for the sustainable. Retrieved June 26, 2018, from http://www.who.int/violence_injury_prevention/road_safety_status/2015/en/
* World Health Organization. (2018). World health statistics 2018: Monitoring health for the sdgs. Retrieved June 26, 2018, from http://www.who.int/gho/publications/world_health_statistics/2018/en/
* World Health Organization, United Nations Office on Drugs and Crime, & United Nations Development Programme. (2014). Global status report on violence prevention 2014. Retrieved June 26, 2018, from http://www.who.int/violence_injury_prevention/publications/violence/en/
</small>
