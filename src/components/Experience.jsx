import React from 'react'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
const ExperienceCard = ({experience}) =>(
    <VerticalTimelineElement contentStyle={{background: '#1d1836', color: 'fff'}}
      contentArrowStyle={{borderRight: '7px solid #232631'}}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon={
          <div className='flex items-center w-full h-full justify-center'>
            <img src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain" />
          </div>
      }
    >
    <div>
      <h3 className='text-white font-bold text-[24px]'>{experience.title}</h3>
      <p className='text-secondary font-semibold text-[16px]' style={{margin:0}}>{experience.company_name}</p>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) =>
        <li key={index} className='text=white-100 text-[14px] pl-1 tracking-wider'>{point}</li>)}
      </ul>
    </div>
    </VerticalTimelineElement>
)


const Experience = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>My Journey So Far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index)=>
            <ExperienceCard key={index} experience={experience}/>
          )}
        </VerticalTimeline>
      </div>
      </>
    )
}

export default SectionWrapper(Experience, "work")