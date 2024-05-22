import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <iframe title="Resume" src={`${process.env.PUBLIC_URL}/Mohd_Ayaz_Resume.pdf`} width="100%" height="800px"></iframe>
    </div>
  );
}

export default Resume;
