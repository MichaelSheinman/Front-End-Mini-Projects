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
            all += "<button id=\"" + cat + "\">" + cat + "</button>"
        };
        this.buttons.innerHTML = all;
    },

    // this render function makes the page changes 
    render: function(cat) {
        console.log(cat);
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
    addListener: function(cat) {
        document.getElementById(cat).addEventListener('click', function() {
            view.render(cat);
        })
    },

    removeListener: function(cat) {
        document.getElementById(cat).removeEventListener('click', function() {
            view.render(cat);
        })
    },

    getCatName: function() {
        return document.getElementById('name').innerText;
    },
    changeButton: function(old_name, new_name) {
        console.log(old_name);
        let w = document.getElementById(old_name);
        w.id = new_name;
        w.innerText = new_name;
        document.getElementById('buttons').appendChild(w);
    }


};


var admin = {
    init: function() {
        this.isAdmin = false;
        admin.clickListener();
    },

    clickListener: function() {
        document.getElementById('admin').addEventListener('click', function() {
            if (admin.isAdmin == false) {
                octopus.addAdmin();
                admin.isAdmin = true;
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
        name.id = "p" + text
        document.body.appendChild(name);
        let b = document.createElement('input');
        b.type = "text";
        b.value = value;
        b.id = text;
        document.body.appendChild(b);
    },

    submitClick: function() {
        document.getElementById('submit').addEventListener('click', function() {
            old_name = document.getElementById('name').innerText;
            new_name = document.getElementById('Name').value;
            new_url = document.getElementById('URL').value;
            new_clicks = document.getElementById('Clicks').value;
            admin.clearField();
            octopus.changeData(old_name, new_name, new_url, new_clicks);
            admin.isAdmin = false;
        })
    },



    clearField: function() {
        document.body.removeChild(document.querySelector('#Name'));
        document.body.removeChild(document.querySelector('#URL'));        
        document.body.removeChild(document.querySelector('#Clicks'));        
        document.body.removeChild(document.querySelector('#pName'));        
        document.body.removeChild(document.querySelector('#pURL'));       
        document.body.removeChild(document.querySelector('#pClicks'));
        document.body.removeChild(document.querySelector('#submit'));
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
        admin.submitClick();
    },
    changeData: function(old_name, name, url, clicks) {
        view.removeListener(old_name)
        model.changeInfo(old_name, name, url, clicks);
        view.changeButton(old_name, name);
        view.addListener(name, old_name);
        view.render(name);
    },
};


var model = {
    allCats: {
        "Lucy": ["images/cat.jpeg", 0],
        "Maya": ["images/cat_two.jpeg", 0],
        "Nicol": ["images/cat_three.jpeg", 0],
        "Rona": ["images/cat_four.jpg", 0],
        "Lola": ["images/cat_five.jpeg", 0]    
    },

    changeInfo: function(old_name, name, url, clicks) {
        this.allCats[name] = [url, parseInt(clicks)];   // Adding the cat to allCats 
        delete this.allCats[old_name];
    }
    

};
octopus.init();

