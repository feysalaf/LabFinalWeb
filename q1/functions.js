console.log("Integrated!");


const base_url = "https://dummyjson.com/posts/";

$(function() {
    console.log("Initial function!");
    loadPost();
    $("#to_populate").on("click", ".btn-outline-danger", deleteProduct);
    //bindingss
    // $("#ajax_call").on("click",".my_btn",custom_function);
    //$("#to_populate").on("click", ".btn-warning", handleUpdate);
    $("#addBtn").click(addProduct);
    $("#updateSave").click(function() {
      var id = $("#updateId").val();
      var title = $("#updateTitle").val();
      var body = $("#updateBody").val();
      $.ajax({
        url:  base_url + id,
        data: { title, body },
        method: "PUT",
        success: function(response) {
          console.log(response);
          loadProduct(); 
          $("#updateModal").modal("hide");
          //
        }
      });
    });
  });


//ADD Data to Server
function addProduct() {
    var title = $("#title").val();
    var body = $("#body").val();
    console.log("ADDPROD");
    console.log(body);
    $.ajax({
      url: base_url,
      method: "POST",
      data: { title, body },
      success: function(response) {
        console.log(response);
        $("#title").val("");
        $("#body").val("");
        loadProduct();
        $("#exampleModal").modal("hide");
      }
    });
  }

 
//GET DATA from server
function loadPost() {
    console.log("loadPost()");
    $.ajax({
      url: base_url,
      method: "GET",
      error: function(response) {
        var products = $("#to_populate");
        to_populate.html("An Error has occured");
      },
      success: function(response) {
        console.log(response);
        console.log("response loaded..");
        console.log(response.posts[0])
        var to_populate = $("#to_populate");
        to_populate.empty();
        console.log(response.length);
        for (var i = 0; i < 30; i++) {
          var rec = response.posts[i];
          console.log(rec);
          to_populate.append(
            `<div class="to_populate" data-id="${rec}">

                <p style="float:right">
                <button class="btn btn-outline-warning btn-sm float-right">Edit</button> 
                <button class="btn btn-outline-danger btn-sm float-right">Delete</button>
                </p>
                <h5>Title:</h5>${rec.title}
                <h5>Body:</h5>${rec.body}
                <h5>UserID:</h5>${rec.reactions}
                <h5>Tags:</h5>${rec.tags}
                <h5>Reactions:</h5>${rec.userId}
                
            </div>`
          );
          // recipes.append("<div><h3>" + rec.title + "</h3></div>");
        }
      }
    });
  }