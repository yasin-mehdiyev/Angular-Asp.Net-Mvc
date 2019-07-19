using CrudAngular.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CrudAngular.Models;

namespace CrudAngular.Controllers
{
    public class ProductsController : Controller
    {
        private HospitalContext db = new HospitalContext();
        // GET: Products
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAllProduct()
        {
            var list = db.Products.ToList();

            return Json(list, JsonRequestBehavior.AllowGet);
        }
        
        public string AddProduct(Product p)
        {
            db.Products.Add(p);
            db.SaveChanges();

            return "Product Added Successfully";
        }

        public string UpdateProduct(Product P)
        {
                 Product prodObj = db.Products.Where(x => x.Id == P.Id).FirstOrDefault();
                 prodObj.Name = P.Name;
                 prodObj.Price = P.Price;
                 db.SaveChanges();
          
            return "Product Updated Successfully";
        }

        public string DeleteProduct(int id)
        {
            int pId = Convert.ToInt32(id);
            var nP = db.Products.Where(x => x.Id == pId).FirstOrDefault();
            db.Products.Remove(nP);
            db.SaveChanges();

            return "Product Deleted Successfully";
        }
    }
}