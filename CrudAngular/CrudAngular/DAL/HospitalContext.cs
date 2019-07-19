using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using CrudAngular.Models;

namespace CrudAngular.DAL
{
    public class HospitalContext:DbContext
    {
        public HospitalContext() : base("HospiatlContext")
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}