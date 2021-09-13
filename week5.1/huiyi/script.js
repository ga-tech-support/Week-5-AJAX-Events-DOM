const list = [];

const render = () => {
  $(".todo").empty();
  list.forEach((item) => {
    const $itemWrapper = $("<div>").addClass("item-wrapper");
    const $li = $("<li>").text(item).addClass("item");
    const $button = $("<button>").text("Done").addClass("done");
    $itemWrapper.append($li);
    $itemWrapper.append($button);
    $(".todo").append($itemWrapper);
  });
};

$(() => {
  $("#submit-btn").on("click", (event) => {
    let input = $("#input-box").val();
    if (input == "") {
      alert("please enter a value");
    } else {
      list.push(input);
      $(event.currentTarget).trigger("reset");
      $("#input-box").val("");
      render();
    }
    $(".done").on("click", (event) => {
      const currItem = $(event.target).parent();
      currItem.remove();
      $(".complete").append($(currItem));
      $(event.currentTarget).text("Remove");
      $(event.currentTarget).addClass("remove");
      currItem.css("background-color", "#ED6495");
      input = "";

      // remove from complete list
      $(".remove").on("click", (event) => {
        const currItem = $(event.currentTarget).parent();
        currItem.remove();
      });
    });
  });
});
