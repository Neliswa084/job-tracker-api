import {Router} from "express";
import {addApplication,getAllApplications,getApplicationById,updateApplicationById,deleteApplicationById} from "../controllers/applicationControllers"

const router = Router();

router.post('/applications', addApplication)
router.get('/applications', getAllApplications)
router.get('/application/:id', getApplicationById)
router.put('/application/:id', updateApplicationById)
router.delete('/application/:id', deleteApplicationById)

export default router;