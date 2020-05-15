
export interface IEducationState {
    education_name: string,
    university: string,
    faculty: string,
    department: string,
    degree: string,
    present: boolean,
    details: string,
    start_date: string,
    end_date: string,
}

export interface IExperienceState {
    company_name: string,
    job_title: string,
    present: boolean,
    details: string,
    start_date: string,
    end_date: string,
}

export interface ISkill {
    skill_name: string,
    experience_years: string,
    details: string,
    photo: string,
}