import Product from "../model/product.schema.js"


// export  const getProducts =async(request,response)=>{
// try{
//     const product = await Product.find({});;

// response.status(200).json(product);
// }catch(error){
//     response.status(500).json({message:error.message});
// }
// }


// export const getProductById = async (request,response)=>{
//     try{
// const id= request.params.id;
//  const product= await Product.findOne({'id':id})
    
//  response.status(200).json(product);
// }catch(error){
//     response.status(500).json({message:error.message});
//     }
// }


// export const userSignup = async(request,response)=>{
//     try{
//CREATE

export const productsCreate =  async (req, res) => {
    const newProduct = new Product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //UPDATE
  export const productsUpdate =  async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  //DELETE
  export const productsDelete =   async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  };
  