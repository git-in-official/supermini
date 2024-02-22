$(document).ready(function () {
  // Hide all portfolio-items by default.
  $(".portfolio-item").hide();

  // Handle menu item click events.
  $(".menu-container a").on("click", function (e) {
    e.preventDefault(); // Prevent default event.

    // Get the data-target value of the clicked item.
    var target = $(this).data("target");

    // Show only the corresponding portfolio-item and hide the rest.
    $(".portfolio-item").each(function () {
      if ($(this).hasClass(target)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

    // Remove 'active' class from all other a tags
    $(".menu-container a").not(this).removeClass("active");

    // Add 'active' class to clicked a tag
    $(this).addClass("active");
  });

  // Automatically click on the "ALL" item when the page loads to show all items and mark it as active.
  $('.menu-container a[data-target="all"]').click();
});
