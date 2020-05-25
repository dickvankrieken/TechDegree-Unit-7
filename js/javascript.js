const alertBanner = document.getElementById("alert");

const user = document.getElementById("search-user");
const message = document.getElementById("message-user");
const send = document.getElementById("message-button");

const notificationsSlider = document.getElementById("notifications-slider");
const publicSlider = document.getElementById("public-slider")

const notificationsHover = document.querySelector(".alarmbell");
const notificationsList = document.querySelector(".notifications-dropdown");

const dropdownListItem = document.querySelectorAll(".close-button");
const dropdownListItems = document.querySelectorAll(".dropdown-listitem");

// Alert banner
alertBanner.innerHTML =
    `<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});

// Message form

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});

// Settings sliders

notificationsSlider.addEventListener('click', e => {
    const element = e.target;
    if (notificationsSlider.classList.contains("slider-off")) {
        notificationsSlider.classList.add("slider-on");
        notificationsSlider.classList.remove("slider-off");
        notificationsSlider.innerHTML = '<span class="slider-text">ON</span>';
    } else {
        notificationsSlider.classList.add("slider-off");
        notificationsSlider.classList.remove("slider-on");
        notificationsSlider.innerHTML = '<span class="slider-text">OFF</span>';

    }
})

publicSlider.addEventListener('click', e => {
    const element = e.target;
    if (publicSlider.classList.contains("slider-on")) {
        publicSlider.classList.add("slider-off");
        publicSlider.classList.remove("slider-on");
        publicSlider.innerHTML = '<span class="slider-text">OFF</span>';
    } else {
        publicSlider.classList.add("slider-on");
        publicSlider.classList.remove("slider-off");
        publicSlider.innerHTML = '<span class="slider-text">ON</span>';
    }
})

notificationsHover.addEventListener('click', () => {
    if (notificationsList.style.display == "none") {
        notificationsList.style.display = null;
    } else {
        notificationsList.style.display = "none";
    }
})

for (i = 0; i < dropdownListItem.length; i += 1) {
    dropdownListItem[i].addEventListener('click', (e) => {
        const element = e.target;
        dropdownListItem.splice(i, 0);
        console.log(e);
    })
}

document.addEventListener("click", (e) => {
    let targetElement = e.target;
    const dropdownMenu = document.getElementById("dropdown-menu");

        if (targetElement == notificationsList) {
            return;
        } else if (targetElement == notificationsHover) {
            return;
        } else if (notificationsList.style.display === "") {
        notificationsList.style.display = "none";
    }

})