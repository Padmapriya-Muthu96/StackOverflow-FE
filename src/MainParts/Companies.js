import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CompanyList = () => {
  const companies = [
    {
      image:"https://cdn.iconscout.com/icon/free/png-256/free-zoho-282840.png",
      company: 'ZOHO',
      location:'chennai',
      Role: 'Web Developer',
      openings: '80',
      Apply:"https://careers.zohocorp.com/jobs/Careers"
    },
    {
      image:"https://cdn.iconscout.com/icon/free/png-256/free-zoho-282840.png",
      company: 'ZOHO',
      location:'chennai',
      Role: 'Front-end Developer',
      openings: '120',
      Apply:"https://careers.zohocorp.com/jobs/Careers"
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbw_RH3X4ij3S6dKQX_9wmRomcATpE2-6A2oTfsFP6Pqj8EDQ-StkoRb-cpZu6IKLC3K0&usqp=CAU",
      company: 'CTS',
      location:'chennai',
      Role: 'Backend Developer',
      openings: '60',
      Apply:"https://careers.cognizant.com/global/en"
    },
    {
      image:"https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/10/13/infosys-dh-1153267-1665679669.png?itok=p43w56kU",
      company: 'Infosys',
      location:'chennai',
      Role: 'Java Developer',
      openings: '500',
      Apply:"https://www.infosys.com/careers/apply.html"
  },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbw_RH3X4ij3S6dKQX_9wmRomcATpE2-6A2oTfsFP6Pqj8EDQ-StkoRb-cpZu6IKLC3K0&usqp=CAU",
      company: 'CTS',
      location:'chennai',
      Role: 'Accountant',
      openings: '10',
      Apply:"https://careers.cognizant.com/global/en"
    },
    {
      image:"https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/13b693b4dcc055d2344351b4c9a148e9",
      company: 'TCS',
      location:'chennai',
      Role: 'Manager',
      openings: '2',
      Apply:"https://www.tcs.com/careers"
    },
    {
      image:"https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/information-technology-companies/hcl-logo.png",
      company: 'HCL',
      location:'chennai',
      Role: 'Team Manager',
      openings: '6',
      Apply:"https://www.hcltech.com/careers/Careers-in-india"
    },
    {
      image:"https://content.jdmagicbox.com/comp/chennai/y6/044pxx44.xx44.090910140310.v4y6/catalogue/paragon-digital-services-pvt-ltd-mylapore-chennai-advertising-agencies-28in7v5-250.jpg",
      company: 'Paragon',
      location:'chennai',
      Role: 'Team Lead',
      openings: '8',
      Apply:"https://www.paragondigitalservices.com/careers/"
    }
    
    
  ];

  return (
    <div>
    <h1>Companies</h1>
    <p>Learn about what it's like to work at companies</p>
    <div className="company-container">
      {companies.map((company, index) => (
        <Card  className="company-card" key={index} >
          
          <Card.Img variant="top" src={company.image} style={{ width: '250px', height: '200px', margin: '1rem' }}/>
          <Card.Body >
            <Card.Title>Company: {company.company}</Card.Title>
            <Card.Title>Location: {company.location}</Card.Title>
            <Card.Text>Role: {company.Role}</Card.Text>
            <Card.Text>openings: {company.openings} </Card.Text>
            <Card.Text>Apply: <Link>{company.Apply}</Link></Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  </div>
  );
};

export default CompanyList;