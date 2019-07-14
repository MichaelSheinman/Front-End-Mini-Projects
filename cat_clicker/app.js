var view = {
    createButtons: function(allCats) {
        let all = "";
    
        for (let cat in allCats) {
            console.log(cat);
            all += "<button id=\"" + cat + "\">" + cat + "</button>"
        };
        document.getElementById('buttons').innerHTML = all;
    },

};


var octopus = {
    init: function() {
        view.createButtons(model.allCats);
        model.buttonClick();
        model.imageClick();

    }
};


var model = {
    allCats: {
        "Lucy": ["images/cat.jpeg", 0],
        "Maya": ["images/cat_two.jpeg", 0],
        "Nicol": ["images/cat_three.jpeg", 0],
        "Rona": ["images/cat_four.jpg", 0],
        "Lola": ["images/cat_five.jpeg", 0]    
    },

    buttonClick: function() {
        for (let cat in model.allCats) {
            document.getElementById(cat).addEventListener('click', function() {
                document.getElementById('cat').src = model.allCats[cat][0];
                document.getElementById('name').innerText = cat;
                document.getElementById('click').innerText = "Clicks: " + model.allCats[cat][1];
            })
        };
    },

    imageClick: function() { 
        document.getElementById('cat').addEventListener('click', function() {
            let cat = document.getElementById('name').innerText;
            model.allCats[cat][1] = model.allCats[cat][1] + 1;
            document.getElementById('click').innerText = "Clicks: " + model.allCats[cat][1];

        })
    }

    // this function adds event listeners 

};
octopus.init();






