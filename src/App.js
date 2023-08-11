import React from "react";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import SignIn from "./UserRegister.js/SignIn";
import SignUp from "./UserRegister.js/SignUp";
import ForgetPassword from "./UserRegister.js/ForgetPassword";
import ResetPassword from "./UserRegister.js/ResetPassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./UserRegister.js/UserContext";
import CompanyList from "./MainParts/Companies";
import AskQuestion from "./QuestionParts/AskQuestions";
import Users from "./MainParts/Users";
import Questions from "./QuestionParts/Questions";
import QuestionsDetail from "./QuestionParts/QuestionDetail";
import SearchResults from "./QuestionParts/SearchResult";
import Tags from "./MainParts/Tags";
import TagQuestions from "./MainParts/TagQuestion";



function App() {
  return (
    <Router>
      <UserProvider>
   
   <div id="wrapper">
     
      <NavBar/>
       <SideBar/>
       <div className="main-div">
      <Routes >
      <Route path="/stack/sign-up"  element={<SignUp/>}/>
      <Route path="/stack/sign-in"  element={<SignIn/>}/>
      <Route path="/stack/forget-password"  element={<ForgetPassword/>}/>
      <Route path="/stack/reset-password"  element={<ResetPassword/>}/>
      <Route path="/stack/companies"  element={<CompanyList/>}/>
      <Route path="/stack/users"  element={<Users/>}/>
      <Route path="/stack/questions" element={<Questions/>}/>
      <Route path="/stack/questions/:questionId" element={<QuestionsDetail/>}/>
      <Route path="/stack/search" element={<SearchResults/>}/>
      <Route path="/stack/tags" element={<Tags/>}/>
      <Route path="/stack/questions/ask-questions"  element={<AskQuestion/>}/>
      <Route path="/stack/tags/:tagKeyword" component={TagQuestions} />

      
</Routes>
</div>
</div>
</UserProvider>
      </Router>
    
  );
}

export default App;
