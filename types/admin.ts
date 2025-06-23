import {
  Certificate,
  Description,
  Education,
  Experience,
} from "@/types/resume";
import { Work } from "@/types/work";
import { Main, Skill } from "@/types/main";

export function isCertificate(
  project:
    | Certificate
    | Education
    | Experience
    | Description
    | Work
    | Main
    | Skill
): project is Certificate {
  return "name" in project && "date" in project && "authority" in project;
}

export function isEducation(
  project:
    | Certificate
    | Education
    | Experience
    | Description
    | Work
    | Main
    | Skill
): project is Education {
  return (
    "school" in project &&
    "degree" in project &&
    "institution" in project &&
    "date" in project
  );
}

export function isExperience(
  project:
    | Certificate
    | Education
    | Experience
    | Description
    | Work
    | Main
    | Skill
): project is Experience {
  return (
    "company" in project &&
    "title" in project &&
    "date" in project &&
    "description" in project
  );
}

export function isDescription(
  project:
    | Certificate
    | Education
    | Experience
    | Description
    | Work
    | Main
    | Skill
): project is Description {
  return (
    "title" in project &&
    "date" in project &&
    "performance" in project &&
    "role" in project &&
    "skills" in project
  );
}

export function isWork(
  project:
    | Certificate
    | Education
    | Experience
    | Description
    | Work
    | Main
    | Skill
): project is Work {
  return (
    "title" in project &&
    "description" in project &&
    "skill" in project &&
    "path" in project &&
    "url" in project &&
    "download" in project &&
    "git" in project &&
    "index" in project
  );
}

export function isMain(
  project:
    | Certificate
    | Education
    | Experience
    | Description
    | Work
    | Main
    | Skill
): project is Main {
  return (
    "title" in project &&
    "content1" in project &&
    "content2" in project &&
    "description" in project &&
    "description2" in project &&
    "description3" in project &&
    "button" in project &&
    "path" in project &&
    "alt" in project &&
    "url" in project
  );
}

export function isSkill(
  project:
    | Certificate
    | Education
    | Experience
    | Description
    | Work
    | Main
    | Skill
): project is Skill {
  return (
    "color" in project &&
    "skills" in project &&
    "name" in project &&
    "angle" in project
  );
}
