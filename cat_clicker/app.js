var view = {
    init: function() {
        this.image = document.getElementById('cat');
        this.name = document.getElementById('name');
        this.clicks = document.getElementById('click');
        this.buttons = document.getElementById('buttons');
    },

    createButtons: function(allCats) {
        let all = "";
    
        for (let cat in allCats) {
            console.log(cat);
            all += "<button id=\"" + cat + "\">" + cat + "</button>"
        };
        this.buttons.innerHTML = all;
    },

    // this render function makes the page changes 
    render: function(cat) {
        this.image.src = model.allCats[cat][0];
        this.name.innerText = cat;
        this.clicks.innerText = "Clicks: " + model.allCats[cat][1];
    },

    buttonClick: function(allCats) {
        for (let cat in allCats) {
            document.getElementById(cat).addEventListener('click', function() {
                view.render(cat);
            })
        };
    },

    imageClick: function() { 
        document.getElementById('cat').addEventListener('click', function() {
            let cat = document.getElementById('name').innerText;
            model.allCats[cat][1] = model.allCats[cat][1] + 1;
            view.render(cat);

        })
    }


};

var octopus = {
    init: function() {
        let allCats = model.allCats;
        view.init();
        view.createButtons(model.allCats);
        view.buttonClick(allCats);
        view.imageClick();
    }
};


var model = {
    allCats: {
        "Lucy": ["images/cat.jpeg", 0],
        "Maya": ["images/cat_two.jpeg", 0],
        "Nicol": ["images/cat_three.jpeg", 0],
        "Rona": ["images/cat_four.jpg", 0],
        "Lola": ["images/cat_five.jpeg", 0]    
    }
    // this function adds event listeners 

};
octopus.init();

