app.service("CrudAJService", function ($http) {

    this.getAllProduct = function () {
        var response = $http.get('GetAllProduct');
        return response;
    }

    this.addProduct = function (Product) {
        var response = $http({
            method: 'post',
            url: 'AddProduct',
            data: JSON.stringify(Product)
        });
        return response;
    }

    this.updateProduct = function (Product) {
        var response = $http({
            method: 'post',
            url: 'UpdateProduct',
            data: JSON.stringify(Product)
        });
        return response;
    }

    this.deleteProduct = function (Id) {
        var response = $http({
            method: 'post',
            url: 'DeleteProduct',
            params: { Id: JSON.stringify(Id) }
        });
        return response;
    }
})