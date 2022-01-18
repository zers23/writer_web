let downloadBtn = document.getElementById("download");
let text = document.getElementById("text");
let heading = document.getElementById("heading");

let date = new Date();
let userHeading = "baseName";
let userData = "";

heading.value = "";


downloadBtn.addEventListener("click", () => {
    userHeading = heading.value;
    userData = text.value;
    downloadAsFile(userData);
});

function downloadAsFile(data) {
    let a = document.createElement("a");
    let file = new Blob([data]);
    a.href = URL.createObjectURL(file);
    a.download = userHeading + ".txt";
    a.click();
}

text.addEventListener("keydown", function(e) {
    if (e.key == "Tab") {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value =
            this.value.substring(0, start) + "\t" + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 1;
    }
});

