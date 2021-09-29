let downloadBtn = document.getElementById("download");
let text = document.getElementById("text");
let heading = document.getElementById("heading");

var date = new Date();
let userHeading = "baseName";
let userData = "";

downloadBtn.addEventListener("click", () => {
  userHeading = heading.value;
  userData = text.value;
  if (userHeading == "") {
    userHeading =
      "" +
      date.getDate() +
      "-" +
      date.getMonth() +
      "-" +
      date.getFullYear() +
      "_" +
      date.getHours() +
      "-" +
      date.getMinutes() +
      "-" +
      date.getSeconds();
  }
  downloadAsFile(userData);
});

function downloadAsFile(data) {
  let a = document.createElement("a");
  let file = new Blob([data]);
  a.href = URL.createObjectURL(file);
  a.download = userHeading + ".txt";
  a.click();
}

text.addEventListener("keydown", function (e) {
  if (e.key == "Tab") {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value =
      this.value.substring(0, start) + "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart = this.selectionEnd = start + 1;
  }
});
