$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var nameInput = $("#author-name");
  var authorList = $("tbody");
  var authorContainer = $(".author-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#author-form", handleAuthorFormSubmit);
  $(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the initial list of Authors
 getHair();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleAuthorFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertAuthor({
      name: nameInput
        .val()
        .trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertAuthor(authorData) {
    $.post("/api/authors", authorData)
      .then(getAuthors);
  }

  // Function for creating a new list row for authors
function createHairRow(hairData) {
  var newTr = $("<tr>");
  newTr.data("hair", hairData);
  newTr.append("<td> " +hairData.service_provided + "</td>");
  newTr.append("<td> " +hairData.days_provided + "</td>");
  newTr.append("<td> " +hairData.current_price + "</td>");
  return newTR
}
  

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getHair() {
    $.get("/api/hair", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createHairRow(data[i]));
      }
      renderHairList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderHairList(rows) {
    hairList.children().not(":last").remove();
    hairContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      hairList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Author before you can create a Post.");
    authorContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    })
      .then(getAuthors);
  }
});
