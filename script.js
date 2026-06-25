function searchJobs() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let jobs = document.querySelectorAll(".job-card");

    jobs.forEach(job => {

        let title = job
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (title.includes(input)) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }

    });
}



const applyButtons =
document.querySelectorAll(".apply-btn");

applyButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("🎉 Application Submitted Successfully!");

    });

});