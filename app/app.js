function initListeners() {
  // Define variables for HTML content
  var aboutPageContent =
    '<div id="about" class="page row"><div class="col-md-6 px-0"><img src="./images/austin-curtis-4Bo8mxKpPqw-unsplash.jpg" alt="" class="img-fluid" /></div><div class="col-md-6 p-5"><h2>About Page</h2><p>Welcome to the About Page</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus labore vel eum distinctio sint autem dignissimos at alias ullam, iste, temporibus impedit mollitia doloribus explicabo tempora inventore minima iusto. Laudantium, debitis. Fugit natus adipisci ipsam deserunt dicta, totam voluptate, est ratione eos corporis aperiam, laborum suscipit saepe ipsum aliquam quibusdam assumenda error? Corrupti necessitatibus aliquid beatae voluptas esse tempore magni quidem, iste optio explicabo, repudiandae possimus. Doloremque officiis molestias maiores facere praesentium minima adipisci possimus. Eos doloremque minus, officiis iusto tenetur necessitatibus temporibus, deleniti corrupti ipsam aperiam beatae quidem ad. Quas maxime consequuntur aliquam pariatur quae vero numquam perspiciatis voluptas!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor nihil veniam ea aut odit impedit fuga eum et eveniet assumenda eaque quo ullam, dignissimos nemo necessitatibus. Hic delectus perspiciatis doloremque, cumque cupiditate placeat nostrum aspernatur illum sequi fugiat labore.</p></div></div>';

  var homePageContent =
    '<div id="home" class="page p-5 text-white"><h1>Home Page</h1><p class="home_p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, cumque magnam! Commodi enim molestiae aliquid at illo delectus, excepturi aliquam iure non aut, in quasi numquam quae, minus perspiciatis nesciunt?</p></div>';

  var servicesPageContent =
    '<div id="services" class="page"><section><div class="row"><div class="column"><div class="card"><div class="icon-wrapper"><i class="fas fa-hammer"></i></div><h3>Lorem Ipsum Dolor</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.</p></div></div><div class="column"><div class="card"><div class="icon-wrapper"><i class="fas fa-brush"></i></div><h3>Lorem Ipsum Dolor</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.</p></div></div><div class="column"><div class="card"><div class="icon-wrapper"><i class="fas fa-wrench"></i></div><h3>Lorem Ipsum Dolor</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.</p></div></div><div class="column"><div class="card"><div class="icon-wrapper"><i class="fas fa-truck-pickup"></i></div><h3>Lorem Ipsum Dolor</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.</p></div></div><div class="column"><div class="card"><div class="icon-wrapper"><i class="fas fa-broom"></i></div><h3>Lorem Ipsum Dolor</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.</p></div></div><div class="column"><div class="card"><div class="icon-wrapper"><i class="fas fa-plug"></i></div><h3>Lorem Ipsum Dolor</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.</p></div></div></div></section></div>';

  var contactPageContent =
    '<div id="contact" class="page"><div class="container"><h1>Contact Us</h1><form action="" method="post"><div class="form-group"><label for="name">Name:</label><input type="text" id="name" name="name" required /></div><div class="form-group"><label for="email">Email:</label><input type="email" id="email" name="email" required /></div><div class="form-group"><label for="message">Message:</label><textarea id="message" name="message" required></textarea></div><div class="form-group"><button type="submit">Submit</button></div></form></div></div>';

  // Function to handle click event on nav links
  function handleNavClick(e) {
    e.preventDefault(); // Prevent default link behavior

    var target = $(this).data("target"); // Get the target data attribute
    var content;

    // Determine content based on target
    if (target === "about") {
      content = aboutPageContent;
    } else if (target === "home") {
      content = homePageContent;
    } else if (target === "services") {
      content = servicesPageContent;
    } else if (target === "contact") {
      content = contactPageContent;
    }

    // Set the content
    $("#content").html(content);
  }

  // Attach click event to nav links
  $(".nav-link").click(handleNavClick);

  // Show the home page by default
  $("#home").show();
}

$(document).ready(function () {
  initListeners();
});
