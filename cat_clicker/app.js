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
    }

};

var octopus = {
    init: function() {
        view.init();
        view.createButtons(model.allCats);
        model.buttonClick();
        model.imageClick();
    },

    display: function(cat) {
        view.render(cat);
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
                octopus.display(cat)
            })
        };
    },

    imageClick: function() { 
        document.getElementById('cat').addEventListener('click', function() {
            let cat = document.getElementById('name').innerText;
            model.allCats[cat][1] = model.allCats[cat][1] + 1;
            octopus.display(cat);

        })
    }

    // this function adds event listeners 

};
octopus.init();

