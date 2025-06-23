export type Experience = {
  id?: string;
  company: string;
  title: string;
  date: string;
  description: string;
};

export type Education = {
  id?: string;
  school: string;
  degree: string;
  institution: string;
  date: string;
};

export type Certificate = {
  id?: string;
  name: string;
  date: string;
  authority: string;
};

export type Description = {
  id?: string;
  title: string;
  date: string;
  performance: string[];
  role: string;
  skills: string;
};

export type Meta = {
  title: string;
  description: string;
};

export type Aside = {
  slug: string;
  button: string;
};

export type CertificateMeta = {
  meta: Meta;
  contents: Certificate[];
};

export type EducationsMeta = {
  meta: Meta;
  contents: Education[];
};

export type ExperiencesMeta = {
  meta: Meta;
  contents: Experience[];
};

export type DescriptionMeta = {
  meta: Meta;
  contents: Description[];
};

export type TitleDescription = {
  slug: string;
  title: string;
  description: string;
};
