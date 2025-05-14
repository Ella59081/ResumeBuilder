import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Home from './Pages/Home/Home'
import Templates from './Pages/Templates/templates'
import { Routes, Route } from 'react-router-dom'
import { TemplateContext } from './contexts/provideTemplate'
import Template1 from './Pages/Templates/templatePage/template1/template1'
import PersonalDetails from './Pages/Templates/templatePage/template1/personalDetails'
import Experience from './Pages/Templates/templatePage/template1/experience'
import Education from './Pages/Templates/templatePage/template1/education'
import Skills from './Pages/Templates/templatePage/template1/skills'
import Summary from './Pages/Templates/templatePage/template1/summary'
import Review from './Pages/review/review'
import { FormProvider } from './contexts/FormContext'
import Experience2 from './Pages/Templates/templatePage/template1/experience2'
// import { FormContext } from './contexts/FormContext'

function App() {
  
  return (
    <>

    <TemplateContext>
      <FormProvider>
      <Header/>
      {/* <Home/>
      <Templates/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/templates' element={<Templates/>}/>
        <Route path='/resumeData' element={<Template1/>}>
          <Route path='/resumeData' element={<PersonalDetails/>}/>
          <Route path='/resumeData/experience' element={<Experience/>}/>
          <Route path='/resumeData/experience2' element={<Experience2/>}/>
          <Route path='/resumeData/education' element={<Education/>}/>
          <Route path='/resumeData/skills' element={<Skills/>}/>
          <Route path='/resumeData/summary' element={<Summary/>}/>
        </Route>
        <Route path='/review' element={<Review/>}/>
      </Routes>
      </FormProvider>
      </TemplateContext>
    </>
  )
}

export default App
