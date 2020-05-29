var cats = [
    {
        count: 0,
        name: "Kutta",
        img: 'img/22252709_010df3379e_z.jpg',
        nickname: ["Barks"],
    },
    {
        count: 0,
        name: "Chuha",
        img: 'img/434164568_fea0ad4013_z.jpg',
        nickname: ["Jerry"],
    },
    {
        count: 0,
        name: "Roadrunner",
        img: 'img/1413379559_412a540d29_z.jpg',
        nickname: ["Meep", "Meep", "Meep"],
    },
    {
        count: 0,
        name: "Bunny",
        img: 'img/4154543904_6e2428c421_z.jpg',
        nickname: ["bugs"],
    },
];

var Cat = function (data) {
    this.clickCount = ko.observable(data.count);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.img);
    this.nickname = ko.observableArray(data.nickname);
    this.levels = ko.computed(function () {
        if(this.clickCount() < 11) {
            return "Infant";
        } else if(this.clickCount() < 21) {
            return "Teen";
        } else if (this.clickCount() > 20 && this.clickCount() < 50) {
            return "Adult";
        } else if (this.clickCount() >= 50){
            return "Senior"
        }
    }, this);
}

var viewModel = function () {
    var self = this;
    this.catList = ko.observableArray([]);
    cats.forEach(function (catItem) {
       self.catList.push(new Cat(catItem))
    });
    self.currentCat = ko.observable(this.catList()[0]);

    self.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    }
    self.setCurrentCat = function () {
        self.currentCat(this);
    }

};

ko.applyBindings(new viewModel());