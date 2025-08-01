import { useState, useContext } from 'react'
import './App.css'
import Header from './components/Header/header'
import Home from './Pages/Home/Home'
import Templates from './Pages/Templates/templates'
import { Routes, Route } from 'react-router-dom'
import { TemplateProvider } from './contexts/provideTemplate'
import Template1 from './Pages/Templates/templatePage/template1/template1'
import PersonalDetails from './Pages/Templates/templatePage/template1/personalDetails'
import Experience from './Pages/Templates/templatePage/template1/experience'
import Education from './Pages/Templates/templatePage/template1/education'
import Skills from './Pages/Templates/templatePage/template1/skills'
import Summary from './Pages/Templates/templatePage/template1/summary'
import Review from './Pages/review/review'
import Overview from './Pages/overview/overview'
import { FormContext, FormProvider } from './contexts/FormContext'
import Experience2 from './Pages/Templates/templatePage/template1/experience2'
import Experience3 from './Pages/Templates/templatePage/template1/experience3'
import { StepsProvider } from './contexts/completeSteps'
// import { FormContext } from './contexts/FormContext'



function App() {

  
  return (
    <>

    <TemplateProvider>
      <FormProvider>
        <StepsProvider>
        
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/templates' element={<Templates/>}/>
        
        <Route path='/resumeData' element={<Template1/>}>
          <Route path='/resumeData' element={<PersonalDetails/>}/>
          <Route path='/resumeData/experience' element={<Experience/>}/>
          <Route path='/resumeData/experience2' element={<Experience2/>}/>
          <Route path='/resumeData/experience3' element={<Experience3/>}/>
          <Route path='/resumeData/education' element={<Education/>}/>
          <Route path='/resumeData/skills' element={<Skills/>}/>
          <Route path='/resumeData/summary' element={<Summary/>}/>
        </Route>
        
        <Route path='/review' element={<Review/>}/>
      </Routes>
      </StepsProvider>
      </FormProvider>
      </TemplateProvider>
    </>
  )
}

export default App
