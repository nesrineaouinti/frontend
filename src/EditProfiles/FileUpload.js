import React from 'react';

const containerStyle = {
  position: 'relative',
  Width: '22rem', // increased container width
  height: '10rem', // increased container height
  borderRadius: '0.75rem', // increased border radius
  border: '2px dashed #A0AEC0', // changed border color to grey
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const inputStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  cursor: 'pointer',
};

const cloudStyle = {
  width: '4rem', // decreased cloud icon size
  height: 'auto', // to maintain aspect ratio
  color: 'red', // changed cloud color to blue
};

const textStyle = {
  marginTop: '0.75rem',
  color: '#A0AEC0',
  textAlign: 'center',
};

export default function FileUpload() {
  return (
    <div style={containerStyle}>
      <input id="file" type="file" style={inputStyle} />
      <svg className="w-10 h-10 mx-auto" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={cloudStyle}>
        <path d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667" stroke="#4281fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p style={textStyle}>Click to <span style={{ fontWeight: '600' }}>Upload your file</span> or drag and drop your file here</p>
    </div>
  );
}
