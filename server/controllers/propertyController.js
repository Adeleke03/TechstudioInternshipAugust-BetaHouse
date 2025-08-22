import PROPERTY from "../models/propertyModel.js"

//CRUD OPERATION
//CREATE a property
export const createProperty = async(req,res)=>{
    const {title,location,bedrooms,bathrooms,price,image,featured,purpose,type} = req.body;
    if (!title || !location || !bedrooms ||!bathrooms ||!price ||!image ||!featured ||!purpose ||!type ){
        res.status(400).json({success:false,errMsg:"All fields are required"});
        return
    }
    try {
        const property = await PROPERTY.create(req.body);
        res.status(201).json({success:true,message:"Product created successfully",property});
    } catch (error) {
        res.status(500).json(error.message);
    }
}

//Insert Many

export const properties = async(req,res)=>{
    try {
        const properties = await PROPERTY.insertMany(req.body);
        res.status(201).json({success:true,message:"Properties created successfully",properties});  
    } catch (error) {
       res.status(500).json(error.message); 
    };
};

// GET properties
export const allProperties = async(req,res)=>{
    try {
        const properties = await PROPERTY.find();
        res.status(200).json({success:true,message:"All Properties",properties});       
    } catch (error) {
        res.status(500).json(error.message);
    };
};

//Single Property
export const property = async(req,res)=>{
    try {
        const property = await PROPERTY.findById(req.params.propertyId);
        if (!property) {
            res.status(404).json({success:false,errMsg:"Property not found"})
            return;
        }
        res.status(200).json({success:true,message:"Property found",property})
    } catch (error) {
       res.status(500).json(error.message); 
    };
}

//Search Property Controller
export const searchProperty = async (req, res) => {
  try {
    const { location, type, bedroom } = req.body;

    const filter = {};

    if (location) {
      filter.location = { $regex: location, $options: "i" };
    }

    if (type) {
      filter.type = { $regex: type, $options: "i" };
    }

    if (bedroom !== undefined) {
      filter.bedroom = bedroom; 
    }

    const properties = await PROPERTY.find(filter);

    if (!properties || properties.length === 0) {
      return res.status(404).json({ success: false, errMsg: "No matching properties found" });
    }

    return res.status(200).json({ success: true, properties });
  } catch (error) {
    return res.status(500).json({ success: false, errMsg: error.message });
  }
};


//Filter Property Controllers (by purpose and/or type)
export const filterProperty = async (req, res) => {
  try {
    const { purpose, type } = req.body;
    const filter = {};

    if (purpose) filter.purpose = purpose;
    if (type) filter.type = type;

    const results = await PROPERTY.find(filter);

    if (!results.length) {
      return res.status(404).json({ success: false, errMsg: "No matching properties found" });
    }

    res.status(200).json({ success: true, properties: results });
  } catch (error) {
    res.status(500).json({ success: false, errMsg: error.message });
  }
};