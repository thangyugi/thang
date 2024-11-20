import React from 'react'
import { TechField, TechTitle } from 'styles/styled-component/techFieldStyled'
import { TitleHeading } from 'styles/styled-component/typhography'
import TechCard from './TechCard'

const TechStack = ({ stackname, layout }) => {
  console.log('stackname', stackname)
  console.log('layout', layout)
  return (
    <TechField stackname={stackname} layout={layout}>
      <TechTitle left>
        <TitleHeading>{stackname}</TitleHeading>
      </TechTitle>
      <div className='div'>1</div>
      <div className='div'>2</div>
      <div className='div'>3</div>
      <div className='div'>4</div>
      <div className='div'>5</div>
      <div className='div'>6</div>
      {/* {techs.map(({ id, title, Image, color }) => (
        <TechCard
          key={uuid_v4()}
          id={id}
          title={title}
          Image={Image}
          color={color}
        />
      ))} */}
    </TechField>
  )
}

export default TechStack
