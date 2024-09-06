import React from 'react';
import './Resume.css';
import Headers from '../components/Header';
import Footer from '../components/Footer';

function Resume() {
  const pdfFileId = '1EWYOtsccVPaKPQei4E-mTXGlCa4FxJ_A'; // Replace with your actual file ID
  const pdfUrl = `https://drive.google.com/file/d/${pdfFileId}/preview`;

  return (
    <>
    <Headers/>
    <div className="resume">
      <h1 className="resume-title">My Resume</h1>

      <div className="resume-viewer">
        <iframe
          src={pdfUrl}
          width="600"
          height="800"
          style={{ border: 'none' }}
          title="Resume"
        ></iframe>
      </div>

      <div className="resume-download">
        <a href={`https://drive.google.com/uc?export=download&id=${pdfFileId}`} download="AkshayTripathi_Resume.pdf" className="download-button">
          Download My Resume
        </a>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Resume;
