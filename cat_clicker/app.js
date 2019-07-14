allCats = {
    "Lucy": ["cat.jpeg", 0],
    "Maya": ["cat_two.jpeg", 0],
    "Nicol": ["cat_three.jpeg", 0],
    "Rona": ["cat_four.jpg", 0],
    "Lola": ["cat_five.jpeg", 0] 
}

function createButtons() {
let all = "";

for (let cat in allCats) {
    console.log(cat);
    all += "<button onclick=\"displayCat('" + cat + "')\">" + cat + "</button>"
};
document.getElementById('buttons').innerHTML = all;
}

createButtons()

function displayCat(name) {

data = allCats[name];
document.getElementById('cat').src = data[0];
document.getElementById('name').textContent = name;
document.getElementById('click').textContent = "Clicks " + allCats[name][1];

};

document.getElementById('cat').addEventListener('click', function() {
    let name = document.getElementById('name').textContent;
    allCats[name][1] = allCats[name][1] + 1; 
    document.getElementById('click').textContent = "Clicks " + allCats[name][1];
});


displayCat("Lola")
