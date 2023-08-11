import React from "react";
import { Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const Tags = () => {
  const tage = [
    {
      
      title: 'javascript',
      discription:'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that JavaScript is NOT Java. Include all tags that are relevant to your question: e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc.',
      
    },
    {
        title:'html',
        discription:'HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a minimal reproducible example and some idea of what youre trying to achieve. This tag is rarely used alone and is often paired with CSS and JavaScript.'
    },
    {
        title:'css',
        discription:'CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colors, layout, fonts, and animations. It also describes how elements should be rendered on screen, on paper, in speech, or on other media.'
    },
    {
        title:'node.js',
        discription:'Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Googles V8 JavaScript engine and libuv library. It is used for developing applications that make heavy use of the ability to run JavaScript both on the client as well as on the server side and therefore benefit from the re-usability of code and the lack of context switching.'
  },
    {
        title:'mysql',
        discription:'MySQL is a free, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this tag for other DBs such as SQL Server, SQLite etc. Those are different DBs that all use their own dialects of SQL to manage the data. Always specify the exact version of the server in the question. Versions 5.x differ greatly in their capabilities from versions 8+.'
    },
    {
        title:'c',
        discription:'C is a general-purpose programming language used for system programming (OS and embedded), libraries, games and cross-platform. This tag should be used with general questions concerning the C language, as defined in the ISO 9899 standard (the latest version, 9899:2018, unless otherwise specified — also tag version-specific requests with c89, c99, c11, etc). C is distinct from C++ and it should not be combined with the C++ tag without a specific reason.'
    },
    {
        title:'excel',
        discription:'Only for questions on programming against Excel objects or files, or formula development. You may combine the Excel tag with VBA, VSTO, C#, VB.NET, PowerShell, OLE automation, and other programming related tags and questions if applicable. Do NOT use with other spreadsheet software like [google-sheets].'
    },
    {
        title:'sql',
        discription:'Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data, and a tag for the DBMS implementation (e.g. MySQL, PostgreSQL, Oracle, MS SQL Server, IBM DB2, etc.) being used. If your question relates solely to a specific DBMS (uses specific extensions/features), use that DBMSs tag instead. Answers to questions tagged with SQL should use ISO/IEC standard SQL.'
    }
    
    
  ];

  return (
    <div>
    <h1>Tags</h1>
    <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
    <div className="company-container">
    <div className="row">
      {tage.map((tg, index) => (
        <Card  className="company-card col-md-4" key={index} >
          
          {/* <Card.Img variant="top" src={company.image} style={{ width: '250px', height: '200px', margin: '1rem' }}/> */}
          <Card.Body style={{backgroundColor:"rgb(228, 191, 191)"}}>
          <Link to={`/stack/tags/${tg.title}`}>
            <Button>{tg.title}</Button>
            </Link>
            <Card.Title>{tg.discription}</Card.Title>
            
            </Card.Body>
        </Card>
      ))}
    </div>
  </div>
  </div>
  );
};

export default Tags;