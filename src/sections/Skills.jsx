import React from 'react'
import SkillCard from '../components/SkillCard'

import { Globe, CodeXml, Database, Bolt } from 'lucide-react';
import TextSkill from '../components/TextSkill';

const Skills = () => {
  return (
    <section className='flex flex-col w-full text-white gap-16 pt-10'>
        <span className='text-4xl text-center'>Habilidades</span>

        <div className='grid grid-cols-4'>
            <SkillCard icon={<Globe/>} title='Frontend' 
                children={
                    <>
                        <TextSkill text='React'/>
                        <TextSkill text='Vue.js'/>
                        <TextSkill text='HTML'/>
                        <TextSkill text='CSS'/>
                        <TextSkill text='Sass'/>
                        <TextSkill text='Tailwind'/>
                        <TextSkill text='Bootstrap'/>
                    </>
                }
            
            />

            <SkillCard icon={<CodeXml/>} title='Backend' 
                children={
                    <>
                        <TextSkill text='Node.js'/>
                        <TextSkill text='Express.js'/>
                    </>
                }
            
            />

            <SkillCard icon={<Database/>} title='Database' 
                children={
                    <>
                        <TextSkill text='PostgreSQL'/>
                        <TextSkill text='MongoDB'/>
                        <TextSkill text='MySQL'/>
                        <TextSkill text='SQL Server'/>
                    </>
                }
            
            />

            <SkillCard icon={<Bolt/>} title='Otros' 
                children={
                    <>
                        <TextSkill text='Git'/>
                        <TextSkill text='GitHub'/>
                        <TextSkill text='Postman'/>
                        <TextSkill text='SourceTree'/>
                    </>
                }
            
            />
        </div>
      
    </section>
  )
}

export default Skills
