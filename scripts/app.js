$(document).ready(function () {
  $(function () {
    $('.chart').easyPieChart({
      easing: 'easeOutBounce',
      size: 120,
      lineWidth: 5,
      scaleColor: "#ffffff",
      barColor: "#8f0000",
      trackColor: "#e2e2e2",
      lineCap: "square",
      onStep: function (from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });
  });

  $(window).on('scroll', function () {
    $("#timeline_block").each(function () {
      if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
        $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });

  function drawChart() {
    var parent = document.getElementById('skills-set-container');
    var skills = data(); //data method is defined inside dataService class
    var newHTML = [];
    $.each(skills, function (index, value) {
      newHTML.push('<div class="col-md-4 col-sm-6 col-xs-6 text-center m-b-20"><div class="chart" data-percent="' +
        value.percentage + '"><span class="percentage">' + value.percentage + '%</span></div><div>' +
        '<span class="skill-title" >' + value.name + '</span ></div ></div > ');
    });
    $("#skills-set-container").html(newHTML.join(""));
  }
  drawChart();
});