let tasks = document.querySelectorAll(".task");
let tasksAnswers = document.querySelectorAll(".rightansw");
let tasksWrongAnswers = document.querySelectorAll(".wrongansw");
let progressbar = document.querySelector(".progressbar");
let tasksSolved = 0;


progressbar.style=`width:${tasksSolved}`;
progressbar.setAttribute("aria-valuenow", `${tasksSolved}`);

for (let z = 0; z < tasks.length; z++) {
    tasks[z].style="transform:translateX(5000%);position:absolute;";
    tasks[0].style="transform:translateX(0%);position:inherit";
}
for (let x = 0; x < tasksWrongAnswers.length; x++) {
    tasksWrongAnswers[x].addEventListener("click", function() {
        tasksWrongAnswers[x].style="transition:0.25s;background:#f5d9d9;border-color:#db8989; box-shadow: 0px 5px #db8989;"
    })
}
for (let i = 0; i < tasks.length; i++) {
    tasksAnswers[i].addEventListener("click", function() {
        tasksSolved++;
        let percentTask = tasksSolved / tasks.length * 100;
        progressbar.style=`width:${percentTask}%;`;
        progressbar.setAttribute("aria-valuenow", `${tasksSolved}`);
        tasks[i].style="transition:0.25s;transform:translateX(-50%);opacity:0;position:absolute";
        tasks[i+1].style="transition:0.25s;transform:translateX(0%);opacity:1;position:inherit";
    })
}