import { query } from "../config/database";
import { Application, NewApplication } from "../types/application.types";

export const createApplication = async (appData: NewApplication): Promise<Application> => {
    const { company_name, job_title, status } = appData
    const { rows } = await query("INSERT INTO applications (company_name, job_title, status) VALUES ($1,$2,$3) RETURNING *",
        [company_name, job_title, status]
    )
    return rows[0];
}
export const findAllApplications = async (): Promise<Application[]> => {
    const { rows } = await query(
        "SELECT * FROM application ORDER BY applied_at DESC"

    );
    return rows
}

export const findApplicationById = async (id: number): Promise<Application | null> => {
    const { rows } = await query("SELECT * FROM application WHERE id = $1", [
        id,

    ]);
    return rows[0] || null;
}
export const updateApplication = async (id: number, appData: Application): Promise<Application | null> => {
    const { status } = appData
    const { rows } = await query("UPDATE application SET status = $1 WHERE id = $2 RETURNING*",
        [status, id]
    );
    return rows[0] || null;
};

export const deleteApplication = async (id: number): Promise<Application | null> => {
    const { rows } = await query(" DELETE FROM application WHERE id = $1 RETURNING *", [id]

    );
    return rows[0] || null;
};