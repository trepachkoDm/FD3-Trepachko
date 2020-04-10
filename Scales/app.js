var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var i = 0; i < this.products.length; i++) {
            sum += this.products[i].getScale();
        }
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var names = [];
        for (var i = 0; i < this.products.length; i++) {
            names.push(this.products[i].getName());
        }
        return names;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_scale) {
        return _super.call(this, "apple", _scale) || this;
    }
    return Apple;
}(Product));
var Tomat = /** @class */ (function (_super) {
    __extends(Tomat, _super);
    function Tomat(_scale) {
        return _super.call(this, "tomat", _scale) || this;
    }
    return Tomat;
}(Product));
var apple1 = new Apple(1);
var apple2 = new Apple(2);
var tomat1 = new Tomat(1);
var tomat2 = new Tomat(2);
var scales1 = new Scales();
scales1.add(apple1);
scales1.add(apple2);
scales1.add(tomat1);
scales1.add(tomat2);
console.log(scales1.getSumScale());
console.log(scales1.getNameList());
//# sourceMappingURL=app.js.map