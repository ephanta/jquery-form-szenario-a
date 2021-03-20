$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    var checked = $("input[type=checkbox]:checked").length;
    if (!checked) {
      alert("Sie müssen mindestens eine Farbauswahl treffen.");
      return false;
    }
    var dataArray = $(this).serializeArray();
    for (var i = 0; i < dataArray.length; i++) {
      if (dataArray[i].name === "day") {
        var day = dataArray[i].value;
        $(".answers .answer.day").html(day + ". ");
      } else if (dataArray[i].name === "month") {
        var month = dataArray[i].value;
        $(".answers .answer.month").html(month + " ");
      } else if (dataArray[i].name === "color1") {
        var color1 = dataArray[i].value;
        $(".answers .answer." + color1).prop("checked", true);
      } else if (dataArray[i].name === "color2") {
        var color2 = dataArray[i].value;
        $(".answers .answer." + color2).prop("checked", true);
      } else if (dataArray[i].name === "color3") {
        var color3 = dataArray[i].value;
        $(".answers .answer." + color3).prop("checked", true);
      } else if (dataArray[i].name === "color4") {
        var color4 = dataArray[i].value;
        $(".answers .answer." + color4).prop("checked", true);
      } else{
        var val = dataArray[i].value;
        $(".answers .answer." + dataArray[i].name).html(val);
        console.log(val);
      }
    }
  });
});