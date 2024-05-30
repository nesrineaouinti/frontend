import React, { useState, useRef, useEffect } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
import './PdfViewer.css'; // Create this CSS file for styling
import { Box } from '@mui/material';

// Configure PDF.js worker
GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.mjs`;

const PdfViewer = ({ file }) => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);
  const renderTaskRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({ canvasRef, file, page });

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas && pdfPage) {
      const container = canvas.parentElement;
      const containerWidth = container.offsetWidth;

      const viewport = pdfPage.getViewport({ scale: 1 });
      const scale = containerWidth / viewport.width;
      const scaledViewport = pdfPage.getViewport({ scale });

      canvas.height = scaledViewport.height;
      canvas.width = scaledViewport.width;

      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }

      const renderContext = {
        canvasContext: canvas.getContext('2d'),
        viewport: scaledViewport,
      };

      renderTaskRef.current = pdfPage.render(renderContext);
      renderTaskRef.current.promise.catch((error) => {
        if (error.name !== 'RenderingCancelledException') {
          console.error('Render failed:', error);
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial call to set the canvas size

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [pdfPage]);

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
