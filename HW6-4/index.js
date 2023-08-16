// Необходимо получить список всех пользователей с помощью бесплатного API(https://jsonplaceholder.typicode.com/users)
// и отобразить их на странице.Пользователь должен иметь возможность удалить любого пользователя из списка.
// Данные при получении необходимо сохранить в локальное хранилище браузера localStorage.
// При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

const apiLink = "https://jsonplaceholder.typicode.com/users";

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
};

function removeElement(key, id) {
    const element = document.getElementById(`${id}`);
    element.parentNode.removeChild(element);
    localStorage.removeItem(`${key} ${id}`);
}

try {
    const div = document.createElement("div");
    div.className = "js-info";
    document.body.append(div);
    const data = await getData(apiLink);
    data.forEach((element) => {
        div.insertAdjacentHTML(
            "beforeend",
            `
            <div class="js-info__person" id="${element.id}">
                <div class="js-info__person-main">
                    <div class="js-info__person-id">Person ID: ${element.id}</div>
                    <div class="js-info__person-name">Name: ${element.username}</div>
                    <div class="js-info__person-email">Email: ${element.email}</div>
                    <div class="js-info__person-phone">Phone: ${element.phone}</div>
                    <div class="js-info__person-website">Website: ${element.website}</div>
                </div>
                <div class="js-info__card-address"><strong>Person's address:</strong>
                    <div class="js-info__person-address-street">Street: ${element.address.street}</div>
                    <div class="js-info__person-address-suite">Suite: ${element.address.suite}</div>
                    <div class="js-info__person-address-city">City: ${element.address.city}</div>
                    <div class="js-info__person-address-zipcode">Zipcode: ${element.address.zipcode}</div>
                </div>
                <div class="js-info__person-company"><strong>Person's company:</strong>
                    <div class="js-info__person-company-name">Company name: ${element.company.name}</div>
                    <div class="js-info__person-company-suite">Company suite: ${element.company.catchPhrase}</div>
                    <div class="js-info__person-company-bs">Company bs: ${element.company.bs}</div>
                </div>
            </div>
            `
        );
        localStorage.setItem(`person ${element.id}`, JSON.stringify(element));
    });
} catch (error) {
    console.error(error);
}

removeElement("person", 6);
