//displays current date in the header
$(function () {
  var now = dayjs();

  $("#currentDay").text(dayjs().format("MMMM D, YYYY"));

  //saves user input to local storage when the save button is clicked
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();

    localStorage.setItem(timeBlockId, userInput);
    console.log("userInput");
  });

  //gets the current hour to then compare to each timeblock
  var currentHour = now.hour();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Remove all classes and add the appropriate class based on the comparison
    $(this).removeClass("past present future").addClass(
      blockHour < currentHour
        ? "past"
        : blockHour === currentHour
        ? "present"
        : "future"
    );
  });

  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var savedInput = localStorage.getItem(timeBlockId);

    if (savedInput) {
      $(this).find(".description").val(savedInput);
    }
  });
});
