import React, { Component } from 'react';
import './App.css';
import Form from './Form';


class App extends Component{
  // state = {
  //   fields: {}
  // };

  createPostRequest() {
    return fetch('localhost:8080/createDocument', {
           method: 'POST',
           headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
 
        body: JSON.stringify({ form 
      
    }),
});
  };
   

   onSubmit(form) {
     createPostRequest(); 
   //    fetch('localhost:8080/createDocument', {
   //        method: 'POST',
   //        headers: {
   //    'Accept': 'application/json',
   //    'Content-Type': 'application/json',
   //  },
 
   //        body: JSON.stringify({ fields })
         
   // }
   // )}
         // )}


 //      fetch('localhost:8080/createDocument', {
 //         method: 'POST',
 //         headers: {
 //      'Accept': 'application/json',
 //      'Content-Type': 'application/json',
 //    },
 
 //         body: JSON.stringify({
 
 //  'varDate': '<varDate>',
 //  'varStatementNumber': '<varStatementNumber>',
 //  'varFullName': '<varFullName>',
 //  'varHiredDate': '<varHiredDate>',
 //  'varProfession': '<varProfession>',
 //  'varProfessionCode': '<varProfessionCode>',
 //  'varSalaryDigits': '<varSalaryDigits>',
 //  'varSalaryString': '<varSalaryString>',
 //  'varSigningPerson': '<varSigningPerson>',
 //  'varSigningPersonsPosition': '<varSigningPersonsPosition>'
 //    })
 // })
 //              }
 //            };
 //     .then(function (response){
 //     console.log(response);
 //   });
     //.done();
 
  render() {
    return (
      <div className="App">
        <Form onSubmit={form => this.onSubmit(form)}/>
        //smth missing here
        </div>
    );
  }
}



export default App;
