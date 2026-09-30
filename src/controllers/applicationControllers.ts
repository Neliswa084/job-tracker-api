import { Request, Response } from "express";

import * as applicationService from "../service/applicationService"

export const addApplication = async (req: Request, res: Response) => {
  try {
    const newApplication = await applicationService.createApplication(req.body ,req.user!.id) 
    res.status(201).json(newApplication)
  } catch (error) {
    console.log("Application error:", error)
    res.status(500).json({ message: "Error in creating application" });
  }
}
export const getAllApplications = async (req: Request, res: Response) => {
  try {
    const applications = await applicationService.findAllApplications();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving applications" });
  }
};

export const getApplicationById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(String(req.params.id))
    const application = await applicationService.findApplicationById(id)
    if (!application) {
      return res.status(404).json({ message: "Application not found" })
    }
    return res.status(200).json(application)
  } catch (error) {
    res.status(500).json({ message: "Error retrieving application" })

  }
};

export const updateApplicationById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(String(req.params.id));
    const updateApplication = await applicationService.updateApplication(id, req.body);

    if (!updateApplication) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json(updateApplication);

  } catch (error) {
    res.status(500).json({ message: "Error updating application" });

  }
};

// export const deleteApplicationById = async (req: Request, res: Response) => {
//   try {
//     const id = parseInt(String(req.params.id));
//     const deletedApplication = await applicationService.deleteApplication(id)
//     if (!deletedApplication) {
//       res.status(404).json({ message: "Application not found" });
//     }

//     res.status(200).json({ message: "Application deleted successfully" })
//     // console.log(error)
//   } catch (error) {
//      console.log(error)
//     res.status(500).json({ message: "Error deleting the application" })

//   }
// };

export const deleteApplicationById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(String(req.params.id));
    const deletedApplication = await applicationService.deleteApplication(id);
    
    if (!deletedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }

    
    return res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    console.error(error); 
    return res.status(500).json({ message: "Error deleting the application" });
  }
};
