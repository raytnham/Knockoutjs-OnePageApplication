/* A function to get current date in dd/mm/yyyy format.
 * params: none. return: string.
 */
function getCurrentDate() {
    var date = new Date();
    //convert month to 2 digits
    var twoDigitMonth = (date.getMonth().length === 1) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    var currentDate = date.getDate() + "/" + twoDigitMonth + "/" + date.getFullYear();
    return currentDate;
}

/* the Model class for Product item.
 * param: data (JSON or JS object format)
 * return: an instance of Product model.
 */
function Product(data) {
    var self = this;
    self.ID = (data ? ko.observable(data.ID) : ko.observable());
    self.productName = (data ? ko.observable(data.productName) : ko.observable());
    self.productPrice = (data ? ko.observable(data.productPrice) : ko.observable());
    self.companyName = (data ? ko.observable(data.companyName.toUpperCase()) : ko.observable());
    self.addedDate = (data ? ko.observable(data.addedDate) : ko.observable());
    self.isActive = (data ? ko.observable(data.isActive) : ko.observable());
}

// The page ViewModel definition.
function PageViewModel(data) {
    var self = this;
    // An array to store a list of the product items.
    self.products = ko.observableArray();
    // Inject existing data in the json file into the productList.
    for (var key in data) {
        self.products.push(new Product(ko.toJS(data[key])));
    }
    // Some placeholders to stores data as users interact with the page.
    self.selectedProduct = ko.observable();
    self.newProduct = ko.observable();
    self.selectedProductPointer = null;

    // Function to add new product item into the list of product.
    self.addProduct = function () {
        var product = new Product();
        product.ID(self.products().length + 1);
        product.addedDate(getCurrentDate());
        product.isActive(true);
        self.newProduct(ko.toJS(product));
        $('#add-product-modal').modal('show');
    }
    self.addConfirmed = function () {
        self.products.push(new Product(ko.toJS(self.newProduct)));
    }
    // Function to edit a product item.
    self.viewProduct = function (item) {
        self.selectedProduct(item);
        $('#view-product-modal').modal('show');
    }

    self.editProduct = function (item) {
        self.selectedProductPointer = item;
        self.newProduct(new Product(ko.toJS(item)));
        $('#edit-product-modal').modal('show');
    }
    self.editConfirmed = function (item) {
        self.products.replace(self.selectedProductPointer,
            new Product(ko.toJS(self.newProduct)));
    }
    // Function to delete a product item.
    self.deleteProduct = function (item) {
        self.selectedProduct(item);
        self.selectedProductPointer = item;
        $('#delete-product-modal').modal('show');
    }
    self.deleteConfirmed = function () {
        var product = new Product(ko.toJS(self.selectedProduct));
        product.isActive(false);
        self.products.replace(self.selectedProductPointer, product);
    }
    // Function to recover all deleted items.
    self.recoverDeletedItems = function () {
        for (var i = 0; i < self.products().length; i++) {
            if (!self.products()[i].isActive()) {
                self.products()[i].isActive(true);
            }
        }
    }
}