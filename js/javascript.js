const alertBanner = document.getElementById("alert");

const user = document.getElementById("search-user");
const message = document.getElementById("message-user");
const send = document.getElementById("message-button");

const notificationsSlider = document.getElementById("notifications-slider");
const publicSlider = document.getElementById("public-slider");

const notificationsHover = document.querySelector(".alarmbell");
const notificationsList = document.querySelector(".notifications-dropdown");

const dropdownBox = document.getElementById("dropdown-box");

const dropdownListItem = document.querySelectorAll(".close-button");
const dropdownListItems = document.querySelectorAll(".dropdown-listitem");

const emailSetting = document.getElementById('email-setting');
const profileSetting = document.getElementById('profile-setting');

const timezone = document.getElementById('timezone');

const saveButton = document.getElementById("settings-save-button");
const cancelButton = document.getElementById("settings-cancel-button");

const options = {
    data: ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"]
};

$("#myInput").easyAutocomplete(options);


//---Functions---//

function setEmailOn() {
    notificationsSlider.classList.add("slider-on");
    notificationsSlider.classList.remove("slider-off");
    notificationsSlider.innerHTML = '<span class="slider-text">ON</span>';
    emailSetting.setAttribute("checked", "checked");
}

function setEmailOff() {
    notificationsSlider.classList.add("slider-off");
    notificationsSlider.classList.remove("slider-on");
    notificationsSlider.innerHTML = '<span class="slider-text">OFF</span>';
    emailSetting.removeAttribute("checked");
}


function setProfileOn() {
    publicSlider.classList.add("slider-on");
    publicSlider.classList.remove("slider-off");
    publicSlider.innerHTML = '<span class="slider-text">ON</span>';
    profileSetting.setAttribute("checked", "checked");
}

function setProfileOff() {
    publicSlider.classList.add("slider-off");
    publicSlider.classList.remove("slider-on");
    publicSlider.innerHTML = '<span class="slider-text">OFF</span>';
    profileSetting.removeAttribute("checked");
}

//--- Dropdown menu ---//
// eventlistener for the alarmbell icon

notificationsHover.addEventListener('click', () => {
    if (notificationsList.style.display == "none") {
        notificationsList.style.display = null;
    } else {
        notificationsList.style.display = "none";
    }
})


//--- Alert banner ---//
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

//eventlistener for when the menu is open. Whenever the user clicks outside of the menu the menu will close.

document.addEventListener("click", (e) => {
    let targetElement = e.target;
    do {
        if (targetElement === dropdownBox) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    if (notificationsList.style.display === "") {
        notificationsList.style.display = "none";
    }
})

//--- Message form ---//

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

//--- Settings sliders ---//


emailSetting.addEventListener('click', () => {
    if (notificationsSlider.classList.contains("slider-off")) {
        setEmailOn();
    } else if (notificationsSlider.classList.contains("slider-on")) {
        setEmailOff();
    }
})

profileSetting.addEventListener('click', () => {
    if (publicSlider.classList.contains("slider-off")) {
        setProfileOn();
    } else if (publicSlider.classList.contains("slider-on")) {
        setProfileOff();
    }
})

// Settings local storage

'use strict';
function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function saveSettings() {
    if ($(emailSetting).is(":checked")) {
        localStorage.setItem('emailsettings', true);
    } else {
        localStorage.setItem('emailsettings', false);
    }

    if ($(profileSetting).is(":checked")) {
        localStorage.setItem('profilesettings', true);
    } else {
        localStorage.setItem('profilesettings', false);
    }
    localStorage.setItem('timezone', timezone.value);
}



window.onload = function () {
    if (supportsLocalStorage()) {
        // set event handlers
        saveButton.addEventListener('click', ()=> {
            saveSettings();
            window.alert("Your settings have been saved.");
        })

        cancelButton.addEventListener('click', ()=> {
            setEmailOn();
            setProfileOn();
            localStorage.clear();

        })


        var emailChecked = JSON.parse(localStorage.getItem('emailsettings'));
        // emailSetting.checked = emailChecked;
        if (emailChecked === true) {
            setEmailOn();
        } else if (emailChecked === false) {
            setEmailOff();
        }

        var profileChecked = JSON.parse(localStorage.getItem('profilesettings'));
        // profileSetting.checked = profileChecked;
        if (profileChecked === true) {
            setProfileOn();
        } else if (profileChecked === false) {
            setProfileOff();
        }

        var timezoneSelection = localStorage.getItem('timezone');
        timezone.value = timezoneSelection;

        if (localStorage.length === 0) {
            timezone.value = "Pacific";
            console.log(timezone.value);
        }
    }
};