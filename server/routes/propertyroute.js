import express from "express";
import { allProperties, createProperty, filterProperty, properties, property, searchProperty } from "../controllers/propertyController.js";


const router = express.Router();

//Post request
router.post("/create", createProperty);

//Insert many 
router.post('/all-properties', properties);

//All Properties
router.get('/all-properties', allProperties);

//Single Property
router.get('/:propertyId', property);

//search Properties
router.post('/properties/search', searchProperty);

//Filter Properties 
router.get('/properties/filter', filterProperty)

export default router;