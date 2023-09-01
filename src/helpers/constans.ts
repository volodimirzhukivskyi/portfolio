export interface skillsInfo {
  arr: string[];
}
export interface SkillsI {  
  category: string;
  info: skillsInfo;
}
export const FRONT_END = 'Front end';
export const FRONT = 'front';
export const BACK = 'back';

export const FRONT_SKILLS: Array<SkillsI> = [
  { category: 'HTML', info: { arr: ['HTML5'] } },
  { category: 'CSS', info: { arr: ['CSS3', 'SCSS', 'Bootstrap', 'Material UI', 'Responsive Web Design'] } },
  { category: 'JavaScript', info: { arr: ['TypeScript'] } },
  { category: 'React', info: { arr: ['Next.js', 'Redux,Hooks', 'Redux-thunk', 'React-router', 'Formik', 'Yup'] } },
  { category: 'Other', info: { arr: ['Gulp', 'WebPack', 'Git'] } },
];
export const BACK_SKILLS: Array<SkillsI> = [
  { category: 'Java', info: { arr: ['Java EE', 'Spring IoC', 'Spring Security', 'Hibernate', 'Spring Data'] } },
  { category: 'Node.js', info: { arr: ['Express.JS'] } },
  { category: 'Database', info: { arr: ['SQL', 'NoSql', 'PostgresSQL', 'MySQL', 'MongoDB'] } },
  { category: 'Other', info: { arr: [' Algorithms and data structure'] } },
];
