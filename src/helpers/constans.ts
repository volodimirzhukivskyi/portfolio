export interface skillsInfo {
  img: string;
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
  { category: 'HTML', info: { img: '', arr: ['HTML5'] } },
  { category: 'CSS', info: { img: '', arr: ['CSS3', 'SCSS', 'Bootstrap', 'Material UI', 'Responsive Web Design'] } },
  { category: 'JavaScript', info: { img: '', arr: ['TypeScript'] } },
  { category: 'React', info: { img: '', arr: ['Next.js', 'Redux,Hooks', 'Redux-thunk', 'React-router', 'Formik', 'Yup'] } },
  { category: 'Other', info: { img: '', arr: ['Gulp', 'WebPack', 'Git'] } },
];
export const BACK_SKILLS: Array<SkillsI> = [
  { category: 'JAVA', info: { img: '', arr: ['Java EE', 'Spring IoC', 'Spring Security', 'Hibernate', 'Spring Data'] } },
  { category: 'Node.js', info: { img: '', arr: ['Express.JS'] } },
  { category: 'DATABASE', info: { img: '', arr: ['SQL', 'NoSql', 'PostgresSQL', 'MySQL', 'MongoDB'] } },
  { category: 'Other', info: { img: '', arr: [' Algorithms and data structure'] } },
];
