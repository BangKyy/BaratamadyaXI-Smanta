import { getRootDirectory } from "./path.js";
import { setCookie } from "../lib/cookie.js";

// Icon password eye
const iconEye = document.querySelector('.icon');
const iconEye1 = document.querySelector('.icon-after');
const iconEye2 = document.querySelector('.icon-before');
const loginForm = document.querySelector('.login-form');
const formBtn = document.querySelector('.form-btn');

const toggleEye = () => {
    const className = "eye-icon-disabled";
    const isShowed = iconEye1.classList.contains(className);
    isShowed ? iconEye1.classList.remove(className) : iconEye1.classList.add(className);
    isShowed ? iconEye2.classList.add(className) : iconEye2.classList.remove(className);
};

const showError = async (title = "", text = "", icon = "error") => {
    await Swal.fire({ title, text, icon });
};

const showSuccess = async (title = "", text = "", icon = "success") => {
    await Swal.fire({ title, text, icon });
};

const saveUser = (username = "") => {
    setCookie(document, {
        name: "username",
        value: username,
        expires: 1000 * 60 * 60 * 2,
    });
};

const sendForm = async (username, password) => {
    try {
        username = username?.trim();
        password = password?.trim();
        const payload = { username, password };
        const rootDirectory = getRootDirectory();
        const rawData = await fetch(`${rootDirectory}rest/login.php`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const data = await rawData.json();
        if (data?.error === true) return await showError("Error", "Data tidak valid");
        saveUser(username);
        await showSuccess("Berhasil", "Data berhasil diverifikasi");
        console.log(data);
        location.reload();
    } catch (err) {
        const errorMessage = err instanceof Error ? "Data tidak valid" : err?.errorMessage;
        await showError("Error", errorMessage);
    }
};

const submitForm = async () => {
    try {
        const username = document.querySelector(".username-input").value;
        const password = document.querySelector(".password-input").value;
        await sendForm(username, password);
    } catch (err) {
        await showError("Error", "Telah terjadi kesalahan");
    }
};

iconEye1.addEventListener('click', () => {
    toggleEye();
});

iconEye2.addEventListener("click", () => {
    toggleEye();
});

formBtn.addEventListener("click", () => {
    submitForm();
});