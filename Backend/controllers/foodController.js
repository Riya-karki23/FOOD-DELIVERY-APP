import foodModel from "../models/foodModel.js";
import fs from 'fs';



// ------------------------------------------------------add food 

const addFood=async(req,res)=>{

    const{name,description,price,category}=req.body;
    let image_filename=`${req.file.filename}`

    const food=new foodModel({
        name,
        description,
        price,
        category,
        image:image_filename,
    })

    try {
       await food.save();
       res.json({success:true, message:"food added"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})

    }

}

// --------------------------------------------------------------------get all food list

const foodList=async(req,res)=>{
try {

    const foodlist=await foodModel.find({});
    res.json({success:true,data:foodlist})
    
} catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
}
}


// --------------------------------------------------------------------remove food item

const removeFood = async (req, res) => {
    const { id } = req.body;

    try {
        const fooditem = await foodModel.findById(id);
        if (!fooditem) {
            return res.json({ success: false, message: "food item not found" });
        }

        fs.unlink(`uploads/${fooditem.image}`, async (err) => {
            if (err) {
                console.log("error deleting files", err);
            }

            await foodModel.findByIdAndDelete(id);
            res.json({ success: true, message: "item removed" });
        });

    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "error removing item" });
    }


}




export {addFood,foodList,removeFood}