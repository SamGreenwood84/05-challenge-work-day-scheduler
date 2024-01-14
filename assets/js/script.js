$(document).ready(function () {
  // Function to update the current day in the header
  function updateCurrentDay() {
    var now = dayjs();
    $("#currentDay").text(now.format("MMMM D, YYYY"));
  }

  // Display the current day when the page loads
  updateCurrentDay();

  // Save user input to local storage when the save button is clicked
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();

    localStorage.setItem(timeBlockId, userInput);
    console.log("userInput");
  });

  // Compare current time with each time block and apply appropriate classes
  function updateHourlyBlocks() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var $timeBlock = $(this);
      var blockHour = parseInt($timeBlock.attr("id").split("-")[1]);

  // Remove all classes and add the appropriate class based on the comparison
      if (blockHour < currentHour) {
        $timeBlock.removeClass("present future").addClass("past");
      } else if (blockHour === currentHour) {
        $timeBlock.removeClass("past future").addClass("present");
      } else {
        $timeBlock.removeClass("past present").addClass("future");
      }
    });
  }

  // Apply the color-coding initially
  updateHourlyBlocks();

  // Periodically update the color-coding every minute
  setInterval(function () {
    updateHourlyBlocks();
  }, 60000);

  // Load saved events from local storage when the page loads
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var savedInput = localStorage.getItem(timeBlockId);

    if (savedInput) {
      $(this).find(".description").val(savedInput);
    }
  });
});
