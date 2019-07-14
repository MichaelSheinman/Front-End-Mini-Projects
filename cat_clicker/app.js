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
            let cat = view.getCatName();
            model.allCats[cat][1] = model.allCats[cat][1] + 1;
            view.render(cat);
        })
    },
    getCatName: function() {
        return document.getElementById('name').innerText;
    }


};


var admin = {
    init: function() {
        this.isAdmin = false;
        admin.clickListener();
    },

    clickListener: function() {
        document.getElementById('admin').addEventListener('click', function() {
            console.log(admin.isAdmin);
            if (admin.isAdmin == false) {
                console.log("hey")
                octopus.addAdmin();
            };
        });
    },

    enableModel: function(cat, allCats) {
        this.isAdmin = true;
        this.createField("Name", cat);
        this.createField("URL", allCats[cat][0]);
        this.createField("Clicks", allCats[cat][1]);
        submit = document.createElement('button');
        submit.innerText = "Submit";
        submit.id = "submit";
        document.body.appendChild(submit);

    },
    createField: function(text, value) {
        let name = document.createElement('p');
        name.innerText = text;
        document.body.appendChild(name);
        let b = document.createElement('input');
        b.type = "text";
        b.value = value;
        document.body.appendChild(b);
    }
    
}

var octopus = {
    init: function() {
        let allCats = model.allCats;
        view.init();
        view.createButtons(model.allCats);
        view.buttonClick(allCats);
        view.imageClick();
        admin.init()
    },
    addAdmin: function() {
        admin.enableModel(view.getCatName(), model.allCats);
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

