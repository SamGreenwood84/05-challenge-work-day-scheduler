# 05-Challenge-Work-Day-Scheduler
**From Module 05:** 

***Third-Party APIs Challenge: Work Day Scheduler***

From Module 05

***User Story***

AS AN employee with a busy schedule

I WANT to add important events to a daily planner

SO THAT I can manage my time effectively

***Acceptance Criteria***

GIVEN I am using a daily planner to create a schedule

WHEN I open the planner

THEN the current day is displayed at the top of the calendar

WHEN I scroll down

THEN I am presented with time blocks for standard business hours of 9am to 5pm

WHEN I view the time blocks for that day

THEN each time block is color-coded to indicate whether it is in the past,
 present, or future

WHEN I click into a time block

THEN I can enter an event

WHEN I click the save button for that time block

THEN the text for that event is saved in local storage

WHEN I refresh the page

THEN the saved events persist

Create a simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

![Alt text](assets/images/05-third-party-apis-homework-demo.gif)

The starter code uses the Day.jsLinks to an external site. library to work with date and time, but feel free to use a different JavaScript solution to handle this functionality.

# Refactored Code

added black line to bottom of header as per the mockup

```javascript
header {
    border-bottom: 10px solid #000000;
}
```

**Added hour 12-17 row time-block**
```javascript
<div id="hour-12" class="row time-block present">
        <div class="col-2 col-md-1 hour text-center py-3">12PM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>

<div id="hour-13" class="row time-block future">
        <div class="col-2 col-md-1 hour text-center py-3">1PM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
<div id="hour-14" class="row time-block future">
      <div class="col-2 col-md-1 hour text-center py-3">2PM</div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>

<div id="hour-15" class="row time-block future">
      <div class="col-2 col-md-1 hour text-center py-3">3PM</div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>

<div id="hour-16" class="row time-block future">
  <div class="col-2 col-md-1 hour text-center py-3">4PM</div>
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>
</div>

<div id="hour-17" class="row time-block future">
  <div class="col-2 col-md-1 hour text-center py-3">5PM</div>
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>
</div>
```
Had to add specific pathways to script.js and style.css 
```javascript
  <script src="C:\Users\sam\Bootcamp\challenges\05-Challenge-Work-Day-Scheduler\assets\js\script.js"></script>
  <link rel="stylesheet" href="C:\Users\sam\Bootcamp\challenges\05-Challenge-Work-Day-Scheduler\assets\css\style.css"/>
```

added .time-block to the past, present and future to affect correct classes
```javascript
.time-block.past {
    background-color: #d3d3d3 !important;
    color: white;
}

.time-block.present {
    background-color: #ff6961 !important;
    color: white;
}

.time-block.future {
    background-color: #77dd77 !important;
    color: white;
}
```

# References

[day.js Library](https://day.js.org/docs/en/installation/node-js)

const dayjs = require('dayjs')

**ask-296418 Learning Assistant Help:**


![Alt text](assets/images/this-dayjs.png)
![Alt text](<assets/images/learning asst-reference.png>)

**Asked for help from Classmate Shawn Meister**

![Alt text](<assets/images/classmate assistance-ppf reference.png>)

