import {Router} from "express";
import {addApplication,getAllApplications,getApplicationById,updateApplicationById,deleteApplicationById} from "../controllers/applicationControllers"
import {protect} from "../middleware/authMiddleware"

const router = Router();

router.use(protect) // Apply the protect middleware to all routes in this router

router.post('/applications', addApplication)
router.get('/applications', getAllApplications)
router.get('/application/:id', getApplicationById)
router.put('/application/:id', updateApplicationById)
router.delete('/application/:id', deleteApplicationById)

export default router;