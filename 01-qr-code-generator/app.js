// QR Code Generator js
const handleGenerateQrCode = (event) => {
    event.preventDefault(); // stop page reload

    const url = document.getElementById("url").value.trim();

    if (!url) {
        return alert("Provide a valid URL!");
    }

    const qrBox = document.getElementById("qr-box");
    qrBox.innerHTML = ""; // prevent duplicates

    try {
        new QRCode(qrBox, {
            text: url,
            width: 430,
            height: 430,
            colorDark: "#000000",
            colorLight: "#FFFFFF"
        });
    } catch (error) {
        console.log(error);
    }

    document.getElementById("url").value = "";
};
