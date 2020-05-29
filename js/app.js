var viewModel = function () {
    var levels = {
        3: "infant",
        10: "teen",
        20: "adult",
        50: "senior",
    };

    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
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
    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    }

};

ko.applyBindings(new viewModel());