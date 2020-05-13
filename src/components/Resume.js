import React, { useEffect, useState } from 'react';

export default function Resume() {
  return (
    <div className="Resume">
      {/* <h1>Resume</h1> */}
      <embed src="/images/Resume.pdf" type="application/pdf"></embed>
    </div>
  );
}