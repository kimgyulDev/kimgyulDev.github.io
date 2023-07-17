import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from './ProfileImage'

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 17px;
`

const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
`

const Subcontext = styled.div`
  font-size: 15px;
  font-weight: 400;
`

const Introduction: FunctionComponent = function () {
  return (
    <ProfileContainer>
      <ProfileImage />
      <Wrapper>
        <Name>Jiyul Kim</Name>
        <Subcontext>마이크테스트원투쓰리</Subcontext>
      </Wrapper>
    </ProfileContainer>
  )
}

export default Introduction
