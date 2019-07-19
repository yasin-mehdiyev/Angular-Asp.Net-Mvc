app.controller('CrudCtrl', function ($scope, CrudAJService) {

    $scope.divAdd = false;
    GetAllProduct();

    function GetAllProduct() {
        CrudAJService.getAllProduct().then(function (result) {
            $scope.Products = result.data;
        }, function (result) {
            alert('Product Not Found');
        });
    }

    $scope.AddProduct = function () {
        $scope.divAdd = true;
        $scope.Action = "Add";
        $scope.productId = '';
        $scope.productName = '';
        $scope.productPrice = '';
    }


    $scope.EditFunction = function (product) {
        $scope.divAdd = true;
        $scope.Action = 'Update';
        $scope.productId = product.Id,
        $scope.productName = product.Name;
        $scope.productPrice = product.Price;
    }

    $scope.AddUpdateProduct = function () {
        var action = $scope.Action;
        var product = {
            Id: $scope.productId,
            Name: $scope.productName,
            Price: $scope.productPrice
        }

        if (action == 'Update') {
            CrudAJService.updateProduct(product).then(function (result) {
                alert(result.data);
                GetAllProduct();
            });
            $scope.divAdd = false;
        }
        else {
            CrudAJService.addProduct(product).then(function (result) {
                alert(result.data);
                GetAllProduct();
            });
            $scope.divAdd = false;
        }
    }

    $scope.DeleteFunction = function (Id) {
        CrudAJService.deleteProduct(Id).then(function (result) {
            alert(result.data);
            GetAllProduct();
        });
    }

    $scope.Close = function () {
        $scope.divAdd = false;
    }
});