document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        myFunction();
        document.getElementById("input").value = "";
    }
})
function myFunction() {
    let input = document.getElementById("input").value;
    let result;
    if (input >= 40) {
        result = `Your Entered ${input} and Your Passed The Exam`
        document.getElementById('output').style.background = "green"
    }
    else {
        result = `Your Entered ${input} and Your Failed The Exam`
        document.getElementById('output').style.background = "red"
    }
    document.getElementById('output').style.display = "flex"
    document.getElementById("output").innerHTML = result;
}
