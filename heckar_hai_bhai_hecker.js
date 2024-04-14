async function random() {
    let random = Math.random()
    let interval = 1 + 2 * random;

    return new Promise((resolve, reject) => {
        setInterval(() => {

            resolve()
        }
            , interval * 1000)
    })
}

async function main() {
    setInterval(() => {
        let last = document.body.lastElementChild;
        let first = document.body.firstElementChild;
        if (last.innerHTML.endsWith("...") && first.innerHTML.endsWith("...")) {
            last.innerHTML.slice(0, last.innerHTML.length - 1)
            first.innerHTML.slice(0, first.innerHTML.length - 1)
        }
        else {

            last.innerHTML = last.innerHTML + ".";
            first.innerHTML = first.innerHTML + ".";
        }
    }, 400);

    let messages = ["Initialized Hacking",
        "scaning files on this device",
        "reading files",
        "Sending all data to server",
        "Cleaning up",
        "April fool 😂😂"];
    for (const item of messages) {
        await fun(item);
    }
}
main();
async function fun(item) {
    await random();
    let div = document.createElement("div");
    div.classList.add("hec");
    div.innerHTML = item;
    document.body.append(div);
}
