var tagDiv = document.querySelector(".para2");

const tagArr = [
    {
        id: 1,
        name: '<h1>...</h1>',
    },
    {
        id: 2,
        name: "<h1>...</h1>",
    },
    {
        id: 3,
        name: "<h1>...</h1>",
    },
    {
        id: 4,
        name: "<h1>...</h1>"
    }
]


const showTag = tagArr.map((tag, id) => {
    return `
        <div>
            <p>${tag.name}</p>
        </div>
    `;
});

tagDiv.innerHTML = showTag;