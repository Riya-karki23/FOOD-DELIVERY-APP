import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import axios from 'axios'
import { toast } from "react-toastify";

const Add = ({url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler=async(e)=>{
  e.preventDefault();
  const formData=new FormData();
  formData.append("name",data.name)
  formData.append("description",data.description)
  formData.append("price",Number(data.price))
  formData.append("category",data.category)
  formData.append("image",image)

  try{

  const response=await axios.post(`${url}/api/food/add`,formData);
  if(response.data.success){
    setData({
      name: "",
      description: "",
      price: "",
      category: "Salad",
    })
    setImage(false)
    toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)

    }

  }

catch(error){
  toast.error("something went wrong");

}
  }

  return (
    <div className="md:w-[40%] md:pt-10 md:px-20 px-5 pt-5  ">
      <form  onSubmit={onSubmitHandler} className="flex flex-col gap-3 text-gray-600">
        <div className="flex flex-col gap-1">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              className="h-20 w-24"
              alt="upload img"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className=" flex flex-col gap-1">
          <p>Product name</p>
          <input
            onChange={changeHandler}
            name="name"
            value={data.name}
            className="border outline-none w-full px-2 py-2 border-gray-500 rounded-sm"
            type="text"
            placeholder="Type here "
            required
          />
        </div>
        <div className=" flex flex-col gap-1">
          <p>Product description</p>
          <textarea
            onChange={changeHandler}
            name="description"
            value={data.description}
            className=" px-2 py-2 w-full border outline-none md:h-36 h-20 border-gray-500 rounded-sm"
            placeholder="Write content here"
            required
          />
        </div>
        <div className="flex gap-8  ">
          <div className="  flex flex-col gap-1 ">
            <p>Product category</p>

            <select
              required
              onChange={changeHandler}
              name="category"
              value={data.category}
              className=" px-2 py-2  text-gray-600 border outline-none w-28 border-gray-500 rounded-sm"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <p>Product price</p>
            <input
              onChange={changeHandler}
              name="price"
              value={data.price}
              className=" rounded-sm px-2 py-2 outline-none border w-28 border-gray-500"
              type="text"
              placeholder="₹ 20"
              required
            />
          </div>
        </div>
        <button className="bg-black text-white w-32 mt-3 flex justify-center items-center py-2 rounded-sm">
          Add</button>
       
      </form>
    </div>
  );
};

export default Add;
