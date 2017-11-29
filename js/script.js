// Cloudinary responsive method
    var cl = cloudinary.Cloudinary.new({cloud_name: "harryola9"});
    cl.config({responsive_use_breakpoints:"resize"}) 
    cl.responsive();

