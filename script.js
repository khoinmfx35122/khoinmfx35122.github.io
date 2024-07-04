function validateEmail() {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const input = document.getElementById("exampleInputEmail1").value;
  const inf1 = document.querySelector(".inf-first");
  const inf2 = document.querySelector(".information");
  const button = document.querySelector(".btn-primary");
  button.addEventListener("click", function () {
    if (regex.test(input)) {
      inf1.classList.add("hide");
      inf2.classList.remove("hide");
    } else {
      alert("The email address is invalid.");
    }
  });
}
//
let btns = document.querySelectorAll(".btn-lylich");

btns.forEach((btn) => {
  // console.log([btn]);

  btn.addEventListener("click", (event) => {
    // console.log(event.target.textContent);

    // event.target.textContent = "View less";
    let title = event.target.textContent;

    event.target.textContent =
      title == "⬆️ View less" ? "⬇️ View more" : "⬆️ View less";

    let { id } = event.target.dataset;
    let viewMore = document.querySelector(`.${id}`);
    viewMore.classList.toggle("hidden");
  });
});
