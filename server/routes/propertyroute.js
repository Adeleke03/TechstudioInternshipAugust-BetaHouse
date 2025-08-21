import express from "express";
import { allProperties, createProperty, properties, property, searchProperty } from "../controllers/propertyController.js";


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
router.get('/properties/search', searchProperty);

export default router;