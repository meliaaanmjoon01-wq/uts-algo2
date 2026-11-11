function hitung() {
    const angka1Input = document.getElementById("angka1").value;
    const angka2Input = document.getElementById("angka2").value;
    const operator = document.getElementById("operator").value;
    const hasilElement = document.getElementById("hasil");

    // Validasi input kosong
    if (angka1Input === "" || angka2Input === "") {
        hasilElement.textContent = "Silakan isi kedua angka!";
        return;
    }

    const angka1 = Number(angka1Input);
    const angka2 = Number(angka2Input);

    let hasil;

    switch (operator) {
        case "+":
            hasil = angka1 + angka2;
            break;

        case "-":
            hasil = angka1 - angka2;
            break;

        case "*":
            hasil = angka1 * angka2;
            break;

        case "/":
            if (angka2 === 0) {
                hasilElement.textContent = "Error: Tidak bisa membagi dengan nol!";
                return;
            }
            hasil = angka1 / angka2;
            break;

        default:
            hasilElement.textContent = "Operator tidak valid!";
            return;
    }

    hasilElement.textContent = hasil;
}
