const amountSpan = document.querySelector("#amount");
const banknoteContainer = document.querySelector("#banknotes");
const table = document.querySelector("tbody");
const select = document.querySelector("select");
const transferButton = document.querySelector("button");

banknoteContainer.addEventListener("click", e => {
    if (e.target.matches("img")) {
        amountSpan.innerHTML = +amountSpan.innerHTML + +e.target.dataset.value;
    }
});

const updateTable = () => {
    table.innerHTML = `<tr>${people
        .map(p => `<td>${p.name}</td>`)
        .join("")}</tr>`;
    table.innerHTML += `<tr>${people
        .map((p, i) => `<td><img data-index="${i}" src="img/${p.photo}"></td>`)
        .join("")}</tr>`;
    table.innerHTML += `<tr>${people
        .map(
            p =>
                `<td class="${p.paid > p.to_pay ? "overpaid" : ""}">${
                    p.paid
                }</td>`
        )
        .join("")}</tr>`;
    table.innerHTML += `<tr>${people
        .map(p => `<td>${p.to_pay}</td>`)
        .join("")}</tr>`;
};

select.innerHTML = people
    .map((p, i) => `<option value="${i}">${p.name}</option>`)
    .join("");

transferButton.addEventListener("click", () => {
    people[select.value].paid += +amountSpan.innerHTML;
    amountSpan.innerHTML = 0;
    updateTable();
});

table.addEventListener("click", e => {
    if (e.target.matches("img")) {
        select.selectedIndex = e.target.dataset.index;
    }
});

updateTable();
