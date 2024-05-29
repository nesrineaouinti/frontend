import React, { useState, useRef, useEffect } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
import { Box } from '@mui/joy';

// Configure PDF.js worker
GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.mjs`;

const PdfViewer = ({ file }) => {
  console.log('file',file)
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({ canvasRef, file : file, page });

  return (
    <Box >
      {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav>
          <ul className="pager">
            <li className="previous">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Previous
              </button>
            </li>
            <li className="next">
              <button
                disabled={page === pdfDocument.numPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </Box>
  );
};

export default PdfViewer;
